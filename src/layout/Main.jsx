import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import Category from '../Pages/Category/Category/Category';
import Header from '../Pages/Shared/Header/Header';
import LeftNavbar from '../Pages/Shared/LeftNavbar/LeftNavbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftNavbar></LeftNavbar>
                    </Col>
                    <Col lg="10">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;