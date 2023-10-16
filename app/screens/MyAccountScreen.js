import AppText from "../components/AppText";
import { StyleSheet, Image, View } from "react-native";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import SettingItem from "../components/SettingItem";
import ListItemSeperator from "../components/ListItemSeperator";

function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/mosh.jpg")} />
        <View style={styles.textContainer}>
          <AppText>Mosh Hamedani</AppText>
          <AppText style={styles.mailText}>
            programmingwithmosh@gmail.com
          </AppText>
        </View>
      </View>
      <SettingItem
        bgColor={colors.primary}
        text="My Listings"
        iconName="format-list-bulleted"
      />
      <ListItemSeperator />
      <SettingItem
        bgColor={colors.secondary}
        text="My Messages"
        iconName="logout"
      />
      <SettingItem
        bgColor={colors.tertiary}
        text="Log out"
        iconName="email"
        style={{ marginTop: 35 }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginVertical: 10,
  },
  container: {
    marginVertical: 30,
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 15,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },

  mailText: {
    color: colors.medium,
    fontSize: 15,
  },
});

export default MyAccountScreen;
