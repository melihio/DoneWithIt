import React from "react";
import { Text } from "react-native";
import styles from "./styles";

function AppText(props) {
  const style = { color: props.color };
  return <Text style={[styles.text, style]}>{props.children}</Text>;
}

export default AppText;
