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

  useEffect(() => {
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

  return (
    <Animated.View
      style={{
        borderRadius: borderRadius,
        flex: 1,
        opacity: AnimatedValueOpacity,
        backgroundColor: bakcgroundColor,
      }}
    ></Animated.View>
  );
};
