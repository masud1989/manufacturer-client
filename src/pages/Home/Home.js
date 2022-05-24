import React from 'react';
import Footer from '../../component/shared/Footer';
import Slider from '../../component/Slider/Slider';
import Another1 from './Another/Another1';
import Another2 from './Another/Another2';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Another1></Another1>
            <Another2></Another2>
            <Footer></Footer>
        </div>
    );
};

export default Home;