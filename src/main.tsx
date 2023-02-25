import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import Trivia from './components/Trivia';
import Welcome from './components/Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>
  },
  {
    path: "/trivia",
    element: <Trivia/>
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
