import React, { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateService = ({ updateService, setServices, services }) => {
  const { user, logOut } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newService = Object.fromEntries(formData.entries());

    if (newService.category === "Select Category") {
      return toast.error("Please select a category");
    }

    axios
      .put(
        `https://true-review-server.vercel.app/services/${updateService?._id}`,
        newService,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          newService._id = updateService._id;
          setServices(
            services.map((s) => (s._id === updateService._id ? newService : s))
          );

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Service updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          e.target.reset();
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
      <form className="modal-action m-0 block " onSubmit={handleSubmit}>
        <div className=" card-body bg-info w-full max-w-4xl mx-auto shrink-0 shadow-accent pt-12 p-6 md:p-12 sm:transform sm:scale-105 rounded-3xl m-0">
          <h1 className="text-3xl font-bold text-center text-base-300">
            Update Your Service
          </h1>
          <fieldset className="fieldset space-y-2 md:space-y-1 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Service Title</label>
              <input
                name="title"
                type="text"
                className="input input-primary shadow-sm shadow-primary border-none placeholder:text-base-200 bg-error w-full"
                placeholder="Add a title"
                defaultValue={updateService?.title}
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
                defaultValue={updateService?.photo}
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Service Category</label>
              <select
                name="category"
                defaultValue={updateService?.category}
                className="select w-full select-primary border-none bg-error shadow-sm shadow-primary placeholder:text-base-200"
              >
                <option disabled>Select Category</option>
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
                defaultValue={updateService?.price}
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-base-300">Company Name</label>
              <input
                name="company"
                type="text"
                className="input w-full border-none bg-error shadow-sm shadow-primary placeholder:text-base-200 input-primary"
                placeholder="Enter Company Name"
                defaultValue={updateService?.company}
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
                defaultValue={updateService?.companyWeb}
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
                defaultValue={updateService?.description}
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

export default UpdateService;
