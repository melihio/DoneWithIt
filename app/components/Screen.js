import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children }) {
  return (
    // <SafeAreaView style={[styles.screen]}>
    <View style={styles.screen}>{children}</View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "yellow",
    // flex: 1,
  },
});

export default Screen;
