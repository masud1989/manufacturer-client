import React from 'react';
import featured1 from '../../../images/slider/1.jpg';
import featured2 from '../../../images/slider/2.jpg';
import featured3 from '../../../images/slider/3.jpg';

const Another2 = () => {
    return (
        <div className='container mt-5 mb-5'>
        <h3 className='bg-success text-white p-1 text-center text-white'>Our Featured Tools</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
<div class="card h-100">
  <img style={{height:'200px', width:'250px', marginLeft:'100px'}} src={featured1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mixed Tools</h5>
    <p class="card-text">Their Products are very much Quality full and Productive.</p>
  </div>
  
</div>
</div>
<div class="col">
<div class="card h-100">
<img style={{height:'200px', width:'250px', marginLeft:'100px'}} src={featured2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Hammer</h5>
    <p class="card-text">Yes, We are very much Proud for the Products are very much Quality full and Productive.</p>
  </div>
  
</div>
</div>
<div class="col">
<div class="card h-100">
  <img style={{height:'90px', width:'90px', marginLeft:'100px'}}  src={featured3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Plinder</h5>
    <p class="card-text">TTheir Products are very much Quality full and Productive. Yes, We are very much Proud for the Products are very much Quality full and Productive. </p>
  </div>
  
</div>
</div>
</div>
</div>
    );
};

export default Another2;