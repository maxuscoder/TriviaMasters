import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/home/Home";
import Start from "./pages/game/Start";
import CreateUser from "./pages/user/CreateUser";
import Game, { loader as questionsLoader } from "./pages/game/Game";
import End from "./pages/end/End";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/start",
        element: <Start />,
      },
      {
        path: "/user",
        element: <CreateUser />,
      },
      {
        path: "/end",
        element: <End />,
      },
      {
        path: "/game/:category/:difficulty",
        element: <Game />,
        loader: questionsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
