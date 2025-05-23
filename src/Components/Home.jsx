import React from 'react';
import Banner from './Banner';
import Active from './Active';
import TrendingTips from './TrendingTips';
import FAQ from './FAQ';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Active></Active>
            <TrendingTips></TrendingTips>
            <FAQ></FAQ>
            <Review></Review>
        </div>
    );
};

export default Home;