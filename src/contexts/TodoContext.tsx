import { createContext, PropsWithChildren, useState } from "react";
import { Todo as TodoTypes } from "../components/Todo/SingleTodo";


type TodoContext = {
   todos: TodoTypes[],
   addTodos: (todo: TodoTypes) => void,
   updateTodos: (todo: TodoTypes) => void
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
   const updateTodos = (updatedtodo: TodoTypes) => {
      setTodos(todos.map(todo => todo.id === updatedtodo.id ? { ...todo, status: updatedtodo.status, todo: updatedtodo.todo } : todo))
   }
   return <TodoContext.Provider value={{ todos, addTodos, updateTodos }}>
      {children}
   </TodoContext.Provider>
}

export default TodoContext;