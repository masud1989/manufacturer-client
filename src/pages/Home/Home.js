import React from 'react';
import Footer from '../../component/shared/Footer';
import Header from '../../component/shared/Header';
import Slider from '../../component/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h1>This is Home page</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;