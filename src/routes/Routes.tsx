import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../components/LandingPage";
import Sign from "../components/Sign";
import UserPage from "../components/userPage";
import Resume from "../components/Resume";
import Letter from "../components/Letter";
import Interview from "../components/interview";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <LandingPage /> },
        { path: "login", element: <Sign /> },
        { path: "user", element: <UserPage /> },
        { path: "resume", element: <Resume /> },
        { path: "letter", element: <Letter /> },
        { path: "interview", element: <Interview /> },
      ],
    },
  ]);