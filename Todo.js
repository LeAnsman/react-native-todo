import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Todo({
  text,
  checked,
  handleDeleteTodo,
  handleChecked,
}) {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete todo",
      `Are you sure you want to delete the todo : ${text}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", onPress: handleDeleteTodo },
      ]
    );

  return (
    <View style={styles.todoContainer}>
      {checked ? (
        <Icon
          name="check-square"
          size={30}
          color="#7D6580"
          style={{ marginLeft: 15 }}
          onPress={handleChecked}
        />
      ) : (
        <Icon
          name="square"
          size={30}
          color="#7D6580"
          style={{ marginLeft: 15 }}
          onPress={handleChecked}
        />
      )}
      <View>
        <Text style={styles.todo}>{text}</Text>

        {checked && <View style={styles.verticalLine}></View>}
      </View>
      <Icon
        name="trash-2"
        size={30}
        color="#900"
        style={{ marginLeft: "auto", marginRight: 15 }}
        onPress={createTwoButtonAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    marginTop: "5%",
    flexDirection: "row",
    borderColor: "#E1B5E6",
    borderBottomWidth: 1.5,
    width: "100%",
    alignItems: "stretch",
    minHeight: 40,
  },
  todo: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    fontSize: 17,
    fontWeight: "bold",
    color: "#3E3240",
  },
  verticalLine: {
    borderBottomColor: "white",
    borderBottomWidth: 4,
    marginLeft: 10,
    width: "95%",
    position: "absolute",
    marginTop: 15,
  },
});
