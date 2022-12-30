import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR_BLACK, COLOR_WHITE } from "../../res/drawables";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={{ color: COLOR_WHITE }}>This is a mp3player app!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
});
