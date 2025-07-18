import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoListCircle } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineWork } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";

const DetailsLeft = ({ data, reviewData }) => {

  const totalReview=reviewData.length;
  const star1 = reviewData.filter((review) => review.rating === 1).length;
  const star2 = reviewData.filter((review) => review.rating === 2).length;
  const star3 = reviewData.filter((review) => review.rating === 3).length;
  const star4 = reviewData.filter((review) => review.rating === 4).length;
  const star5 = reviewData.filter((review) => review.rating === 5).length;
  const averageRating = (star1 + star2 * 2 + star3 * 3 + star4 * 4 + star5 * 5) / totalReview || 0;



  const massage = (average) => {
    if (average > 0 && average < 1) {
      return "Very Bad";
    } else if (average >= 1 && average <= 2) {
      return "Average";
    } else if (average > 2 && average <= 3) {
      return "Average";
    } else if (average >= 3 && average < 4) {
      return "Good";
    } else if (average >= 4 && average < 5) {
      return "Very Good";
    } else if(average === 5){
      return "Excellent";
    }else {
      return "Not Rated";
    }
  };

  return (
    <div>
      <div className="max-w-lg bg-info px-10 py-8 rounded-lg text-base-300">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={data.photo}
              alt=""
              className="block object-cover object-center w-full rounded-md h-[262px] dark:bg-gray-500"
            />
            {/* <div className="flex items-center justify-end text-xs">
                <span className="text-base-200 font-semibold">
                  <span className="font-normal">Posted on: </span>
                  {data.addedDate}
                </span>
              </div> */}
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold dark:text-violet-600">
                  {data.title}
                </h3>
                {/* <p className="badge badge-soft badge-lg badge-primary text-[#684ecf] bg-[#e2dff3]">
                  {data.category}
                </p> */}
              </div>
            </a>
            <p className="leading-snug text-base-200">{data.description}</p>
            <div>
              <p className="flex items-center gap-1">
                <span className="font-semibold flex items-center gap-1">
                  <RiMoneyDollarCircleFill
                    size={22}
                    color="green"
                  ></RiMoneyDollarCircleFill>
                  Price:
                </span>
                {data.price}
              </p>

              <p className="flex items-center gap-1">
                <span className="font-semibold flex items-center gap-1">
                  <IoListCircle size={22} color="blue"></IoListCircle>
                  Category:
                </span>
                {data.category}
              </p>
              <p className="flex items-center gap-1">
                <span className="font-semibold flex items-center gap-1">
                  <FcCalendar size={22}></FcCalendar>
                  Posted on:
                </span>
                {data.addedDate}
              </p>

              <hr className="my-4" />

              <p className="flex items-center gap-1">
                <span className="font-semibold flex items-center gap-1">
                  <MdOutlineWork size={22}></MdOutlineWork>
                  Company Name:
                </span>
                {data.company}
              </p>

              <p className="flex items-center gap-1">
                <span className="font-semibold flex items-center gap-1">
                  <FaLink size={22} color="purple"></FaLink>
                  Company Website:
                </span>
                <Link
                  to={data.companyWeb}
                  className="link link-hover link-primary font-bold"
                >
                  Link
                </Link>
              </p>

              <hr className="my-4" />

              <p className="flex items-center gap-1">
                <span className="font-semibold flex items-center gap-1">
                  <CgProfile size={22}></CgProfile>
                  Publisher Name:
                </span>
                {data.name}
              </p>

              <p className="flex items-center gap-1">
                <span className="font-semibold flex items-center gap-1">
                  <MdEmail size={22} color=""></MdEmail>
                  Publisher Email:
                </span>
                {data.email}
              </p>

              <hr className="my-4" />

              {/* review card */}
              <div className="flex items-center flex-col sm:flex-row gap-4">
                <div>
                  <p className="text-5xl text-center font-extrabold">{averageRating.toFixed(1)}</p>
                  <p className="text-lg text-center font-bold">{massage(averageRating)}</p>
                  <Rating style={{ maxWidth: 90 }} value={averageRating} readOnly />
                  <p className="text-sm text-center">{totalReview} reviews</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <p>5 star</p>
                    <progress
                      className="progress w-40 text-orange-300"
                      value={star5}
                      max={totalReview}
                    ></progress>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>4 star</p>
                    <progress
                      className="progress w-40 text-orange-300"
                      value={star4}
                      max={totalReview}
                    ></progress>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>3 star</p>
                    <progress
                      className="progress w-40 text-orange-300"
                      value={star3}
                      max={totalReview}
                    ></progress>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>2 star</p>
                    <progress
                      className="progress w-40 text-orange-300"
                      value={star2}
                      max={totalReview}
                    ></progress>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>1 star</p>
                    <progress
                      className="progress w-40 text-orange-300"
                      value={star1}
                      max={totalReview}
                    ></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLeft;
