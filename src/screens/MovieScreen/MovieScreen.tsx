import React from "react";
import { View, StyleSheet } from "react-native";
import { Skeleton, SkeletonHorizontal } from "../../components";
import { SkeletonMovieScreen } from "./SkeletonMovieScreen";
import { Container, Title } from "./Styles";

export const MovieScreen = () => {
  const loading = false;

  return (
    <Container>
      {loading ? <View style={styles.block}></View> : <SkeletonMovieScreen />}
    </Container>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#333",
    height: "50%",
    width: "50%",
  },
  loading: {
    backgroundColor: "grey",
    height: "50%",
    width: "50%",
  },
});
