import React, {useCallback, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  TapGestureHandler,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const InstaPicLike = ({caption,imageSource}) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);
  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
  }));

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: Math.max(scale.value, 0.5)}],
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(0.65, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  const onSingleTap = useCallback(() => {
    console.log('click');
    opacity.value = withTiming(0.5, undefined, isFinished => {
      if (isFinished) {
        opacity.value = withDelay(1000, withTiming(1));
      }
    });
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}>
          <ScrollView >
            <Animated.View>
              <ImageBackground
                source={imageSource}
                style={styles.image}>
                <AnimatedImage
                  source={require('../assets/heart.png')}
                  style={[
                    styles.image,
                    {
                      shadowOffset: {width: 0, height: 20},
                      shadowOpacity: 0.35,
                      shadowRadius: 35,
                    },
                    rStyle,
                  ]}
                  resizeMode={'center'}
                />
              </ImageBackground>
              <Animated.Text style={[styles.Text, rTextStyle]}>
                {caption}
              </Animated.Text>
            </Animated.View>
          </ScrollView>
        </TapGestureHandler>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

export default InstaPicLike;

const {width: SIZE} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  Text: { fontSize: 40, textAlign: 'center', marginTop: 0 },
});
