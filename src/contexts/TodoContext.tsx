import { createContext, PropsWithChildren, useState } from "react";
import { Todo as TodoTypes } from "../components/SingleTodo";


type TodoContext = {
   todos: TodoTypes[],
   addTodos: (todo: TodoTypes) => void,
   updateTodos: (id: number) => void
}
const TodoContext = createContext<TodoContext>({
   todos: [],
   addTodos: () => { },
   updateTodos: () => { }
});


export const TodoProvider = ({ children }: PropsWithChildren) => {
   const [todos, setTodos] = useState<TodoTypes[]>([]);
   const addTodos = (todo: TodoTypes) => {
      setTodos(prevTodos => [...prevTodos, todo]);
   }
   const updateTodos = (id: number) => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, status: true } : todo))
   }
   return <TodoContext.Provider value={{ todos, addTodos, updateTodos }}>
      {children}
   </TodoContext.Provider>
}

export default TodoContext;