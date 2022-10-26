import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Course from "../../Pages/Course/Course/Course"
import Courses from "../../Pages/Courses/Courses/Courses"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Course></Course>
            // },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/coures-categories')
            },
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/coures-categories')
            }
        ]
    }

])