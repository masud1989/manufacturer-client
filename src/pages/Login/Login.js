import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';


const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(error){
        errorElement=<p className='text-danger'>Error: {error.message}</p>
     }

     if(user){
        navigate(from, {replace: true});
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
       
    }

    return (     
            <div className="bg-secondary rounded-2 container w-50 mx-auto mt-5 py-2">
           
        <h2 className="text-light text-center mb-3">Please Login </h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address:</Form.Label> */}
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password:</Form.Label> */}
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button  className='btn btn-primary w-50 mx-auto d-block mb-1 text-white fw-bold mt-3 py-2' variant="info" type="submit">
            Login
        </Button>
    
        </Form>
        <p>Password Forgotten? <button  className="btn btn-link text-primary text-decoration-none ">Reset Password</button></p>
        <p>New Here?.. <Link to="/register"  className="text-warning text-decoration-none">Please Register</Link></p>
        {errorElement}
       <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer>  
    </div>
     
     






























     
    );
};

export default Login;