import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subject-courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2>Left Navbar: {courses.length}</h2>
            {
                courses.map(category => <p key={category.id}>
                    <Link>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNavbar;