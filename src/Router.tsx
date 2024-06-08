import { RouteObject } from "react-router-dom";
import Home from "./components/Home";
import { TodoProvider } from "./contexts/TodoContext";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import LifeCycle from "./components/LifeCycle";

const Todo = lazy(() => import("./components/Todo"));

export const routes: RouteObject[] = [
   {
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "/todo-app",
            element: <Suspense fallback={<h1>Loading...</h1>}>
               <TodoProvider><Todo /></TodoProvider>
            </Suspense>
         },
         {
            path: "/life-cycle",
            element: <LifeCycle propA="" />
         }
      ]
   }

];
