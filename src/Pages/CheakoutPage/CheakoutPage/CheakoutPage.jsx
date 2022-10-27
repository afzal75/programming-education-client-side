import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CheakoutPage = () => {
    const courses = useLoaderData();
    const { name, price } = courses;
    return (
        <div>
            <Card style={{ width: '18rem', marginTop: "20px" }}>
                <div className='text-center'>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price: {price}
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default CheakoutPage;