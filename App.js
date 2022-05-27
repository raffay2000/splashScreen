/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useEffect,useState} from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { StyleSheet,View,Button ,Dimensions,SafeAreaView,Text,TouchableOpacity} from 'react-native';

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import SplashScreen from 'react-native-splash-screen';
// import {Page} from './src/components/Page';
// import PanGestureComp from './src/components/PanGestureComp';
// import InstaPicLike from './src/components/InstaPicLike';
// import {ScrollView} from 'react-native-gesture-handler';
// import AnimatedSplash from "react-native-animated-splash-screen";
import { DefaultTheme,Provider as PaperProvider} from 'react-native-paper';
import { musicData } from './src/components/musicData';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MusicPlayer from './src/screens/MusicPlayer';
const {width, height} = Dimensions.get('window');

// const WORDS = ["What's", 'up', 'react native', 'devs?'];//FOR ANIMATION


export default function App(){
  // const translateX = useSharedValue(0);
  // // this function is for page Component
  // const scrollHandler = useAnimatedScrollHandler(event => {
  //   translateX.value = event.contentOffset.x;
  // });

  useEffect(()=>{
    SplashScreen.hide()
    // setTimeout(() => {
    //   setIsLoaded(true)
    // }, 1500);
  },[])
  return (
    /* this code is for Page Components */
    /* <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
    >
      {WORDS.map((title, index) => {
        return (
          <Page
            key={index}
            title={title}
            translateX={translateX}
            index={index}
          />
        );
      })}
    </Animated.ScrollView> */
    // // this is panGestureComponent
    // <PanGestureComp/>
    // // this is instagram components
    //   <AnimatedSplash
    //   translucent={true}
    //   isLoaded={isLoaded}
    //   logoImage={require("./src/assets/ChoozleyPic.png")}
    //   backgroundColor={"#262626"}
    //   logoHeight={150}
    //   logoWidth={150}
    // >
    // <ScrollView>
    //   <StatusBar translucent={true} backgroundColor={'transparent'}/>
    //   <InstaPicLike
    //     imageSource={require('./src/assets/image.jpeg')}
    //     caption={'This is caption'}
    //   />
    //   <InstaPicLike
    //     imageSource={require('./src/assets/img55.jpg')}
    //     caption={'This is caption'}
    //   />
    //   <InstaPicLike
    //     imageSource={require('./src/assets/img66.jpg')}
    //     caption={'This is caption'}
    //   />
    //   <InstaPicLike
    //     imageSource={require('./src/assets/img22.jpg')}
    //     caption={'This is caption'}
    //   />
    //   <InstaPicLike
    //     imageSource={require('./src/assets/img88.jpg')}
    //     caption={'This is caption'}
    //   />
    // </ScrollView>
    // </AnimatedSplash>
  <>
  <MusicPlayer/>
  </>
  );
}

const styles = StyleSheet.create({
  
});