import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Course from "../../Pages/Course/Course/Course"
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails"
import Courses from "../../Pages/Courses/Courses/Courses"

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
            // {
            //     path: '/',
            //     element: <Courses></Courses>,
            //     loader: () => fetch('http://localhost:5000/courses-categories')
            // }
            {
                path: '/courses-categories/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/courses-categories/${params.id}`)
            }
        ]
    }

])