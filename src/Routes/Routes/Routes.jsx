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

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/course/:id',
                element: <Course></Course>,
            },
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses-categories')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses-categories')
            },
            {
                path: '/courses-categories/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses-categories/${params.id}`)
            },
            {
                path: '/cheakout/:id',
                element: <CheakoutPage></CheakoutPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses-categories/${params.id}`)
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