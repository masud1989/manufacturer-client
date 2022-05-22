import React from 'react';
import Footer from '../../component/shared/Footer';
import Header from '../../component/shared/Header';
import Slider from '../../component/Slider/Slider';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;