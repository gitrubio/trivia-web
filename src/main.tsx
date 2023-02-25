import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import Trivia from './components/Trivia';
import Home from './components/Home';
import QuestionProvider from './context/QuestionProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/trivia",
    element: <Trivia />
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuestionProvider>
       <RouterProvider router={router} />
    </QuestionProvider>
  </React.StrictMode>,
)
