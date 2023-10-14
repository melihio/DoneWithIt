import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import styles from "./styles";

function AppButton(props) {
  const custom = StyleSheet.create({
    style: {
      backgroundColor: props.color,
      marginVertical: props.marginVertical,
    },
  });

  return (
    <View style={[styles.button, custom.style]}>
      <AppText style={{ color: "#fff" }}>{props.text}</AppText>
    </View>
  );
}

export default AppButton;
