import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignupPage from "./components/signup-page";
import Home from "./components/home";
import Login from "./components/login-page";
import ForgetPassword from "./components/forgett-password-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
