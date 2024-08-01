import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Todo from "./Todo";
import { LinearGradient } from "expo-linear-gradient";

const TodoContainer = ({ mode }) => {
  const [todos, setTodos] = useState([
    "this is a todo",
    "this is another todo.",
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalForm, setModalForm] = useState("");

  function handleTodoPress(todo) {
    let mytodo = todos.filter((myTodo) => todo !== myTodo);
    setTodos(mytodo);
  }

  function handleAddTodo() {
    if (modalForm.trim()) {
      setTodos([...todos, modalForm]);
      setModalForm(""); // Clear the input field
      setShowModal(false); // Optionally close the modal
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={[styles.heading, { color: mode === "light" ? "#000" : "#fff" }]}
      >
        Todos
      </Text>

      {/* Todos Container */}
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => handleTodoPress(item)}>
              <Todo item={item} mode={mode} key={index} />
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.errorBox}>
          <Text style={styles.errorTxt}>Error Message.</Text>
        </View>
      )}

      {/* Add Todo - ICON/BUTTON */}
      <Pressable
        style={[
          styles.addTodoIconContainer,
          { backgroundColor: mode === "light" ? "#000" : "#fff" },
        ]}
        onPress={() => setShowModal(true)} // Show modal on press
      >
        <Text
          style={[
            styles.addTodoIcon,
            { color: mode === "light" ? "#fff" : "#000" },
          ]}
        >
          +
        </Text>
      </Pressable>

      {/* Modal - Add Todo Form */}
      <Modal visible={showModal} transparent={true} animationType="slide">
        <LinearGradient
          style={{ flex: 1 }}
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.7)"]}
        >
          <View style={styles.modalContainer}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
            <Text style={styles.modalHeading}>Add Todo</Text>
            <TextInput
              style={styles.input}
              editable={true}
              placeholder="Enter your Todo"
              placeholderTextColor="gray"
              keyboardType="default"
              value={modalForm}
              onChangeText={(txt) => setModalForm(txt)}
            />
            <Pressable
              style={styles.button}
              onPress={() => handleAddTodo()}
              accessibilityLabel="Add Todo"
            >
              <Text style={styles.buttonText}>Add Todo</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </Modal>
    </View>
  );
};

export default TodoContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
  },
  errorBox: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
  },
  errorTxt: {
    color: "red",
  },
  addTodoIconContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 50,
    width: 50,
    borderRadius: 999,
    elevation: 4,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addTodoIcon: {
    fontSize: 30,
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    margin: "auto",
    padding: 20,
    borderRadius: 12,
    gap: 2,
    position: "relative",
  },
  modalHeading: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 999,
    padding: 6,
  },
  closeButtonText: {
    color: "white",
    fontSize: 14,
  },
});
