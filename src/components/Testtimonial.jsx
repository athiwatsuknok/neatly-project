import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style/testimonial.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import profile1 from "../images/profile1.jpg";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="w-full  text-[#2F3E35] mt-[7rem]  bg-[#e6ebe9] overflow-hidden">
      <h2
        style={{ fontFamily: "Noto Serif Display, serif" }}
        className="text-center mt-[4rem] text-[4.25rem] "
      >
        Our Customer Says
      </h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="w-3/5 mt-[5rem] ">
            <p className="text-[#465C50] text-xl tracking-wide">
              “lorem ipsum dolor sit amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint, velit official consequat duis enim
              velit mollit, exercitation minim amet consequat sunt.”
            </p>
            <div className="flex mt-[5rem] pb-[3rem] justify-center">
              <div className="w-[32px] h-[32px]">
                <img
                  className="w-[100%] h-[100%] rounded-full object-cover"
                  src={profile1}
                  alt=""
                />
              </div>{" "}
              <p className="ml-6 text-[#9AA1B9] font-[300]">
                Katherine, Company®
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-3/5 mt-[5rem] ">
            <p className="text-[#465C50] text-xl tracking-wide">
              “lorem ipsum dolor sit amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint, velit official consequat duis enim
              velit mollit, exercitation minim amet consequat sunt.”
            </p>
            <div className="flex mt-[5rem] pb-[3rem] justify-center">
              <div className="w-[32px] h-[32px]">
                <img
                  className="w-[100%] h-[100%] rounded-full object-cover"
                  src={profile1}
                  alt=""
                />
              </div>{" "}
              <p className="ml-6 text-[#9AA1B9] font-[300]">
                Katherine, Company®
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-3/5 mt-[5rem] ">
            <p className="text-[#465C50] text-xl tracking-wide">
              “lorem ipsum dolor sit amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint, velit official consequat duis enim
              velit mollit, exercitation minim amet consequat sunt.”
            </p>
            <div className="flex mt-[4rem]  justify-center">
              <div className="w-[32px] h-[32px]">
                <img
                  className="w-[100%] h-[100%] rounded-full object-cover"
                  src={profile1}
                  alt=""
                />
              </div>{" "}
              <p className="ml-6 text-[#9AA1B9] font-[300]">
                Katherine, Company®
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
