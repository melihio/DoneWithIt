import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function SettingItem({ iconName, text, size, bgColor, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.circle, { backgroundColor: bgColor }]}>
        <MaterialCommunityIcons
          color={colors.white}
          size={size || 20}
          name={iconName}
        />
      </View>
      <AppText>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.primary,
    marginRight: 20,
  },
});

export default SettingItem;
