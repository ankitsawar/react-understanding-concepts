
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Todo as TodoTypes } from "./SingleTodo";
import TodoContext from "../contexts/TodoContext";

type Inputs = {
   todo: string
}

let autoID = 0;

const TodoForm = () => {
   const { addTodos } = useContext(TodoContext)
   const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
   const createTodo: SubmitHandler<Inputs> = data => {
      const todo: TodoTypes = {
         todo: data.todo,
         id: ++autoID,
         status: false
      }
      addTodos(todo);
      reset();
   };
   return <form className="w-full" onSubmit={handleSubmit(createTodo)} autoComplete="off">
      <div className="">
         <input
            type="text"
            defaultValue=""
            {...register("todo", { required: true, maxLength: 50 })}
            className="border bg-slate-100 w-full border-1 border-white rounded-md h-[38px]  px-4 focus:outline-none shadow-md"
         />
         {errors.todo && <div className="text-red-600 text-sm p-1">Todo is required.</div>}
      </div>
      <div className="my-4 text-right">
         <button type="submit" className="h-[38px] bg-gray-900 text-white px-16 rounded-md shadow-md">
            Add
         </button>
      </div>
   </form>
}

export default TodoForm;