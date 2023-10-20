import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";

data = [
  { title: "My Listings", name: "email" },
  { title: "My Messages", name: "email" },
];

function MyAccountScreen() {
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
        ImageComponent={
          <Icon name="format-list-bulleted" backgroundColor={colors.primary} />
        }
        style={{ backgroundColor: "white" }}
      />
      <ListItem
        title="My Messages"
        ImageComponent={
          <Icon name="email" backgroundColor={colors.secondary} />
        }
        style={{ backgroundColor: "white" }}
      />
      <ListItem
        title="Log Out"
        ImageComponent={
          <Icon name="logout" backgroundColor={colors.tertiary} />
        }
        style={{ marginTop: 15, backgroundColor: "white" }}
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
