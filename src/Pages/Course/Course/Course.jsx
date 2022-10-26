import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = ({ course }) => {
    const { name, image, price } = course;
    return (
        <div>
            <Card className='mb-4 me-4' style={{ width: '300px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className='text-center'>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price: {price}
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;