import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";

interface SkeletonHorizontalProps {
  variant?: "box" | "text" | "box2";
  width?: number;
  height?: number;
}

export const SkeletonHorizontal: React.FC<SkeletonHorizontalProps> = ({
  variant = "box",
  width,
  height,
}) => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;
  const Animatedopacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    circleAnimated();

    return () => circleAnimated();
  }, []);

  const circleAnimated = () => {
    Animated.loop(
      Animated.timing(AnimatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(Animatedopacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(Animatedopacity, {
          toValue: 0.5,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 300],
  });

  return (
    <Animated.View
      style={[
        styles.loading,
        {
          opacity: Animatedopacity,
          transform: [{ translateX: translateX }],
        },
      ]}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "#333",
    width: "20%",
    height: "100%",
  },
});
