import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Todo from "./Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");



  const handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue("");
    }
  };

  handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true;
      })
    );
  };

  handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>To do's</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new Todo"
          placeholderTextColor="#3E3240"
          onChangeText={(value) => setValue(value)}
          value={value}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.key}
            checked={todo.checked}
            handleDeleteTodo={() => handleDeleteTodo(todo.key)}
            handleChecked={() => handleChecked(todo.key)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "baseline",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FACAFF",
  },
  text: {
    fontSize: 18,
    paddingTop: "7%",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E1B5E6",
    borderBottomWidth: 2,
    paddingRight: 10,
    marginTop: "5%",
  },
  textInput: {
    flex: 1,
    minHeight: "7%",
    fontSize: 24,
    fontWeight: "bold",
    color: "#3E3240",
    paddingLeft: 10,
  },
  textButton: {
    fontSize: 48,
    color: "#3E3240",
  },
});
