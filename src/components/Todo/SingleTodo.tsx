import { GrEdit } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { useContext, useState } from "react";
import TodoContext from "../../contexts/TodoContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "./TodoForm";
import { Todo as TodoTypes } from "./SingleTodo";

export type Todo = {
   todo: string,
   id: number,
   status?: boolean
}

interface Props {
   todo: Todo,
}

const SingleTodo = ({ todo }: Props) => {
   const { updateTodos } = useContext(TodoContext);
   const [editTodo, setEditTodo] = useState<boolean>(false);
   const { register, handleSubmit } = useForm<Inputs>();
   const handleFormSubmit: SubmitHandler<Inputs> = data => {
      const updatedTodo = {
         todo: data.todo,
         status: todo.status,
         id: todo.id
      }
      updateTodos(updatedTodo);
   }

   const handleStatusChange = (todo: TodoTypes) => {
      const updatedTodo = {
         todo: todo.todo,
         status: !todo.status,
         id: todo.id
      }
      updateTodos(updatedTodo);
   }


   return (
      <div className={`shadow-md items-center flex font-regular justify-between w-[48%] m-1  p-2 text-sm ${!todo.status ? 'bg-red-700 text-white' : 'bg-slate-100 text-neutral-900'}`} >
         <div className="w-full">
            {
               editTodo ? <form onSubmit={handleSubmit(handleFormSubmit)} >
                  <input
                     type="text"
                     defaultValue={todo.todo}
                     {...register("todo", { required: true, maxLength: 50 })}
                     className="border bg-white text-black w-full border-1 border-white rounded-md h-[30px]  px-4 focus:outline-none shadow-md"
                  />
               </form> :
                  todo.todo
            }
         </div>
         {
            !editTodo &&
            <div className="flex justify-around w-[20%]">
               {
                  !todo.status ?
                     <>
                        <a className="cursor-pointer h-full" onClick={() => setEditTodo(!editTodo)}> <GrEdit /></a>
                        <a className="cursor-pointer h-full" onClick={() => handleStatusChange(todo)}><BsExclamationCircle /></a>
                     </> :
                     <a className="cursor-pointer h-full" ><IoCheckmark /></a>
               }
            </div>
         }
      </div>
   )
}

export default SingleTodo;