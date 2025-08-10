import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import { toast } from "react-toastify";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDeleteForever, MdOutlineWork } from "react-icons/md";
import Swal from "sweetalert2";
import UpdateReview from "./UpdateReview";
import { Helmet } from "react-helmet-async";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const MyReviews = () => {
  const { user, logOut } = use(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [helpful, setHelpful] = useState(10);
  const [updatedReview, setUpdatedReview] = useState({});

  const handleDelete = (review) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://true-review-server.vercel.app/reviews/${review?._id}`,
            {
              headers: {
                authorization: `Bearer ${user.accessToken}`,
              },
            }
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setReviews(reviews.filter((s) => s._id !== review._id));
              Swal.fire({
                title: "Deleted!",
                text: "Your Review has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: `${err.message}: ${err.response.data.message}`,
              icon: "error",
            });
          });
      }
    });
  };

  const handleUpdate = (review) => {
    document.getElementById("my_modal_3").showModal();
    setUpdatedReview(review);
  };

  useEffect(
    () => {
      axios
        .get(
          `https://true-review-server.vercel.app/reviews?email=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${user?.accessToken}`,
            },
          }
        )
        .then((res) => {
          setReviews(res.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.message + ": " + err.response.data.message);
          setLoading(false);
          logOut();
        });
    },
    [user?.email],
    // reviews.length
  );

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
        <title>My Reviews | TrueReview</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center text-base-300">
        My Reviews
      </h1>
      <p className="text-center text-base-200 mt-3 mb-10 w-3/4 mx-auto">
        Browse your previously submitted reviews and ratings and update and them
        if needed
      </p>

      <div className="space-y-6">
        {reviews?.length === 0 && (
          <div className="space-y-3 bg-info p-24 rounded-2xl">
            <h1 className="text-2xl font-bold text-center text-base-300">
              No Review Found!
            </h1>
          </div>
        )}

        <div className="grid gap-6 xl:grid-cols-2">
          {reviews?.map((review,i) => (
            <article
              key={review?._id}
              className={`bg-info relative shadow-lg shadow-accent p-6 w-full  justify-between rounded-2xl mx-auto ${reviews.length%2 == 1 && i==reviews.length-1 ? 'xl:col-span-2 w-full' : 'xl:col-span-1 xl:w-xl'}`}
            >
              <div className="absolute right-4 top-2 space-x-2">
                <button
                  onClick={() => handleUpdate(review)}
                  className="btn btn-sm btn-circle btn-outline btn-primary hover:text-white"
                >
                  <FiEdit3 size={22} />
                </button>
                <button
                  onClick={() => handleDelete(review)}
                  className="btn btn-sm btn-circle btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <MdOutlineDeleteForever size={22} />
                </button>
              </div>

              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 me-4 rounded-full"
                  src={review?.photo}
                  alt=""
                />
                <div className="font-bold text-base-300">
                  <p>
                    {review?.name}{" "}
                    <time
                      datetime={review?.time}
                      className="block text-sm text-base-200"
                    >
                      {review?.time}
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <h3 className="ms-2 text-sm font-semibold text-base-300">
                  Rating:
                </h3>
                <Rating
                  style={{ maxWidth: 90 }}
                  value={review?.rating}
                  readOnly
                />
              </div>

              <p className="mb-2 text-base-200">{review?.review}</p>

              <p className="text-xs text-base-200 mt-4">Review on <span className="font-semibold text-base-300">{review.serviceTitle}</span></p>
              <p className="text-xs text-base-200 mb-2">By <span className="font-semibold text-base-300">{review.serviceCompany}</span> Company</p>

              <aside>
                <p className="mt-1 text-xs text-base-200">
                  {helpful} people found this review helpful
                </p>
                
              </aside>
            </article>
          ))}
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-0 max-w-2xl">
          <UpdateReview
            reviews={reviews}
            setReviews={setReviews}
            updatedReview={updatedReview}
          ></UpdateReview>
        </div>
      </dialog>
    </div>
  );
};

export default MyReviews;
