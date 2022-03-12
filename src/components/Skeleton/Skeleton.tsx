import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

interface SkeletonProps {
  bakcgroundColor?: string;
  borderRadius?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  bakcgroundColor = "grey",
  borderRadius = 0,
}) => {
  const AnimatedValueOpacity = useRef(new Animated.Value(0.2)).current;
  const AnimatedValueOpacity2 = useRef(new Animated.Value(1)).current;

  const AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log("Skeleton useEffect called !!! *** !!!");
    Animated.loop(
      Animated.sequence([
        Animated.timing(AnimatedValueOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(AnimatedValueOpacity, {
          toValue: 0.2,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => {
      AnimatedValueOpacity.stopAnimation();
    };
  }, [AnimatedValueOpacity]);

  // useEffect(() => {
  //   circleAnimated();

  //   return () => circleAnimated();
  // }, []);

  // const circleAnimated = () => {
  //   Animated.loop(
  //     Animated.timing(AnimatedValue, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     })
  //   ).start();

  //   Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(AnimatedValueOpacity2, {
  //         toValue: 0.2,
  //         duration: 800,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(AnimatedValueOpacity2, {
  //         toValue: 1,
  //         duration: 800,
  //         useNativeDriver: true,
  //       }),
  //     ])
  //   ).start();
  // };

  // const translateX = AnimatedValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [-100, 300],
  // });

  return (
    <Animated.View
      style={{
        borderRadius: borderRadius,
        flex: 1,
        opacity: AnimatedValueOpacity,
        backgroundColor: bakcgroundColor,
      }}
    >
      {/* <Animated.View
        style={{
          backgroundColor: "#ffffff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,

          height: "100%",
          width: "30%",
          opacity: AnimatedValueOpacity2,
          transform: [{ translateX: translateX }],
        }}
      ></Animated.View> */}
    </Animated.View>
  );
};
