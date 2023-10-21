import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

function PickerItem({ label, onPress, item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <AppText numberOfLines={2} style={styles.text}>
        {item.label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    width: "33%",
  },
  text: {
    textAlign: "center",
    marginTop: 5,
  },
});

export default PickerItem;
