import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

const Login = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <Form style={{width: "50%", margin: "0 auto"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary"  type="submit">
                Login
            </Button>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            <br></br>
            <Button className='my-2' onClick={handleGoogleSignIn} style={{marginLeft: "100px"}} variant="outline-info"><FcGoogle></FcGoogle> CONTINUE WITH GOOGLE</Button>
            <Button onClick={handleGoogleSignIn} style={{marginLeft: "100px"}} variant="outline-info"><FaGithub></FaGithub> CONTINUE WITH GITHUB</Button>
        </Form>
    );
};

export default Login;