import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import axios from "axios";
import UpdateService from "./UpdateService";
import Swal from "sweetalert2";

const MyServices = () => {
  const {user} = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateService, setUpdateService] = useState(null);

  const handleUpdate = (service) => {
    setUpdateService(service);
    document.getElementById("my_modal_3").showModal();
  };

  const handleDelete = (service) => {
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
            .delete(`http://localhost:9000/services/${service?._id}`)
            .then((res) => {
              if (res.data.deletedCount > 0) {
                setServices(services.filter((s) => s._id !== service._id));
              }
            })
            .catch((err) => {
              console.log(err);
            });
          Swal.fire({
            title: "Deleted!",
            text: "Your Post has been deleted.",
            icon: "success",
          });
        }
      });
    
  };
  
  useEffect(() => {
    axios
      .get(`http://localhost:9000/services?email=${user?.email}`)
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email, services.length]);

  console.log(services);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold text-center text-base-300">
        My Posted Services
      </h1>
      <p className="text-center text-base-200 mt-3 mb-10 w-3/4 mx-auto">
        Easily manage all the services you’ve shared. View details, edit, or
        delete your listings directly from the table below.
      </p>

      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table bg-info">
            {/* head */}
            <thead className="bg-blue-600 text-white">
              <tr>
                <th>#</th>
                <th>Service Title</th>
                <th>Company</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {services.map((service, index) => (
                <tr key={service._id} className="hover:bg-accent">
                  <th>{index + 1}</th>
                  <td>{service.title}</td>
                  <td>{service.company}</td>
                  <td>{service.category}</td>
                  <td>${service.price}</td>
                  <td className="flex items-center gap-2">
                    <button onClick={() => handleUpdate(service)} className="btn btn-outline text-base hover:btn-primary hover:text-error border-primary">
                      Update
                    </button>
                    <button onClick={() => handleDelete(service)} className="btn btn-outline border-red-600 text-base hover:bg-red-600 hover:text-base">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-0 max-w-5xl">
              <UpdateService
                services={services}
                setServices={setServices}
                updateService={updateService}
              ></UpdateService>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
