import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Components/Home/Home";
import Jobs from "./Components/Jobs/Jobs";
import Blogs from "./Components/Blogs/Blogs";
import ErrorElement from "./Components/ErrorElement/ErrorElement";
import ViewDetails from "./Components/ViewDetails/ViewDetails";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import Login from "./Components/Login/Login";
import AuthProvider from "./Components/Login/AuthProvider";
import SignUp from "./Components/Login/signup/SignUp";
import Order from "./Components/Order/Order";
import PrivateRoute from "./PrivateRout/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/appliedjob",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch(`../jobs.json`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
