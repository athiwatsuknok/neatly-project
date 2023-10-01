import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import neatlyHotel from "../images/hero section.svg";
import neatly1 from "../images/neatly1.svg";
import neatly2 from "../images/neatly2.svg";
import neatly3 from "../images/neatly3.svg";
import neatly4 from "../images/neatly4.svg";
import neatly5 from "../images/neatly5.svg";

import "swiper/css";
import "swiper/css/pagination";

import "../style/slider.css";

// import required modules
import { Pagination } from "swiper/modules";

const ImageSlider = () => {
  return (
    <div className="h-[500px] mb-12">
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={neatly1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={neatly2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={neatly3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={neatly4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={neatly5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={neatlyHotel} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
