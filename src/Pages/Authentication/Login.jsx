import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { signInUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        Swal.fire({
          title: "User Created Successfully",
          text: "Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(
          err.message.split("/")[1].split(")")[0] +
            ` : "please provide valid email and password"`
        );
      });
  };
  return (
    <div data-aos="zoom-in-up">
      <div className="relative mx-auto max-w-md px-8 pt-10 pb-8 mt-10 bg-info text-base-300 rounded-xl shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Login Now
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              Email
            </label>
            <input
              placeholder="Enter Email"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm focus:border-primary focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="password" className="inline-block mb-1 font-medium">
              Password
            </label>
            <input
              placeholder="Enter Password"
              required
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm focus:border-primary focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
            />
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex btn btn-primary text-error items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Login
            </button>
          </div>
          <p className="text-xs text-base-200 sm:text-sm">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer link-hover text-primary"
            >
              Register Now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
