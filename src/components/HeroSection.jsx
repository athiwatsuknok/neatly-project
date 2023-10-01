import heroImg from "../images/hero section.svg";
import { useState } from "react";
import { useEffect } from "react";

const HeroSection = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleDecrease = (type) => {
    if (type === "rooms" && rooms > 1) {
      setRooms(rooms - 1);
    } else if (type === "guests" && guests > 1) {
      setGuests(guests - 1);
    }
  };

  const handleIncrease = (type) => {
    if (type === "rooms") {
      setRooms(rooms + 1);
    } else if (type === "guests") {
      setGuests(guests + 1);
    }
  };

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);

    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

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
              className="appearance-none border border-slate-300 px-2 mt-1 text-slate-400 rounded w-[240px] py-2 leading-tight focus:outline-none focus:border-slate-300"
            />
          </div>
          <div className="ml-8">
            <p>Check Out</p>
            <input
              type="date"
              placeholder="Select a Date"
              defaultValue={selectedDate}
              onChange={handleDateChange}
              className="appearance-none border border-slate-300 px-2 mt-1 text-slate-400 rounded w-[240px] py-2 leading-tight focus:outline-none focus:border-slate-300"
            />
          </div>
          <div className="ml-8">
            <p>Room & Guests</p>
            <button
              className="appearance-none border border-slate-300 px-2 mt-1 text-slate-400 rounded w-[240px] py-2 text-left leading-tight focus:outline-none focus:border-slate-300"
              onClick={handleToggleDropdown}
            >
              {rooms} Rooms , {guests} Guests
            </button>
            {isDropdownVisible && (
              <div className="dropdown shadow-lg mt-2 px-4  pb-4 rounded-lg shadow-slate-300/50">
                <div className="flex  items-center justify-between">
                  <p>Rooms: </p>
                  <div className="flex items-center">
                    <button
                      className="btn border-2 border-[#E76B39] rounded-full w-[20px] h-[20px] flex justify-center items-center text-[#E76B39] font-semibold"
                      onClick={() => handleDecrease("rooms")}
                    >
                      -
                    </button>
                    <div className="px-4">{rooms}</div>
                    <button
                      className="btn border-2 border-[#E76B39] rounded-full w-[20px] h-[20px] flex justify-center items-center text-[#E76B39] font-semibold"
                      onClick={() => handleIncrease("rooms")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex mt-2  items-center justify-between ">
                  <p>Guests: </p>
                  <div className="flex items-center">
                    <button
                      className="btn border-2 border-[#E76B39] rounded-full w-[20px] h-[20px] flex justify-center items-center text-[#E76B39] font-semibold"
                      onClick={() => handleDecrease("guests")}
                    >
                      -
                    </button>
                    <div className="px-4">{guests}</div>
                    <button
                      className="btn border-2 border-[#E76B39] rounded-full w-[20px] h-[20px] flex justify-center items-center text-[#E76B39] font-semibold"
                      onClick={() => handleIncrease("guests")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
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
