import React from "react";
import service from "../data/ServiceData.js";

const ServiceSection = () => {
  return (
    <div className="bg-[#465C50]  h-[480px] mt-[4rem] flex justify-center items-center">
      <div className="w-4/5 px-12">
        <h2
          style={{ fontFamily: "Bentham serif" }}
          className="service text-[4.25rem] text-white font-[200] text-center"
        >
          Service & Facilities
        </h2>
        <div className="w-full flex mt-8 justify-between">
          {service.map((item, index) => {
            return (
              <div key={index} className="flex">
                <div className="flex flex-col items-center justify-center">
                  <img src={item.img} alt="" />
                  <p className="text-white mt-4">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
