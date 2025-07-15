import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router';
const Partners = ({partnerData}) => {
    return (
      <div className="mt-5">
        <h2 className="text-3xl text-center font-bold mb-4 text-base-300">
          Meet Our Partners
        </h2>
        <p className="mb-8 w-3/4 mx-auto text-center text-base-200">
          Our trusted collaborators helping power the TrueReview experience.
        </p>
        <div>
          <Marquee
            play={1}
            speed={60}
            pauseOnHover={false}
            loop={0}
          >
            {partnerData?.map((partner) => (
              <div className="bg-info mr-10 w-96 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 p-6 group h-full flex flex-col justify-between">
                <div>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl text-center text-base-300 font-semibold mb-2">{partner.name}</h3>
                  <p className="text-sm text-center text-base-200 mb-4">
                    {partner.description}
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className="px-3 py-1 bg-primary text-white text-xs rounded-full">
                    {partner.category}
                  </p>
                  <Link
                    to={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary hover:underline font-medium"
                  >
                    Visit Website →
                  </Link>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    );
};

export default Partners;