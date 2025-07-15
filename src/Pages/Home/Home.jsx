import React, { useEffect, useState } from 'react';
import Hero from './Hero';

const Home = () => {
    const [slideData, setSlideData] = useState([]);
    const [loading1, setLoading1] = useState(true);

    useEffect(() => {
        fetch('/hero.json')
            .then(res => res.json())
            .then(data => {
                setSlideData(data);
                setLoading1(false);
            })
    }, [])
    return (
        <div>
            <Hero slideData={slideData} loading1={loading1}></Hero>
        </div>
    );
};

export default Home;