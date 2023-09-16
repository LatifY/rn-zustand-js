import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.container}>
        <FontAwesome style={styles.plus} name="plus" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    right: 30,
    bottom: 30,
    backgroundColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    elevation: 3,
  },

  plus: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
