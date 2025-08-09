import React from 'react';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "framer-motion";

const Feature = ({services}) => {
    return (
      // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6 rounded-2xl">
      <div className="px-4 mb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-2xl">
        <h2 className="text-3xl text-center font-bold text-base-300">
          Featured Services
        </h2>
        <p className="text-center text-base-200 mt-3 mb-10 w-3/4 mx-auto">
          Explore a curated selection of high-quality services that are popular,
          top-rated, and trusted by our users—designed to help you find the
          right solution faster and with confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services?.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: (index + 1) * 0.125,
                delay: (index + 1) * 0.1,
                ease: easeInOut,
              }}
            >
              <div className="card border-2 min-h-[415px] md:min-h-auto xl:min-h-[400px] flex flex-col lg:flex-row xl:flex-col border-accent bg-info shadow-sm hover:shadow-lg shadow-accent">
                <figure>
                  <img
                    className="w-full lg:w-96 xl:w-full lg:rounded-bl-md xl:rounded-bl-none object-cover h-48 lg:h-52 xl:h-48"
                    src={service.photo}
                    alt="Service"
                  />
                </figure>
                <div className="card-body lg:h-52 xl:h-auto xl:pb-6 w-full h-full relative flex flex-col justify-between">
                  <p className="badge badge-soft badge-md badge-primary text-[#684ecf] bg-[#e2dff3] absolute -top-3 right-5">
                    {service.category}
                  </p>
                    <h2 className={`card-title text-base text-base-300 line-clamp-1`}>
                      {service.title}
                    </h2>
                    <p className="text-base-200 text-md h-fit">
                      {service.description}
                    </p>
                  <div className="card-actions justify-end">
                    <Link to={`/services/${service._id}`}>
                      <button className="btn btn-primary  text-error">
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
};

export default Feature;