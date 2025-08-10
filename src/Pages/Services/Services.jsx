import React, { useEffect, useState } from "react";
import Service from "./Service";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterParam, setFilterParam] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get(
        `/services?search=${search}&filterParam=${filterParam}&sortPrice=${sortPrice}`
      )
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search, filterParam, sortPrice, axiosPublic]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="px-4 pt-16 mt-12 mb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <Helmet>
        <title>Services | TrueReview</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center text-base-300">
        Explore All Services
      </h1>
      <p className="text-center text-base-200 mt-3 mb-10 w-3/4 mx-auto">
        Browse a variety of trusted services across categories — from tech and
        design to home care and consulting.
      </p>

      <div className="flex justify-between gap-12 mb-8">
        <label className="input w-full flex-2 input-primary border-none bg-info shadow-sm shadow-primary placeholder:text-base-200">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search by Title, Price, Category, Company Name"
          />
        </label>

        <select
          onChange={(e) => setSortPrice(e.target.value)}
          defaultValue=""
          className="select flex-1 w-full select-primary border-none bg-info shadow-sm shadow-primary placeholder:text-base-200"
        >
          <option disabled={true}>
            Sort by Price
          </option>
          <option value="">Default</option>
          <option value="asc">Price {"(Low>High)"}</option>
          <option value="desc">Price {"(High>Low)"}</option>
        </select>

        {/*  */}
        <select
          onChange={(e) => setFilterParam(e.target.value)}
          name="category"
          defaultValue="Filter by Category"
          className="select flex-1 w-full select-primary border-none bg-info shadow-sm shadow-primary placeholder:text-base-200"
        >
          <option disabled={true}>Filter by Category</option>
          <option value="">View All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Design">Design</option>
          <option value="Education">Education</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Legal Services">Legal Services</option>
          <option value="Writing">Writing</option>
          <option value="Home Services">Home Services</option>
          <option value="Events & Entertainment">Events & Entertainment</option>
          <option value="Travel & Hospitality">Travel & Hospitality</option>
          <option value="Business Consulting">Business Consulting</option>
          <option value="Freelance">Freelance</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* <hr className="border-2 my-5 border-primary"/> */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services?.map((service, index) => (
          <Service key={service._id} service={service} index={index}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
