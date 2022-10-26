import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const courses = useLoaderData();
    const { name, image, description, price, _id } = courses;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <div className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p>Price: {price}</p>
                    <Link to={`/cheakout/${_id}`}>
                        <Button variant="primary">Premium</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;