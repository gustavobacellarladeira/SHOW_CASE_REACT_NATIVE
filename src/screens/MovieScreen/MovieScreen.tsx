import React from "react";
import { View, StyleSheet } from "react-native";
import { Skeleton, SkeletonHorizontal } from "../../components";
import { Container, Title } from "./Styles";

export const MovieScreen = () => {
  const loading = false;

  return (
    <Container>
      {loading ? <View style={styles.block}></View> : <View />}
      {/* 
      <Skeleton variant="box" width="100%" height={200} /> */}

      <View style={{ width: 200, height: 100, backgroundColor: "red" }}>
        <SkeletonHorizontal width={150} />
      </View>
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
