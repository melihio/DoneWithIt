import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <View style={styles.closeIcon} />
        <View style={styles.deleteIcon} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    top: 40,
    left: 30,
    position: "absolute",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    top: 40,
    right: 30,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  rowView: {
    flex: 0.5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 500,
  },
});

export default ViewImageScreen;
