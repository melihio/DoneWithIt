import React from "react";
import { View, TouchableOpacity } from "react-native";
import AppText from "../AppText";
import styles from "./styles";

function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <AppText style={{ color: "#fff" }}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default AppButton;
