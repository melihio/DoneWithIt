import {
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
  Button,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="click me"
        color="dodgerblue"
        onPress={() => {
          Alert.prompt("Test", "Password", (text) => console.log(text));
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
