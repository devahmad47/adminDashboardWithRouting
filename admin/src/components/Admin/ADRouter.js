import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Table from "../Table";
import UserDetails from "../UserDetails";
import Error from "../Error";
import  { AdminLayout } from "./FullLayoutAdmin";
import WaveComponent from "../WaveComponent";
// import { AdminChatPage } from "../Pages/chatPageAdmin";
// import { AdminChats } from "../Pages/chatsAdmin";
export const ThemeRoutes = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/", element: <Navigate to="Infolist" /> },
      // { path: "AdminDashboard/starter", exact: true, element: <PrivateRouteAdmin element={<Starter />} /> },
      { path: "Infolist", exact: true, element: <Table /> },
        { path: "userdetail", exact: true, element: <UserDetails /> },
        { path: "crud", exact: true, element: <WaveComponent /> },
        { path: "*", exact: true, element: <Error /> },
     
    ],
  },
];


