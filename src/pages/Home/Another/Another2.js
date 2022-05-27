import React from 'react';
import featured1 from '../../../images/slider/1.jpg';
import featured2 from '../../../images/slider/2.jpg';
import featured3 from '../../../images/slider/3.jpg';

const Another2 = () => {
    return (
        <div className='container mt-5 mb-5'>
        <h3 className='bg-success text-white p-1 text-center text-white'>Our Featured Tools</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
<div className="card h-100">
  <img style={{height:'200px', width:'250px', marginLeft:'100px'}} src={featured1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mixed Tools</h5>
    <p className="card-text">Their Products are very much Quality full and Productive.</p>
  </div>
  
</div>
</div>
<div className="col">
<div className="card h-100">
<img style={{height:'200px', width:'250px', marginLeft:'100px'}} src={featured2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hammer</h5>
    <p className="card-text">Yes, We are very much Proud for the Products are very much Quality full and Productive.</p>
  </div>
  
</div>
</div>
<div className="col">
<div className="card h-100">
  <img style={{height:'90px', width:'90px', marginLeft:'100px'}}  src={featured3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Plinder</h5>
    <p className="card-text">TTheir Products are very much Quality full and Productive. Yes, We are very much Proud for the Products are very much Quality full and Productive. </p>
  </div>
  
</div>
</div>
</div>
</div>
    );
};

export default Another2;