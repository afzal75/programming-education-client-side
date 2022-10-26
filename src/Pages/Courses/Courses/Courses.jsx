import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course/Course';
import './Courses.css'

const Courses = () => {
    const courseNews = useLoaderData();
    console.log(courseNews);
    return (
        <div>
            <h2>This is Courses: {courseNews.length}</h2>
            <div className='courses'>
                {
                    courseNews.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;