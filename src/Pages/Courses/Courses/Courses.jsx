import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course/Course';
import './Courses.css'

const Courses = () => {
    const courseNews = useLoaderData();
    console.log(courseNews);
    return (
        <div className='my-4'>
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