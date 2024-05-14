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
import MyVolunteerRequest from "../Pages/MyVolunteerRequest";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/need-volunteer",
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: "/add-volunteer",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <VolunteerNeedDetails></VolunteerNeedDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`),
      },
      {
        path: "/my-post",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteer></UpdateVolunteer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`),
      },
      {
        path: "/be-volunteer/:id",
        element: <BeAVolunteerPage></BeAVolunteerPage>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`),
      },
      {
        path: "/my-volunteerRequest",
        element: <MyVolunteerRequest></MyVolunteerRequest>,
      },
    ],
  },
]);

export default router;
