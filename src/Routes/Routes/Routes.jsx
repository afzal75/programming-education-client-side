import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Blog from "../../Pages/Blog/Blog/Blog"
import CheakoutPage from "../../Pages/CheakoutPage/CheakoutPage/CheakoutPage"
import Course from "../../Pages/Course/Course/Course"
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails"
import Courses from "../../Pages/Courses/Courses/Courses"
import FAQ from "../../Pages/FAQ/FAQ/FAQ"
import Login from "../../Pages/Login/Login/Login"
import Register from "../../Pages/Login/Register/Register"
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/course/:id',
                element: <Course></Course>,
            },
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-neon.vercel.app/courses-categories')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-neon.vercel.app/courses-categories')
            },
            {
                path: '/courses-categories/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://assignment-10-server-neon.vercel.app/courses-categories/${params.id}`)
            },
            {
                path: '/cheakout/:id',
                element: <PrivateRoute><CheakoutPage></CheakoutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-neon.vercel.app/courses-categories/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }

])