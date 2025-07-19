import React, { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newService = Object.fromEntries(formData.entries());

    newService.addedDate = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    
    axios.post("http://localhost:9000/services", newService, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Service added successfully",
            showConfirmButton: false,
            timer: 1500,
          })
        }
      })
      .catch(err => {
          toast.error(err.message + ": " + err.response.data.message);
      });
  };
  return (
    <div className="px-4 py-16 mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Helmet>
        <title>Add Service | TrueReview</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className=" card-body bg-info w-full max-w-4xl mx-auto mb-10 shrink-0 shadow-accent shadow-xl pt-12 p-6 md:p-12 sm:transform sm:scale-105 rounded-3xl">
          <h1 className="text-3xl font-bold text-center text-base-300">
            Add a New Service
          </h1>
          <p className=" lg:w-3/4 mx-auto mt-3 mb-6 md:mb-6 text-center text-base-200">
            Share your service with the community. Fill out the details below to
            list your service and help users discover what you offer.
          </p>
          <fieldset className="fieldset space-y-2 md:space-y-1 grid gap-4 mb-4 md:grid-cols-2">
            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Service Title</label>
              <input
                name="title"
                type="text"
                className="input input-primary shadow-sm shadow-primary border-none placeholder:text-base-200 bg-error w-full"
                placeholder="Add a title"
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Service Photo</label>
              <input
                name="photo"
                type="url"
                className="input input-primary shadow-sm shadow-primary border-none placeholder:text-base-200 bg-error w-full"
                placeholder="Photo URL"
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Service Category</label>
              <select
                name="category"
                defaultValue="Select Category"
                className="select w-full select-primary border-none bg-error shadow-sm shadow-primary placeholder:text-base-200"
              >
                <option disabled={true}>Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Legal Services">Legal Services</option>
                <option value="Writing">Writing</option>
                <option value="Home Services">Home Services</option>
                <option value="Events & Entertainment">
                  Events & Entertainment
                </option>
                <option value="Travel & Hospitality">
                  Travel & Hospitality
                </option>
                <option value="Business Consulting">Business Consulting</option>
                <option value="Freelance">Freelance</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Price</label>
              <input
                name="price"
                type="text"
                className="input w-full input-primary border-none bg-error shadow-sm shadow-primary placeholder:text-base-200"
                placeholder="Enter Price($)"
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Company Name</label>
              <input
                name="compay"
                type="text"
                className="input w-full border-none bg-error shadow-sm shadow-primary placeholder:text-base-200 input-primary"
                placeholder="Enter Company Name"
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Company Website</label>
              <input
                name="companyWeb"
                type="url"
                className="input w-full input-primary border-none bg-error shadow-sm shadow-primary placeholder:text-base-200"
                placeholder="Company Website URL"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2 gap-0.5">
              <label className="label text-base-300">Service Description</label>
              <textarea
                name="description"
                type="text"
                placeholder="Add a description"
                className="textarea textarea-primary w-full border-none bg-error shadow-sm shadow-primary placeholder:text-base-200"
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
              Add Service
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default AddService;
