import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const [SignInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError ]= useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement; 
    const [token] = useToken(googleUser);
    if(token){
        <p>Loading........................</p>
    }

    if (error ) {
        errorElement=<p className='text-danger'>Error: {error.message || githubError.message}</p>
  }

    if(googleUser || githubUser) {
        navigate('/')
    }


    return (
        <div>
            <div className="d-flex align-items-center"> 
                <div style={{height: '1px'}} className='bg-info w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-info w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=> SignInWithGoogle() } className='btn btn-info w-50 d-block mx-auto my-2 text-white'>
                     Sign In with Google 
                </button>
                
            </div>
    
        </div>
    );
};

export default SocialLogin;