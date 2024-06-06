import { GrEdit } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

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
   return (
      <div className={`shadow-md items-center flex font-regular justify-between w-[48%] m-1  p-2 text-sm ${!todo.status ? 'bg-red-700 text-white' : 'bg-slate-100 text-neutral-900'}`} >
         <div>
            {todo.todo}
         </div>
         <div className="flex justify-around w-[20%]">
            <a className="cursor-pointer h-full">
               <GrEdit />
            </a>
            {
               todo.status ?
                  <a className="cursor-pointer h-full" ><IoCheckmark /></a> :
                  <a className="cursor-pointer h-full" onClick={() => updateTodos(todo.id)}><BsExclamationCircle /></a>
            }
         </div>
      </div>
   )
}

export default SingleTodo;