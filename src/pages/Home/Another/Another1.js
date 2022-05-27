import React from 'react';
import review1 from '../../../images/reviewer/review1.jpg';
import review2 from '../../../images/reviewer/review2.jpg';
import review3 from '../../../images/reviewer/review3.jpg';

const Another1 = () => {
    return (
        <div className='container'>
            <h3 className='bg-success text-white p-1 text-center text-white'>Our Clients</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
    <div className="card h-100">
      <img style={{height:'90px', width:'90px', marginLeft:'100px'}} src={review1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mr. Anik</h5>
        <p className="card-text">Their Products are very much Quality full and Productive.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">From 33 months ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img style={{height:'90px', width:'90px', marginLeft:'100px'}}  src={review2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Md. Rana</h5>
        <p className="card-text">Yes, We are very much Proud for the Products are very much Quality full and Productive.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">From 18 months ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img style={{height:'90px', width:'90px', marginLeft:'100px'}}  src={review3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Hasan Murad</h5>
        <p className="card-text">This is a wider supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">From 13 months ago</small>
      </div>
    </div>
  </div>
</div>
</div>     
    );
};

export default Another1;