import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";

function WelcomeScreen() {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text children="Sell What You Don't Need" />
        </View>
        <View style={styles.loginButton} />
        <View style={styles.registerButton} />
      </ImageBackground>
    </>
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
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    top: 70,
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
