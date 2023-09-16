import { uid } from "react-uid"
import { create } from "zustand"

export class Todo{
    constructor(label) {
        this.id = uid(label)
        this.label = label
        this.date = Date.now()
        this.checked = false
    }
}

export const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (label) => set((state) => ({todos: [...state.todos, new Todo(label)]})),
    removeTodo: (id) => set((state) => ({todos: state.todos.filter((item) => item.id != id)})),
    updateTodo: (id) => set((state) => ({todos: state.todos.map((item) => {
        if(item.id === id){
            item.checked = !item.checked
        }
        return item
    })}))
}))
