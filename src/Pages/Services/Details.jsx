import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import DetailsLeft from './DetailsLeft';
import DetailsRight from './DetailsRight';
import "@smastrom/react-rating/style.css";

const Details = () => {
    const {id} = useParams();

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
          .get(`http://localhost:9000/services/${id}`)
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);

      const [reviewData, setReviewData] = useState([]);
      const [loading2, setLoading2] = useState(true);

      useEffect(() => {
        axios
          .get(`http://localhost:9000/reviews/${id}`)
          .then((res) => {
            setReviewData(res.data);
            setLoading2(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id, reviewData.length]);

      if (loading || loading2) {
        return (
          <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        );
      }

    return (
      <div className="px-4 py-16 mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-2xl flex flex-col gap-4 lg:flex-row ">
        {/* left sidebar for details */}
        <div className='mx-auto'>
          <div className="sticky top-32">
            <DetailsLeft data={data} reviewData={reviewData}></DetailsLeft>
          </div>
        </div>

        {/* right reviews */}
        <div className="">
          <DetailsRight data={data} reviewData={reviewData} setReviewData={setReviewData}></DetailsRight>
        </div>
      </div>
    );
};

export default Details;