import { createBrowserRouter, RouterProvider } from  "react-router-dom"
import ArticleTemplate from './Views/ArticleTemplate';
import Home from './Views/Home';

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path:'/Articoli', element: <ArticleTemplate />}
])


function App() {
  return <RouterProvider router={router}/>
}

export default App;
