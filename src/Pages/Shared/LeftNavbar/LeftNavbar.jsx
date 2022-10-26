import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className='my-4'>
            {
                courses.map(course => <p key={course._id}>
                    <Link style={{textDecoration: "none", color: "black", fontSize: "20px"}} to={`/courses-categories/${course._id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNavbar;