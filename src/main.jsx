import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AuthProvider from "./Providers/AuthProvider";
import Dashboard from "./Layout/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import MyParcels from "./Pages/Dashboard/MyParcels/MyParcels";
import BookParcel from "./Pages/Dashboard/BookParcel/BookParcel";
import Private from "./Layout/Private";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
    ],
    
  },
  {
    path: 'dashboard',
    element: <Private><Dashboard></Dashboard></Private> ,
    children:
    [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "myParcel",
        element: <MyParcels></MyParcels>
      },
      {
        path: "bookParcel",
        element: <BookParcel></BookParcel>
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
