import React from "react";
import gardenView from "../images/gardenView.svg";
import deluxe from "../images/deluxe.svg";
import superior from "../images/superior.svg";
import supreme from "../images/supreme.svg";
import seaView from "../images/seaView.svg";
import suits from "../images/suits.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RoomSuits = () => {
  return (
    <div className="mt-[4rem] mb-[3rem]">
      <h1
        style={{ fontFamily: "Bentham serif" }}
        className="text-[4.25rem]  text-center  font-[200] text-[#2F3E35]"
      >
        Rooms & Suits
      </h1>
      <div className="w-[1120px] mx-auto mt-[3rem]">
        <img
          className="h-[580px] object-cover w-[100%] "
          src={gardenView}
          alt="gardenView"
        />
        <div
          className="grid grid-cols-2 h-[400px] gap-x-4  mt-4"
          style={{ gridTemplateColumns: "643px 1fr" }}
        >
          <div className="relative">
            <img
              className="w-full h-[100%] object-cover"
              src={deluxe}
              alt="deluxe"
            />
            <div className="absolute bottom-[15%] left-[15%] text-white">
              <h2
                className="text-[2.75rem]"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Deluxe
              </h2>
              <a href="#" className="font-medium">
                Explore Room{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff" }}
                />{" "}
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-[100%] object-cover"
              src={superior}
              alt="superior"
            />
            <div className="absolute bottom-[15%] left-[15%] text-white">
              <h2
                className="text-[2.75rem]"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Superior
              </h2>
              <a href="#" className="font-medium">
                Explore Room{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff" }}
                />{" "}
              </a>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 grid-rows-2 h-[700px] gap-4 mt-6"
          style={{ gridTemplateColumns: "453px 1fr" }}
        >
          <div className="relative row-span-2">
            <img
              className="w-full h-[100%] object-cover row-span-2"
              src={seaView}
              alt="deluxe"
            />
            <div className="absolute bottom-[15%] left-[10%] text-white">
              <h2
                className="text-[2.5rem]"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Premier Sea View
              </h2>
              <a href="#" className="font-medium">
                Explore Room{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff" }}
                />{" "}
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-full h-[100%] object-cover"
              src={supreme}
              alt="superior"
            />
            <div className="absolute bottom-[15%] left-[15%] text-white">
              <h2
                className="text-[2.75rem]"
                style={{ fontFamily: "Noto Serif Display, serif" }}
              >
                Supreme
              </h2>
              <a href="#" className="font-medium">
                Explore Room{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff" }}
                />{" "}
              </a>
            </div>
          </div>
          <img
            className="w-full h-[100%] object-cover"
            src={suits}
            alt="suits"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomSuits;
