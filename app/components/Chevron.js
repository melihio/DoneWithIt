import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Chevron({ size = 35, style }) {
  return (
    <MaterialCommunityIcons
      style={style}
      name="chevron-right"
      size={size}
      color={colors.medium}
    />
  );
}

export default Chevron;
