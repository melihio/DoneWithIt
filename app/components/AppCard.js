import { Image, View, StyleSheet } from "react-native";
import styles from "./styles";
import AppText from "./AppText";

function AppCard({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.imageStyle} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 25,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default AppCard;
