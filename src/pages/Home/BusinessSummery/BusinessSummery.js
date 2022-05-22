import React from 'react';
import { Card } from 'react-bootstrap';

const BusinessSummery = () => {
    return (
       <div>
           <h3 className='container bg-info text-center text-white'>Our Business Summery</h3>
            <div className='container mx-auto row  d-flex justify-content-around align-items-center my-5'>
           <div className='col-sm-3 col-md-4 col-lg-4'>
                <Card border="primary" >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-sm-3 col-md-4 col-lg-4'>
                <Card border="secondary" >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-sm-3 col-md-4 col-lg-4'>
                <Card border="danger" >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
       </div>
    );
};

export default BusinessSummery;