import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/Main/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import Appointment from "../Pages/Appointment/Appointment";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivarteRoutes from "./PrivarteRoutes";
import About from "../Pages/About/About";
import ContactUs from "../Pages/Contact/Contactus";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddDoctors from "../Pages/Dashboard/AddDoctors/AddDoctors";
import AllDoctors from "../Pages/Dashboard/AllDoctors/AllDoctors";

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
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <ContactUs/>
            },
        ]
    },
    {
        path:'/dashboard',
        element: <PrivarteRoutes><DashboardLayout></DashboardLayout></PrivarteRoutes>,
        children:[
            {
                path:'/dashboard',
                element: <Dashboard/>
            },
            {
                path:'/dashboard/appointment',
                element: <MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allUsers',
                element: <AllUsers/>
            },
            {
                path:'/dashboard/addDoctors',
                element: <AddDoctors/>
            },
            {
                path:'/dashboard/allDoctors',
                element: <AllDoctors/>
            }
        ]
    }
])

export default router;