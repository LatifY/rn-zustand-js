import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Todo } from "../store/GlobalStore";
const TodoContainer = ({ todo: Todo  }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onPressHandler = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonPressable,
          pressed ? styles.buttonPressed : null,
        ]}
        hitSlop={8}
        onPress={onPressHandler}
      >
        <View style={styles.button}>
          <FontAwesome
            style={{ display: toggleCheckBox ? "flex" : "none" }}
            name="check"
            size={10}
            color="black"
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>{todo.label}</Text>
          <Text style={styles.date}>{todo.date}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "90%",
    height:  100,
    overflow: "hidden",
    backgroundColor: "#fcfcfc",
    borderRadius: 8,
    padding: 40,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,

    elevation: 2,
  },

  button: {
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderRadius: 4,
    opacity: 0.4,
  },

  buttonPressable: {
    flex: 1,
    flexDirection: "row"
  },

  buttonPressed: {
    opacity: 0.3,
  },

  info: {
    flex: 1,
    marginLeft: 20,
  },

  label: {
    fontSize: 24,
    textAlign: "left",
    fontWeight: "600",
  },

  date: {
    fontSize: 14,
    opacity: 0.3,
    marginTop: 5
  }
});
