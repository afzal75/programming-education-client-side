import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, image, _id } = course;
    return (
        <div>
            <Card className='mb-4 me-4' style={{ width: '300px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className='text-center'>
                        <Card.Title>{name}</Card.Title>
                        <Link to={`/courses-categories/${_id}`}>
                            <Button variant="primary">Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;