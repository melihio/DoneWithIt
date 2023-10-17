import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
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

export default styles;
