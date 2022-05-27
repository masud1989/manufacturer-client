import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const addReviewData = event =>{
        
        event.preventDefault();
        const userReview = event.target.userReview.value;
        const rating = event.target.rating.value;
        const email = event.target.email.value;
        
        
        const review = { userReview, rating, email }
        // console.log({product});

        // sending data  =========================================
        fetch('https://obscure-hamlet-59270.herokuapp.com/review',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
            .then( res => res.json())          
            .then(data => {
                console.log('Success', data);
                // alert('Product Added Success')
                toast('Review Added Success')
                event.target.reset();
            })

    }


    return (
        <div className='container mt-5 w-75'>
            <div className='mx-auto mb-5 border-2 border-info'>
            <h3 className='text-info mb-3 bg-success text-white p-2'>Add Review Here</h3>
                    <form onSubmit={addReviewData} >
                        <div className='row'>

                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" id="email" value={user.email} name='email' placeholder="User Email" required/>
                                </div>
                            </div>

                            <div className='col-md-12 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <textarea type="text" className="form-control" id="name" name='userReview' placeholder="Type Your Review Here" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="rating" name='rating' placeholder="Your Rating out of 5.00" required/>
                                </div>
                            </div>
                            
                           
                        </div>
                    
                        <Button type='submit' className='btn btn-success text-white p-2'>Add Review</Button>
                        <ToastContainer></ToastContainer>
                </form>
            </div>
        </div>
        
    );
};

export default AddReview;