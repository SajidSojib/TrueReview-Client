import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Partners from './Partners';
import Faq from './Faq';
import Contact from './Contact';

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

    const [partnerData, setPartnerData] = useState([]);
    const [loading2, setLoading2] = useState(true);

    useEffect(() => {
        fetch('/partner.json')
            .then(res => res.json())
            .then(data => {
                setPartnerData(data);
                setLoading2(false);
            })
    }, [])

    const [faqData, setFaqData] = useState([]);
    const [loading3, setLoading3] = useState(true);

    useEffect(() => {
        fetch('/faq.json')
            .then(res => res.json())
            .then(data => {
                setFaqData(data);
                setLoading3(false);
            })
    }, [])

    if (loading1 || loading2 || loading3) {
      return (
        
          <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
            <span className="loading loading-dots loading-xl"></span>
          </div>
      );
    }
    return (
      <div>
        <Hero slideData={slideData}></Hero>
        <Partners partnerData={partnerData}></Partners>
        <Faq questions={faqData}></Faq>
        <Contact></Contact>
      </div>
    );
};

export default Home;