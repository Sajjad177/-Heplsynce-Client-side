import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NeedVolunteer from "../Pages/NeedVolunteer";
import AddVolunteer from "../Pages/AddVolunteer";
import VolunteerNeedDetails from "../Pages/VolunteerNeedDetails";
import MyPost from "../Pages/MyPost";
import UpdateVolunteer from "../Pages/UpdateVolunteer";
import BeAVolunteerPage from "../Pages/BeAVolunteerPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/need-volunteer',
          element:<NeedVolunteer></NeedVolunteer>,
        },
        {
          path:'/add-volunteer',
          element:<AddVolunteer></AddVolunteer>,
        },
        {
          path: '/details/:id',
          element:<VolunteerNeedDetails></VolunteerNeedDetails>,
          loader :({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
        },
        {
          path:'/my-post', 
          element:<MyPost></MyPost>
        },
        {
          path:'/update/:id',
          element:<UpdateVolunteer></UpdateVolunteer>,
          loader :({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
        },
        {
          path:'/be-volunteer/:id',
          element:<BeAVolunteerPage></BeAVolunteerPage>,
          loader :({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
        },
        
      ]
    },
  ]);

export default router