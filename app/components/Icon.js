import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ name, size = 25, color = "#fff", backgroundColor = "#000" }) {
  return (
    <View style={[styles.circle, { backgroundColor: backgroundColor }]}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50,
    padding: 10,
  },
});

export default Icon;
