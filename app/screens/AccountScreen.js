import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";

data = [
  { title: "My Listings", name: "email" },
  { title: "My Messages", name: "email" },
];

function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
        style={{ backgroundColor: "white", marginBottom: 40 }}
      />
      <ListItem
        title="My Listings"
        ImageComponent={<Icon name="format-list-bulleted" />}
        style={{ backgroundColor: "white" }}
      />
      <ListItem
        title="My Messages"
        ImageComponent={<Icon name="email" />}
        style={{ backgroundColor: "white" }}
      />
      <ListItem
        title="Log Out"
        ImageComponent={
          <Icon name="logout" backgroundColor={colors.tertiary} />
        }
        style={{ marginTop: 15, backgroundColor: "white" }}
      />
      {/* <View style={styles.container}>
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
      /> */}
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
