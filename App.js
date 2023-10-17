import { GestureHandlerRootView } from "react-native-gesture-handler";
import MyAccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      {/* <MainScreen /> */}
      <MyAccountScreen />
    </GestureHandlerRootView>
  );
}
