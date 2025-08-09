import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-creative";
import { Link } from "react-router";

const Hero = ({ slideData }) => {
  

  return (
    // <div className="px-4 py-16 mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-2xl ">
    <div className="px-4 pt-16 mb-24 mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 rounded-2xl ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideData?.map((data) => (
          <SwiperSlide key={data?.id}>
            <div
              className="bg-cover rounded-2xl "
              style={{ backgroundImage: `url(${data?.image})` }}
            >
              <div className="py-44 space-y-3 bg-gradient-to-t from-[#e2141410] via-[#0f0f0fa1] to-[#0f0f0fde] text-base-300">
                <h1
                  data-aos="zoom-in"
                  className="text-4xl font-bold text-center text-[#e2e2f5]"
                >
                  {data?.title}
                </h1>
                <p
                  data-aos="fade-up"
                  className="mt-6 mb-14 text-center text-[#d8e6ffca] w-3/4 mx-auto"
                >
                  {data?.subtitle}
                </p>
                <div
                  data-aos="fade-up"
                  className="flex items-center justify-center"
                >
                  <Link to={data?.route}>
                    <button className="btn btn-primary text-accent">
                      {data.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-prev absolute left-2 top-1/2 text-xl -translate-y-1/2 bg-primary p-2 rounded-full text-error cursor-pointer z-10">
          ◀
        </div>
        <div className="custom-next absolute right-2 top-1/2 text-xl -translate-y-1/2 bg-primary p-2 rounded-full text-error cursor-pointer z-10">
          ▶
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
