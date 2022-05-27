import React from 'react';
import review1 from '../../../images/reviewer/review1.jpg';
import review2 from '../../../images/reviewer/review2.jpg';
import review3 from '../../../images/reviewer/review3.jpg';

const Another1 = () => {
    return (
        <div className='container'>
            <h3 className='bg-success text-white p-1 text-center text-white'>Our Clients</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
    <div class="card h-100">
      <img style={{height:'90px', width:'90px', marginLeft:'100px'}} src={review1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Mr. Anik</h5>
        <p class="card-text">Their Products are very much Quality full and Productive.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">From 33 months ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img style={{height:'90px', width:'90px', marginLeft:'100px'}}  src={review2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Md. Rana</h5>
        <p class="card-text">Yes, We are very much Proud for the Products are very much Quality full and Productive.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">From 18 months ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img style={{height:'90px', width:'90px', marginLeft:'100px'}}  src={review3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Hasan Murad</h5>
        <p class="card-text">This is a wider supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">From 13 months ago</small>
      </div>
    </div>
  </div>
</div>
</div>     
    );
};

export default Another1;