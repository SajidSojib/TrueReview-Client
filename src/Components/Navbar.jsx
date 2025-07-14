import React, { useContext, useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "motion/react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Firebase/AuthProvider";

const Navbar = () => {
//   const {user} = useContext(AuthContext);
  const user={email:""};
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  const links = (
    <>
      <li
        data-aos="fade-down"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <NavLink
          to={"/"}
          aria-label="Home"
          title="Home"
          className={({ isActive }) =>
            isActive
              ? "p-2 block lg:p-0 font-medium tracking-wide transition-colors underline underline-offset-4 decoration-2 decoration-primary"
              : "p-2 block lg:p-0 font-medium tracking-wide transition-colors duration-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <NavLink
          to={"/services"}
          aria-label="Services"
          title="Services"
          className={({ isActive }) =>
            isActive
              ? "p-2 block lg:p-0 font-medium tracking-wide transition-colors underline underline-offset-4 decoration-2 decoration-primary"
              : "p-2 block lg:p-0 font-medium tracking-wide transition-colors duration-200"
          }
        >
          Services
        </NavLink>
      </li>

      {user && (
        <>
          <li
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <NavLink
              to={"/addService"}
              aria-label="Add Service"
              title="Add Service"
              className={({ isActive }) =>
                isActive
                  ? "p-2 block lg:p-0 font-medium tracking-wide transition-colors underline underline-offset-4 decoration-2 decoration-primary"
                  : "p-2 block lg:p-0 font-medium tracking-wide transition-colors duration-200"
              }
            >
              Add Service
            </NavLink>
          </li>
          <li
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <NavLink
              to={"/myServices"}
              aria-label="My Services"
              title="My Service"
              className={({ isActive }) =>
                isActive
                  ? "p-2 block lg:p-0 font-medium tracking-wide transition-colors underline underline-offset-4 decoration-2 decoration-primary"
                  : "p-2 block lg:p-0 font-medium tracking-wide transition-colors duration-200"
              }
            >
              My Services
            </NavLink>
          </li>
          <li
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <NavLink
              to={"/myReviews"}
              aria-label="My Reviews"
              title="My Reviews"
              className={({ isActive }) =>
                isActive
                  ? "p-2 block lg:p-0 font-medium tracking-wide transition-colors underline underline-offset-4 decoration-2 decoration-primary"
                  : "p-2 block lg:p-0 font-medium tracking-wide transition-colors duration-200"
              }
            >
              My Reviews
            </NavLink>
          </li>
        </>
      )}

      {/* theme btn */}
      <li className="hidden lg:block">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={toggleTheme}
            checked={theme === "dark" ? true : false}
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className={`swap-off h-10 w-10 fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className={`swap-on h-10 w-10 fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
      {/* login btn */}
      <li>
        <Link
          to={"/login"}
          aria-label="Login"
          title="Login"
          className="hidden lg:block btn btn-outline text-base border-primary"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to={"/register"}
          aria-label="Register"
          title="Register"
          className="hidden lg:blockbtn btn-primary text-base-300"
        >
          Register
        </Link>
      </li>
    </>
  );
  
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-warning">
      <div className="relative flex items-center justify-between">
        <Link
          to={"/"}
          aria-label="TrueReview"
          title="Company"
          className="inline-flex items-center"
        >
          <img src="/feedback2.png" className="w-12 h-12" alt="" />
          <span className="ml-2 text-xl font-bold tracking-wide">
            True Review
          </span>
        </Link>
        <ul className="items-center hidden space-x-6 lg:flex">
          
          {links}
          
        </ul>

        {/* phone */}
        <div className="relative lg:hidden">
          <div className="flex items-center">
            <div className="">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onChange={toggleTheme}
                  checked={theme === "dark" ? true : false}
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className={`swap-off h-8 w-8 fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className={`swap-on h-8 w-8 fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={25}
            ></Hamburger>
          </div>

          {isMenuOpen && (
            <motion.div
              animate={{
                x: [100, 0],
                transition: { duration: 0.3 },
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
              className="absolute right-0 overflow-y-visible top-10"
            >
              <div className="h-full p-3 space-y-2 w-60 bg-secondary rounded-md">
                <div className="flex items-center p-2 space-x-4">
                  <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      class="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                    <span className="flex items-center space-x-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs hover:underline dark:text-gray-600"
                      >
                        View profile
                      </a>
                    </span>
                  </div>
                </div>
                <div className="divide-y dark:divide-gray-300">
                  <ul className="pt-2 pb-4 space-y-1 text-sm ">
                    {/* <li className="dark:bg-gray-100 dark:text-gray-900">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-gray-600"
                        >
                          <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                        </svg>
                        <span>Dashboard</span>
                      </a>
                    </li> */}
                    {links}
                  </ul>
                  <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-gray-600"
                        >
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
