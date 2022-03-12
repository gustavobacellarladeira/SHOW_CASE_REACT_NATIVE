import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";

interface SkeletonProps {
  variant?: "box" | "text" | "box2";
  width?: number | string;
  height?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "box",
  width,
  height,
}) => {
  const opacity = useRef(new Animated.Value(0.2));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.2,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => {
      opacity.current.stopAnimation();
    };
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.loading,
        { opacity: opacity.current, width: width, height: height },
      ]}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "grey",
    height: "50%",
    width: "50%",
  },
});
