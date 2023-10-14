import { Image, View } from "react-native";
import styles from "./styles";
import AppText from "../AppText";

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

export default AppCard;
