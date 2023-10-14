import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import AppButton from "../components/Button";
import AppText from "../components/AppText";
import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton marginVertical={15} color={colors.primary} text="LOGIN" />
        <AppButton color={colors.secondary} text="REGISTER" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    padding: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    top: 70,
    height: 140,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
