import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../components/LandingPage";
import Sign from "../components/Sign";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <LandingPage /> },
        { path: "login", element: <Sign /> },
      ],
    },
  ]);