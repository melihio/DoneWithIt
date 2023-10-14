import { View } from "react-native";
import AppCard from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // return <WelcomeScreen />;
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#f8f4f4",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppCard
        title="Title"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
