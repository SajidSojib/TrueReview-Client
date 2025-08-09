import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import Faq from "./Faq";
import Contact from "./Contact";
import Feature from "./Feature";
import axios from "axios";
import { toast } from "react-toastify";
import Stats from "./Stats";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Home = () => {
  const [slideData, setSlideData] = useState([]);
  const [loading1, setLoading1] = useState(true);

  useEffect(() => {
    fetch("/hero.json")
      .then((res) => res.json())
      .then((data) => {
        setSlideData(data);
        setLoading1(false);
      });
  }, []);

  const [partnerData, setPartnerData] = useState([]);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    fetch("/partner.json")
      .then((res) => res.json())
      .then((data) => {
        setPartnerData(data);
        setLoading2(false);
      });
  }, []);

  const [faqData, setFaqData] = useState([]);
  const [loading3, setLoading3] = useState(true);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => {
        setFaqData(data);
        setLoading3(false);
      });
  }, []);

  const [services, setServices] = useState([]);
  const [loading4, setLoading4] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic('/limitedServices')
      .then((res) => {
        setServices(res.data);
        setLoading4(false);
      })
      .catch((err) => {
        toast.error(err);
      })
    
  }, []);

  const [count, setCount] = useState(0);
  const [loading5, setLoading5] = useState(true);
  useEffect(() => {
    axios
      .get("https://true-review-server.vercel.app/count")
      .then((res) => {
        setCount(res.data);
        setLoading5(false);
      })
      .catch((err) => {
        toast.error(err); 
      });
  }, []);

  if (loading1 || loading2 || loading3 || loading4 || loading5) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>Home | TrueReview</title>
      </Helmet>
      <Hero slideData={slideData}></Hero>
      <Feature services={services}></Feature>
      <Partners partnerData={partnerData}></Partners>
      <Stats count={count}></Stats>
      <Faq questions={faqData}></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;
