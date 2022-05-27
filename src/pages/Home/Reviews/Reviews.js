import React, { useEffect, useState } from 'react';
import '../../Home/Products/Products.css';


const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect( ()=>{
    fetch('https://obscure-hamlet-59270.herokuapp.com/reviews')
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>setReviews(data))
}, [])

    return (
        <div className='container my-5'>
            <h3 className='bg-success text-white p-1 text-center text-white'>Reviews from our Users: {reviews.length}</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
  {
    reviews.map(review=>
      <div className="col">
    <div className="card h-100">
       <div className="card-body">
        <h5 className="card-title">User:{review.email}</h5>
        <p className="card-text">{review.userReview}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Ratings:{review.rating}</small>
      </div>
    </div>
  </div>
      )
  }
 
</div>
        </div>
    );
};

export default Reviews;