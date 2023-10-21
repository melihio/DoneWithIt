import React from "react";
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import AppText from "./AppText";
import colors from "../config/colors";
import Chevron from "./Chevron";

function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
  style,
  showChevrons,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.parent}>
          <View style={[styles.container, style]}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={[styles.subTitle, { fontSize: 18 }]}>
                  {subTitle}
                </AppText>
              )}
            </View>
          </View>
          {showChevrons && <Chevron style={{ alignSelf: "center" }} />}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItem: "center",
  },
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: "100",
  },
  title: {
    fontWeight: "500",
  },
  textContainer: {
    marginLeft: 10,
  },
});

export default ListItem;
