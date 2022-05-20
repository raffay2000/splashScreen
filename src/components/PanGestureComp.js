import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const translateX2 = useSharedValue(0);
  const translateY2 = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX2.value;
      context.translateY = translateY2.value
    },
    onActive: (event, context) => {
      translateX2.value = event.translationX + context.translateX;
      translateY2.value = event.translationY + context.translateY;

    },
    onEnd: () => {
      const distance = Math.sqrt(translateX2.value ** 2 + translateY2.value ** 2)
      if(distance < CIRCLE_RADIUS) {
        translateX2.value = withSpring(0)
        translateY2.value = withSpring(0)
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX2.value,
        },
          {
            translateY: translateY2.value,
          },
      ],
      
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.square, rStyle]} />
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0, 0, 256, 0.5)',
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 5,
    borderColor: 'rgba(0, 0, 256, 0.5)',
  },
});