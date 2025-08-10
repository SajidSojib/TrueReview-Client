import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Subscription = () => {
    const [premiumData, setPremiumData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      fetch("/subscription.json")
        .then((res) => res.json())
        .then((data) => {
          setPremiumData(data);
          setLoading(false);
        });
    }, []);

    if(loading){
        <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
          <span className="loading loading-dots loading-xl"></span>
        </div>;
    }

    console.log(premiumData);
    return (
      <div className="relative w-full h-full">
        <Helmet>
          <title>Subscription | TrueReview</title>
        </Helmet>
        <div className="absolute hidden w-full bg-info  lg:block h-96" />
        <div className="relative px-4 pt-16 mb-24 mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
          <div
            data-aos="zoom-in"
            className="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          >
            <h2 className="max-w-lg mb-6 font-sans font-bold leading-none tracking-tight text-base-300 text-3xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-base-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative ">Unlock</span>
              </span>{" "}
              Premium Access
            </h2>
            <p className="text-base text-base-200">
              Join Eventure Premium to enjoy exclusive features, early access,
              VIP perks, and the ultimate event discovery experience tailored
              just for you.
            </p>
          </div>
          <div className="grid max-w-screen-2xl gap-10 md:grid-cols-2 xl:grid-cols-3 sm:mx-auto">
            {premiumData?.map((data) => (
              <div data-aos="fade-up" key={data.id}>
                <div className="p-5 bg-primary  rounded-xl">
                  <div className="bg-info rounded-lg p-4">
                    <div className="mb-4 text-center">
                      <div className="flex border-b-2 border-dashed border-b-primary items-center justify-between mb-5">
                        <p className="mb-2 text-3xl font-semibold text-primary">
                          {data.highlight}
                        </p>
                        <p className="text-xl font-medium tracking-wide text-primary">
                          {data.name}
                        </p>
                      </div>
                      <div className="flex my-9 items-center justify-center">
                        <p className="mr-2 text-5xl font-semibold text-primary lg:text-6xl">
                          ${data.price}
                        </p>
                        <p className="text-lg text-gray-500">/ month</p>
                      </div>
                    </div>
                    <ul className="mb-8 space-y-3">
                      {data.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <p className="font-medium text-base-300">
                            <IoCheckmarkDoneCircle
                              color="#6e56cf"
                              size={20}
                              className="inline"
                            />{" "}
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-center">
                      <button
                        onClick={() => toast.success(data.buttonMessage)}
                        className="btn btn-primary text-error btn-wide"
                      >
                        {data.buttonLabel}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 h-2 mx-auto bg-primary rounded-b opacity-55" />
                <div className="w-10/12 h-2 mx-auto bg-primary rounded-b opacity-30" />
                <div className="w-9/12 h-2 mx-auto bg-primary rounded-b opacity-15" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Subscription;