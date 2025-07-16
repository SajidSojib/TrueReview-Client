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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex items-center justify-center mt-20">
            <span className="loading loading-dots loading-xl"></span>
          </div>
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