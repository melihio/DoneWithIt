import React from "react";
import { View } from "react-native";
import colors from "../../config/colors";

function ListItemSeperator() {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
        marginVertical: 10,
      }}
    />
  );
}

export default ListItemSeperator;
