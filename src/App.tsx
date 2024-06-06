
import Todo from './components/Todo'
import { TodoProvider } from './contexts/TodoContext'

function App() {
   return (
      <div className='mx-auto my-auto h-full'>
         <TodoProvider>
            <Todo />
         </TodoProvider>
      </div>
   )
}

export default App;
