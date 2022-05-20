/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {Page} from './src/components/Page';
import PanGestureComp from './src/components/PanGestureComp';
import InstaPicLike from './src/components/InstaPicLike';
import {ScrollView} from 'react-native-gesture-handler';

const WORDS = ["What's", 'up', 'react native', 'devs?'];

export default function App() {
  const translateX = useSharedValue(0);
  // this function is for page Component
  // const scrollHandler = useAnimatedScrollHandler(event => {
  //   translateX.value = event.contentOffset.x;
  // });

  return (
    // this code is for Page Components
    // <Animated.ScrollView
    //   onScroll={scrollHandler}
    //   pagingEnabled
    //   scrollEventThrottle={16}
    //   horizontal
    // >
    //   {WORDS.map((title, index) => {
    //     return (
    //       <Page
    //         key={index}
    //         title={title}
    //         translateX={translateX}
    //         index={index}
    //       />
    //     );
    //   })}
    // </Animated.ScrollView>
    // <PanGestureComp/>
    <ScrollView>
      <InstaPicLike
        imageSource={require('./src/assets/image.jpeg')}
        caption={'This is caption'}
      />
      <InstaPicLike
        imageSource={require('./src/assets/img55.jpg')}
        caption={'This is caption'}
      />
      <InstaPicLike
        imageSource={require('./src/assets/img66.jpg')}
        caption={'This is caption'}
      />
      <InstaPicLike
        imageSource={require('./src/assets/img22.jpg')}
        caption={'This is caption'}
      />
      <InstaPicLike
        imageSource={require('./src/assets/img88.jpg')}
        caption={'This is caption'}
      />
    </ScrollView>
  );
}
