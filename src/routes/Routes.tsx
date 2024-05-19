import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../components/LandingPage";
import Sign from "../components/Sign";
import UserPage from "../components/userPage";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <LandingPage /> },
        { path: "login", element: <Sign /> },
        { path: "user", element: <UserPage /> },
      ],
    },
  ]);