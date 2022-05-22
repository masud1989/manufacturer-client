import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/1.jpg';
import slider2 from '../../images/slider/2.jpg';
import slider3 from '../../images/slider/3.jpg';
import slider4 from '../../images/slider/4.jpg';
import slider5 from '../../images/slider/5.jpg';


const Slider = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 mb-5"
                    style={{height:'400px'}}
                    src={slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className='text-white' className='text-white'>Very Very Speedy</h3>
                    <p>This byke is very speedy. If you want to shunt you can choose it</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:'400px'}}
                    className="d-block w-100 mb-5"
                    src={slider2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className='text-white' className='text-white'>Very Very Speedy</h3>
                    <p>This byke is very speedy. If you want to shunt you can choose it</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:'400px'}}
                    className="d-block w-100 mb-5"
                    src={slider3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className='text-white' className='text-white'>Very Very Speedy</h3>
                    <p>This byke is very speedy. If you want to shunt you can choose it</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:'400px'}}
                    className="d-block w-100 mb-5"
                    src={slider4}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className='text-white' className='text-white'>Very Very Speedy</h3>
                    <p>This byke is very speedy. If you want to shunt you can choose it</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:'400px'}}
                    className="d-block w-100 mb-5"
                    src={slider5}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className='text-white' className='text-white'>Very Very Speedy</h3>
                    <p>This byke is very speedy. If you want to shunt you can choose it</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;