import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home";
import Root from "./Layout/Root";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/services", element: <Services></Services> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },

  {
    path: "*",
    element: <div><Link className="btn" to="/">go back</Link></div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
