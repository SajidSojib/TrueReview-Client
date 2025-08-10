import React, { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const updatedReview = ({ reviews, setReviews, updatedReview }) => {
  const { user, logOut } = useContext(AuthContext);
  const [star, setStar] = useState(updatedReview?.rating);
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (event) => {
    event.preventDefault();
    const rating = star;
    const review = event.target.review.value;
    
    axiosSecure.patch(`/reviews/${updatedReview._id}`, {
      rating,
      review,
    })
    .then((res) => {
      if (res.data.modifiedCount > 0) {
        updatedReview.rating = star;
        updatedReview.review = review;
        setReviews(
          reviews.map((s) =>
            s._id === updatedReview._id ? updatedReview : s
          )
        );

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Review updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
    // axios
    //   .patch(
    //     `http://localhost:9000/reviews/${updatedReview._id}`,
    //     {
    //       rating,
    //       review,
    //     },
    //     {
    //       headers: {
    //         authorization: `Bearer ${user.accessToken}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     if (res.data.modifiedCount > 0) {
    //       updatedReview.rating = star;
    //       updatedReview.review = review;
    //       setReviews(
    //         reviews.map((s) =>
    //           s._id === updatedReview._id ? updatedReview : s
    //         )
    //       );

    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Service updated successfully",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });

          const modal = document.getElementById("my_modal_3");
          if (modal) {
            modal.close();
          }
        }
      })
      .catch((err) => {
        toast.error(err.message + ": " + err.response.data.message);
        const modal = document.getElementById("my_modal_3");
        if (modal) {
          modal.close();
        }
        logOut();
      });
  };
  return (
    <div className="">
      <form className="modal-action m-0 block" onSubmit={handleSubmit}>
        <div className=" card-body bg-info w-full max-w-2xl mx-auto shrink-0 shadow-accent pt-12 p-6 md:p-12 sm:transform sm:scale-105 rounded-3xl m-0">
          <h1 className="text-3xl font-bold text-center text-base-300">
            Update Your Review
          </h1>
          <fieldset className="fieldset space-y-2 md:space-y-1 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Service Title</label>
              <input
                name="serviceTitle"
                type="text"
                className="input input-primary shadow-sm shadow-primary border-none placeholder:text-base-200 bg-error w-full"
                placeholder="Add a title"
                value={updatedReview?.serviceTitle}
                readOnly
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Give a new Rating</label>
              <Rating
                style={{ maxWidth: 180 }}
                value={star}
                onChange={setStar}
                isRequired
              />
            </div>

            <div className="flex flex-col md:col-span-2 gap-0.5">
              <label className="label text-base-300">New Review</label>
              <textarea
                name="review"
                type="text"
                placeholder="Add a description"
                className="textarea textarea-primary w-full border-none bg-error shadow-sm shadow-primary placeholder:text-base-200"
                defaultValue={updatedReview?.review}
                required
              ></textarea>
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Your Name</label>
              <input
                name="name"
                type="text"
                className="input w-full input-primary border-none bg-error shadow-sm shadow-primary placeholder:text-base-200"
                value={user?.displayName}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Your Email</label>
              <input
                name="email"
                type="email"
                className="input w-full input-primary border-none bg-error shadow-sm shadow-primary placeholder:text-base-200"
                value={user?.email}
                readOnly
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary md:col-span-2 text-error w-full mt-5"
              value="Submit"
            >
              Update
            </button>
          </fieldset>
        </div>
        <button
          type="button"
          onClick={() => document.getElementById("my_modal_3").close()}
          className="btn btn-sm btn-circle btn-ghost hover:bg-red-600 hover:text-white absolute right-2 top-2"
        >
          ✕
        </button>
      </form>
    </div>
  );
};

export default updatedReview;
