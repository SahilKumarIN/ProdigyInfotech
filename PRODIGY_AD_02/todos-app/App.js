import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Switch,
  StatusBar as SB,
  SafeAreaView,
  View,
} from "react-native";
import TodoContainer from "./src/TodoContainer";

export default function App() {
  const [mode, setMode] = useState("light");
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: mode === "light" ? "#fff" : "#0d0d0d" },
      ]}
    >
      <StatusBar style={mode === "light" ? "dark" : "light"} />
      <View
        style={{
          marginTop: SB.currentHeight,
          alignItems: "center",
          flex: 1,
          width: "100%",
        }}
      >
        <Switch
          value={mode === "dark"}
          onChange={() =>
            mode === "light" ? setMode("dark") : setMode("light")
          }
        />
        <TodoContainer mode={mode} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: SB.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
