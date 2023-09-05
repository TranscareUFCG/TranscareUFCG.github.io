import { Box, NativeBaseProvider } from "native-base";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./Routes";
import { theme } from "./src/theme";

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  return (
    <>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NativeBaseProvider theme={theme}>
            <Box bg={"primary.100"} safeAreaTop />
            <Routes />
          </NativeBaseProvider>
        </GestureHandlerRootView>
    </>
  );
}
