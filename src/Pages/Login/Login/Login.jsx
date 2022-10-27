import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const {providerLogin, signIn, githubProviderLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from, {replace: true});
        })
        .catch( error => {
            console.error(error);
            setError(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleGithubLogin = () => {
        githubProviderLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <Form onSubmit={handleSubmit} style={{width: "50%", margin: "0 auto"}}>
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
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <br></br>
            <Button className='my-2' onClick={handleGoogleSignIn} style={{marginLeft: "100px"}} variant="outline-info"><FcGoogle></FcGoogle> CONTINUE WITH GOOGLE</Button>
            <Button onClick={handleGithubLogin} style={{marginLeft: "100px"}} variant="outline-info"><FaGithub></FaGithub> CONTINUE WITH GITHUB</Button>
        </Form>
    );
};

export default Login;