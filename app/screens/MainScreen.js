import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import AppCard from "../components/Card";
import colors from "../config/colors";

const data = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red Jacket For Sale",
    subTitle: "100$",
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    subTitle: "1000$",
  },
];

function MainScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  flatList: {
    padding: 20,
  },
});

export default MainScreen;
