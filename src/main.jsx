import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
// import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {

        path: "login",
        element: <Login></Login>
      },
      {
        path:'register',
        element: <Registration></Registration>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirebaseProvider> */}
    <RouterProvider router={router} />
    {/* </FirebaseProvider> */}
  </React.StrictMode>,
)
