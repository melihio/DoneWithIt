import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainScreen from "./app/screens/MainScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <MainScreen />
    </GestureHandlerRootView>
  );
}
