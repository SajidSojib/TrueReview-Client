import React from 'react';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FcCalendar } from "react-icons/fc";
import { Link } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Service = ({service, index}) => {
    return (
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: (index + 1) * 0.1, delay: (index + 1) * 0.1 }}
      >
        <div className="card border-2 border-accent bg-info shadow-sm hover:shadow-lg shadow-accent">
          <figure>
            <img
              className="w-full object-cover h-[262px]"
              src={service.photo}
              alt="Service"
            />
          </figure>
          <div className="card-body relative">
            <p className="badge badge-soft badge-lg badge-primary text-[#684ecf] bg-[#e2dff3] absolute -top-3 right-5">
              {service.category}
            </p>
            <h2 className="card-title text-base-300">{service.title}</h2>
            <p className="text-base-200">{service.description}</p>
            <p className="text-base-200 flex items-center gap-1">
              <span className="text-lg">
                <RiMoneyDollarCircleFill color="green" size={22} />
              </span>
              <span>
                <span className="font-semibold">Price:</span> {service.price}
              </span>
            </p>
            <p className="text-base-200 flex items-center gap-1">
              <span className="text-lg">
                <FcCalendar size={22} />
              </span>
              <span>
                <span className="font-semibold">Posted on:</span>{" "}
                {service.addedDate.split(" at")[0]}
              </span>
            </p>
            <div className="card-actions justify-end">
              <Link to={`/services/${service._id}`}>
                <button className="btn btn-primary text-error">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
};

export default Service;