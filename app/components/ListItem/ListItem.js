import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import AppText from "../AppText";
import styles from "./styles";
import colors from "../../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
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
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;
