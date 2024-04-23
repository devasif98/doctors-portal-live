import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/Main/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivarteRoutes from "./PrivarteRoutes";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/appointment',
                element: <Appointment></Appointment>
            },
        ]
    },
    {
        path:'/dashboard',
        element: <PrivarteRoutes><DashboardLayout></DashboardLayout></PrivarteRoutes>,
        children:[
            {
                path:'/dashboard',
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
])

export default router;