import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CheakoutPage = () => {
    const courses = useLoaderData();
    const { name, price } = courses;
    return (
        <Card style={{ width: '18rem' }}>
            <div className='text-center'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
};

export default CheakoutPage;