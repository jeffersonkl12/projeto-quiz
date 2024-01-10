import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css'
import Template from "./routes/template/Template";
import Home from "./routes/home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Template/>,
    children: [
      {
        path: '',
        element: <Home/>
      }
    ]
  }
]);


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
