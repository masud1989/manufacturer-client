import React from 'react';
import myPhoto from '../../images/myPhoto.jpg';
const Portfolio = () => {
    return (
        <div className="container">
	<div className="row">
		<div className="col-lg-6 col-sm-12">

            <div className="card hovercard">
                <div className="cardheader">

                </div>
                <div className="avatar">
                    <img src={myPhoto} alt=""/>
                </div>
                <div className="info">
                    <div className="title">
                        <a target="_blank" href="#">I am Md. Masud Rana</a>
                    </div>
                    <div className="title">
                        B.Sc in CSE 
                    </div>
                    <div className="desc">Professional IT Trainer</div>
                    <div className="desc">Website Designer</div>
                    <div className="desc">Website Developer</div>
                    <div className="desc">I am Expert in PHP, My SQL, Laravel and MERN</div>
                </div>
                <div className="bottom">
                <a className="btn btn-info btn-sm mx-2" rel="publisher" href='https://inventory-project-2f568.web.app/'>
                       Project Link-1
                    </a>
                    <a className="btn btn-primary btn-sm mx-2" rel="publisher" href='https://genius-car-servicing-18ad5.web.app/'>
                    Project Link-2
                    </a>
                    <a className="btn btn-success btn-sm mx-2" rel="publisher" href='https://indivusual-it-trainer.web.app/'>
                    Project Link-3
                    </a>
                    
                </div>
            </div>

        </div>

	</div>
</div>
    );
};

export default Portfolio;