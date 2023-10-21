import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <AppText style={{ color: "#fff" }}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppButton;
