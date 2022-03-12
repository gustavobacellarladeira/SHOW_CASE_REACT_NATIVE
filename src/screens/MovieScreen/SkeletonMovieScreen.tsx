import React from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { Skeleton } from "../../components";
import { Container } from "./Styles";

export const SkeletonMovieScreen: React.FC = () => {
  const skeletonList = () => {
    return (
      <View style={styles.section}>
        <View style={styles.titleFlatlist}>
          <Skeleton borderRadius={10} />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{}}
          contentContainerStyle={{}}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <View style={styles.skeletonContainer}>
              <View style={styles.flatlistCard}>
                <Skeleton borderRadius={10} />
              </View>
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionPrimary}>
        <Skeleton />
      </View>
      <View style={styles.containerSection}>
        {skeletonList()}
        {skeletonList()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  containerSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  sectionPrimary: {
    height: "30%",
  },
  section: {
    width: "100%",
    flex: 1,
    minHeight: 160,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  skeletonContainer: {
    flex: 1,
    marginHorizontal: 10,
    minWidth: 140,
    minHeight: 160,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  flatlistCard: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  titleFlatlist: {
    alignSelf: "flex-start",
    margin: 10,
    width: "45%",
    height: 20,
  },
});
