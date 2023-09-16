import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import TodoContainer from "./components/TodoContainer";
import ProgressBar from 'react-native-progress/Bar';
import AddButton from "./components/AddButton";
import { useLayoutEffect, useState } from "react";
import { useTodoStore } from "./store/GlobalStore";




export default function App() {
  const w = Dimensions.get("screen").width
  const padding = 40

  const [todos, setTodos] = useState([])

  useLayoutEffect(() => {
    setTodos(useTodoStore((state) => state.todos))
  })

  const barWidth = w- padding * 2

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My ToDo</Text>
        <Text style={styles.progress}>2 of 7 tasks</Text>
      <ProgressBar style={styles.bar} progress={0.3} width={barWidth} color="black" />

      </View>


      <View style={styles.br}></View>

      <ScrollView>
        <View style={styles.list}>
          {todos.map((item) => <TodoContainer key={item.id} />)}
        </View>
      </ScrollView>

      <AddButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
  },
  header: {
    paddingHorizontal: 40,
    paddingVertical: 60,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  bar: {
    marginTop: 20
  },

  br: {
    marginVertical: 20,
    width: "100%",
    height: 2,
    backgroundColor: "#ccc",
    opacity: 0.3
  },

  title: {
    textAlign: "left",

    fontSize: 42,
    paddingVertical: 10,
    fontWeight: "900",
  },

  progress: {
    textAlign: "left",
    opacity: 0.4,
    fontWeight: "300"
  },

  list: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
