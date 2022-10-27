import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/Logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [toggole, setToggle] = useState(false);

    const toggoleButton = () => {
        setToggle(!toggole)
    }

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch( error => {
            console.error(error);
        })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <img src={Logo} style={{ width: '70px' }} alt="" />
                <Navbar.Brand><Link style={{ textDecoration: "none" }} to="/">Programming Education</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={{ textDecoration: "none" }} to="/courses">Courses</Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: "none" }} to="/faq">FAQ</Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: "none" }} to="/blog">Blog</Link></Nav.Link>
                        <button onClick={toggoleButton}>{toggole? "OPEN" : "CLOSE"}</button>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant='light' onClick={handleLogOut}>Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link style={{textDecoration: "none", marginRight: "8px"}} to='/login'>Login</Link>
                                        <Link style={{textDecoration: "none"}} to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image style={{ height: "30px" }} roundedCircle src={user?.photoURL}
                                title={user?.displayName}
                                >

                                </Image>
                                :
                                <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;