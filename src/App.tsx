import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './Router';

const appRouter = createBrowserRouter(routes);

function App() {
   return <RouterProvider router={appRouter} />
}

export default App;
