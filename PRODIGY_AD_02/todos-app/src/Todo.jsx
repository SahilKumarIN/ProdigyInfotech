import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Todo = ({ item, mode }) => {
  return (
    <View style={styles.todoBox}>
      <Text
        style={[styles.todoTxt, { color: mode === "light" ? "#000" : "#fff" }]}
      >
        {item}
      </Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoBox: {
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    padding: 16,
    marginVertical: 10,
  },
});
