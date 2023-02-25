import { createBrowserRouter } from "react-router-dom";
import Trivia from "../components/Trivia";
import Home from "../components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/trivia",
    element: <Trivia />,
  },
]);

export default router;
