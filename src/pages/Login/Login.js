import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from './SocialLogin';


const Login = () => {

        const notify = () => toast("Wow so easy!");

    return (     
            <div className="bg-secondary rounded-2 container w-50 mx-auto mt-5 py-2">
           
        <h2 className="text-light text-center mb-3">Please Login </h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address:</Form.Label> */}
            <Form.Control   type="email" placeholder="Enter email" required />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password:</Form.Label> */}
            <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button onClick={notify}  className='btn btn-primary w-50 mx-auto d-block mb-1 text-white fw-bold mt-3 py-2' variant="info" type="submit">
            Login
        </Button>
    
        </Form>
        <p>Password Forgotten? <button  className="btn btn-link text-primary text-decoration-none ">Reset Password</button></p>
        <p>New Here?.. <Link to="/register"  className="text-warning text-decoration-none">Please Register</Link></p>
        {/* {errorElement}
       <SocialLogin></SocialLogin>*/}
       <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer>  
    </div>
     
     






























     
    );
};

export default Login;