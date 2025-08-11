
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";

import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme()
  
  const todos = useQuery(api.todos.getTodos)
  console.log(todos)

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodo = useMutation(api.todos.clearAllTodos)
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <Pressable onPress={toggleDarkMode}>
        <Text>
          Toggle color
        </Text>
      </Pressable>
      <Pressable onPress={()=> addTodo({text: "Hello World"})}>
        <Text>
          Toggle color
        </Text>
      </Pressable>
            <Pressable onPress={()=> clearAllTodo()}>
        <Text>
          Clear All
        </Text>
      </Pressable>       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    fontSize: 32
  }
})
