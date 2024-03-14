import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BUTTON_WIDTH = Dimensions.get('screen').width - 20;
const BUTTON_HEIGHT = 85;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENTIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENTIONS;
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const SwipeButton = ({onToggle}: any) => {
  const [toggle, setToggle] = useState(false);

  const handleComplete = (isToggeld: boolean) => {
    if (isToggeld !== toggle) {
      setToggle(isToggeld);
      onToggle(isToggeld);
    }
  };

  const x = useSharedValue(0);

  const gestureHandler = Gesture.Pan()
    .onUpdate(e => {
      let newVal = e.translationX;
      if (toggle) {
        newVal = H_SWIPE_RANGE + e.translationX;
      } else {
        newVal = e.translationX;
      }
      if (newVal >= 0 && newVal <= H_SWIPE_RANGE) {
        x.value = newVal;
      }
    })
    .onEnd(e => {
      if (x.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENTIONS / 2) {
        x.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        x.value = withSpring(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    });

  const InterPolateXInputRange = [0, H_SWIPE_RANGE];
  const AnimatedStyle = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{translateX: x.value}],
        backgroundColor: interpolateColor(
          x.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENTIONS - BUTTON_PADDING],
          ['#D6D6D6', '#D4D4D4'],
        ),
      };
    }),
    text: useAnimatedStyle(() => {
      return {
        opacity: interpolate(x.value * 1.5, InterPolateXInputRange, [0.8, 0]),
        transform: [
          {
            translateX: interpolate(x.value, InterPolateXInputRange, [
              0,
              BUTTON_WIDTH / 2 - SWIPEABLE_DIMENTIONS,
            ]),
          },
        ],
      };
    }),
  };

  return (
    <View style={styles.swipeContainer}>
      <View
        style={{
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0,
          height: '100%',
          width: '100%',
        }}>
        {isIOS && (
          <BlurView
            blurType="light"
            blurAmount={1}
            style={{
              height: BUTTON_HEIGHT,
              width: BUTTON_WIDTH,
              borderRadius: BUTTON_HEIGHT / 2,
            }}></BlurView>
        )}
      </View>
      <GestureDetector gesture={gestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyle.swipeable]}>
          <MaterialCommunityIcons
            name="chevron-double-right"
            size={32}
            color="grey"
          />
        </Animated.View>
      </GestureDetector>
      <Animated.Text style={[styles.text, AnimatedStyle.text]}>
        Swipe to Get Started
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeContainer: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    padding: BUTTON_PADDING,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BUTTON_HEIGHT / 2,
    marginLeft: BUTTON_PADDING,
    marginRight: BUTTON_PADDING,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginBottom: 28,
  },
  swipeable: {
    height: SWIPEABLE_DIMENTIONS,
    width: SWIPEABLE_DIMENTIONS,
    borderRadius: SWIPEABLE_DIMENTIONS,
    position: 'absolute',
    left: BUTTON_PADDING,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    zIndex: 2,
    color: '#D6D6D6',
  },
  colorView: {
    position: 'absolute',
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
});

export default SwipeButton;
