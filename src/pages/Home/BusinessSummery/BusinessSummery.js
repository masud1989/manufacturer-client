import React from 'react';
import { Card } from 'react-bootstrap';

import client from '../../../images/business-summery/client.png';
import services from '../../../images/business-summery/services.png';
import tools from '../../../images/business-summery/tools.png';
import users from '../../../images/business-summery/users.png';
import money from '../../../images/business-summery/money.png';

const BusinessSummery = () => {
    return (
       <div>
           <h3 className='container bg-success p-2 text-center text-white'>Our Business Summery</h3>
            <div className='container mx-auto row  d-flex justify-content-around align-items-center my-2'>
           <div className='bg-light col-sm-3 col-md-2 col-lg-2'>
                <div>
                    <img style={{height:"80px"}} src={client} alt='' />
                    <h5>We Serve</h5>
                    <h6 className='text-success'>100+ Clients</h6>
                </div>
            </div>

            <div className='bg-success col-sm-3 col-md-2 col-lg-2'>
                <div>
                    <img style={{height:"80px"}} src={money} alt='' />
                    <h5 > Annual revenue</h5>
                    <h6 className='text-white'>120M+ </h6>
                </div>
            </div>

            <div className='bg-secondary col-sm-3 col-md-2 col-lg-2'>
                <div>
                    <img style={{height:"80px"}} src={users} alt='' />
                    <h5 className='text-white'>Support Team</h5>
                    <h6 className='text-info'>20+ </h6>
                </div>
            </div>
            
            <div className='bg-info col-sm-3 col-md-2 col-lg-2'>
                <div>
                    <img style={{height:"80px"}} src={tools} alt='' />
                    <h5 className='text-secondary'>We have</h5>
                    <h6 className='text-light'>50+ Tools</h6>
                </div>
            </div>

            <div className='bg-danger col-sm-3 col-md-2 col-lg-2'>
                <div>
                    <img style={{height:"80px"}} src={services} alt='' />
                    <h5 className='text-white'>Support </h5>
                    <h6 className='text-warning'>24/7 </h6>
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default BusinessSummery;