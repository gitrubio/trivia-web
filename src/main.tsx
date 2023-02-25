import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import QuestionProvider from './context/QuestionProvider';
import router from './routes/router'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuestionProvider>
       <RouterProvider router={router} />
    </QuestionProvider>
  </React.StrictMode>,
)
