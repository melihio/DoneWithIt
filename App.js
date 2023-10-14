import { View } from "react-native";
import AppCard from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListDetails from "./app/screens/ListDetails";

export default function App() {
  // return <WelcomeScreen />;
  return <ListDetails image={require("./app/assets/jacket.jpg")} />;
}
