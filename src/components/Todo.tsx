import { useContext } from "react";
import TodoForm from "./Todo/TodoForm";
import SingleTodo from "./Todo/SingleTodo";
import TodoContext from "../contexts/TodoContext";

const Todo = () => {
   const { todos } = useContext(TodoContext);
   return (
      <div className=" w-screen bg-gray-300 ] h-full">
         <h2 className="text-[30px] font-bold text-neutral-500 py-5 text-center">Todo App</h2>
         <div className="p-10 w-[50%] shadow-md bg-white rounded-md mx-auto">
            <div className="flex items-center">
               <TodoForm />
            </div>
            <div className="">
               <div className="py-2 overflow-y-auto border-t border-t-slate-500 flex flex-wrap">
                  {
                     todos.map((todo, i) => <SingleTodo key={todo.todo + "-" + i} todo={todo} />)
                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default Todo;


