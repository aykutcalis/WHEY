import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage, { usersLoader } from "./pages/UsersPage";
import RootLayout from "./pages/root";
import UserDetailPage, { userDetailLoader } from "./pages/UserDetailPage";

export const route =createBrowserRouter(
 [
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        {
            index:true,
            element: <HomePage/>
        
     },
     {
        path: "/users",
        element :<UsersPage/>,
        loader: usersLoader
     },
     {
        path: "/users/:userId",
        element :<UserDetailPage/>,
        loader: userDetailLoader
     },
    ]
  }
]
)