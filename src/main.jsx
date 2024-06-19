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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllParcel from "./Pages/Dashboard/AllParcel/AllParcel";
import AllDeliveryMen from "./Pages/Dashboard/AllDeliveryMen/AllDeliveryMen";
import MyDeliveryList from "./Pages/Dashboard/MyDeliveryList/MyDeliveryList";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
const queryClient = new QueryClient()
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
        path: "myProfile",//:email
        element: <MyProfile></MyProfile>,
        // loader: ({params})=> fetch(`http://localhost:5000/users/${params.email}`)
      },
      {
        path: "myParcel",
        element: <MyParcels></MyParcels>,
        
      },
      {
        path: "bookParcel",
        element: <BookParcel></BookParcel>
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "allParcel",
        element: <AllParcel></AllParcel>
      },
      {
        path: "AllDeliveryMen",
        element: <AllDeliveryMen></AllDeliveryMen>
      },
      {
        path: "MyDeliveryList",
        element: <MyDeliveryList></MyDeliveryList>
      },
      {
        path: "MyDeliveryList",
        element: <MyReviews></MyReviews>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
