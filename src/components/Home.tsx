import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div className="flex h-full items-center justify-center">
         <div>
            <div className="text-[20px] font-normal text-black py-2">
               Simple
               <Link className="transition text-gray-200 hover:text-gray-500" to="/todo-app"> Todo App</Link>
            </div>
            <div className="text-[20px] font-normal text-black py-2">
               React
               <Link className="transition text-gray-200 hover:text-gray-500" to="/life-cycle"> Life Cycle</Link>
            </div>
         </div>
      </div>
   )
}

export default Home;