import heroImg from "../images/hero section.svg";
import Calendar from "react-calendar";
import { useState } from "react";
import { useEffect } from "react";

const HeroSection = () => {
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    // Calculate tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);

    // Format the date as YYYY-MM-DD (required by input type="date")
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

    // Set the default date to tomorrow
    setSelectedDate(tomorrowFormatted);
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="relative w-full h-auto">
      <img className="w-full" src={heroImg} alt="Description of the image" />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <h1
        className="absolute top-[8rem]  w-full translate-x-[50%] right-[50%] text-white text-[5.5rem] text-center"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        A Best Place for Your <br /> Neatly Experience
      </h1>
      <div className="bg-white w-[1120px] h-[196px] absolute bottom-[15%] rounded-md right-[50%] translate-x-[50%]">
        <div className="flex w-[90%] mx-auto items-center justify-between pb-8 h-full">
          <div className="">
            <p>Check In</p>
            <input
              type="date"
              placeholder="Select a Date"
              defaultValue={selectedDate}
              onChange={handleDateChange}
              className="appearance-none border border-slate-300 px- mt-1 text-slate-400 rounded w-[240px] py-2 leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="ml-8">
            <p>Check Out</p>
            <input
              type="date"
              placeholder="Select a Date"
              defaultValue={selectedDate}
              onChange={handleDateChange}
              className=" appearance-none border border-slate-300 px-2 mt-1 text-slate-400 rounded w-[240px] py-2 leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="ml-8">
            <p>Room & Guests</p>
            <input
              type="date"
              placeholder="Select a Date"
              defaultValue={selectedDate}
              onChange={handleDateChange}
              className=" appearance-none border border-slate-300 px-2 mt-1 text-slate-400 rounded w-[240px] py-2 leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="bg-[#C14817] text-white  rounded-sm px-7 mt-7 py-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
