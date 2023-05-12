import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import AddUser from './Components/AddUser.jsx';
import UpdateUser from './Components/UpdateUser.jsx';
import AllUser from './Components/AllUser.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllUser/>,
        loader:()=>fetch('http://localhost:5000/users')
      },
      {
        path: "addUser",
        element: <AddUser />,
      },
      {
        path: "updateUser/:id",
        element: <UpdateUser/>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
