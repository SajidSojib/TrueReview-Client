import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import React, { useContext, useState } from "react";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import { AuthContext } from "../../Firebase/AuthProvider";
import { useNavigate } from "react-router";
const DetailsRight = ({ data, reviewData, setReviewData }) => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    if (!user) {
      return (
        toast.error("You must login first to give review")
         ,navigate("/login")
      );
    }

    if (rating == 0) {
      return toast.error("Please give a rating also");
    }

    const formData = {
      serviceId: data._id,
      serviceTitle: data.title,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      time: new Date().toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      rating,
      review,
    };
    axios.post("http://localhost:9000/reviews", formData, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    }).then((res) => {
      if (res.data.insertedId) {
        toast.success("Review added successfully");
        formData._id = res.data.insertedId;
        setReviewData([formData, ...reviewData]);
      }
    }).catch(err => {
      toast.error(err.message+': '+err.response.data.message);
    });
  };
  return (
    <div className="text-base-300 mt-8 xl:mt-0">
      <h1 className="text-3xl font-bold text-center">
        Service Overview & Reviews
      </h1>
      <p className="text-center text-base-200 mt-3 mb-10 w-3/4 mx-auto">
        Learn what this service offers and explore reviews from people who’ve
        used it. Add your own experience too!
      </p>

      <div className="space-y-6">
        {reviewData?.map((rev, i) => (
          <div
            key={i}
            className="container flex flex-col w-full max-w-xl p-6 mx-auto divide-y bg-info rounded-md dark:divide-gray-300dark:text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={rev.photo}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{rev.name}</h4>
                  <span className="text-xs dark:text-gray-600">{rev.time}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">{rev.rating}</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                {rev.review}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleReview}
        className="bg-error pt-6 pb-2 z-20 sticky bottom-0 max-w-xl w-full mx-auto"
      >
        <fieldset className="fieldset border-base-300 rounded-box">
          <legend className="fieldset-legend">
            How would you rate your experience?
          </legend>
          <div className=" flex gap-4 relative">
            <textarea
              rows="3"
              name="review"
              required
              className="block pr-14 text-justify w-full rounded-md shadow-sm shadow-primary textarea border-none textarea-primary bg-info py-2 px-3"
              placeholder="Write a review"
            ></textarea>
            <button
              className="absolute top-3 right-37 sm:right-43 text-primary cursor-pointer"
              type="submit"
            >
              <FiSend size={25} />
            </button>
            <div>
              <label className="label text-sm">Give a Rating</label>
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
                isRequired
              />
              <button
                type="button"
                className="btn bg-red-600 border-none text-white btn-sm"
                onClick={() => setRating(0)}
              >
                Reset
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default DetailsRight;
