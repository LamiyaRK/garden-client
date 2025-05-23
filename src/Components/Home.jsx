import React from 'react';
import Banner from './Banner';
import Active from './Active';
import TrendingTips from './TrendingTips';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Active></Active>
            <TrendingTips></TrendingTips>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;