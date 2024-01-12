import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css'
import Template from "./routes/template/Template";
import Home from "./routes/home/Home";
import DetailQuiz from "./routes/detailQuiz/DetailQuiz";
import Quiz from "./routes/quiz/Quiz";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Template/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'detalhe-quiz',
        element: <DetailQuiz/>
      },
      {
        path: 'quiz',
        element: <Quiz/>
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
