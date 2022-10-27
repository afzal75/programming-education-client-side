import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from 'react-to-pdf';

const CourseDetails = () => {
    const courses = useLoaderData();
    const { name, image, description, price, _id } = courses;
    const ref = React.createRef();
    return (
        <>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <Button variant='primary' style={{marginTop: "10px", border: "none"}} onClick={toPdf}>Download Pdf</Button>}
            </Pdf>
            <Card style={{ width: '20rem', marginTop: "20px" }}>
            <div ref={ref}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className='text-center'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <p>Price: {price}</p>
                        <Link to={`/cheakout/${_id}`}>
                            <Button variant="primary">Premium Access</Button>
                        </Link>
                    </div>
                </Card.Body>
                </div>
            </Card>
            {/* </div> */}
        </>
    );
};

export default CourseDetails;