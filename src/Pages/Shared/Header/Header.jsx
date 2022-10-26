import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/Logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <img src={Logo} style={{ width: '70px' }} alt="" />
                <Navbar.Brand><Link style={{textDecoration: "none"}} to="/">Programming Education</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={{textDecoration: "none"}} to="/courses">Courses</Link></Nav.Link>
                        <Nav.Link><Link style={{textDecoration: "none"}} to="/faq">FAQ</Link></Nav.Link>
                        <Nav.Link><Link style={{textDecoration: "none"}} to="/blog">Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        <button>Toggole</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;