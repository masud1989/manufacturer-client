import React, { useEffect, useState } from 'react';
import '../../Home/Products/Products.css';


const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect( ()=>{
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>setReviews(data))
}, [])

    return (
        <div className='container my-5'>
            <h3 className='bg-success text-white p-1 text-center text-white'>Reviews from our Users: {reviews.length}</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  {
    reviews.map(review=>
      <div class="col">
    <div class="card h-100">
       <div class="card-body">
        <h5 class="card-title">User:{review.email}</h5>
        <p class="card-text">{review.userReview}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Ratings:{review.rating}</small>
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