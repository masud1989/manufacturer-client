import React from 'react';
import Footer from '../../component/shared/Footer';
import Header from '../../component/shared/Header';
import Slider from '../../component/Slider/Slider';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;