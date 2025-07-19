import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home";
import Root from "./Layout/Root";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import AuthProvider from "./Firebase/AuthProvider";
import { ToastContainer } from "react-toastify";
import MyServices from "./Pages/MyServices/MyServices";
import MyReviews from "./Pages/MyReviews/MyReviews";
import AddService from "./Pages/AddService/AddService";
import PrivateRoute from "./Firebase/PrivateRoute";
import Details from "./Pages/Services/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/services", element: <Services></Services> },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
            <Details></Details>
        ),
      },

      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },

  {
    path: "*",
    element: (
      <div>
        <Link className="btn" to="/">
          go back
        </Link>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </AuthProvider>
  </StrictMode>
);
