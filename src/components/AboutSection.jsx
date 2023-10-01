import React from "react";

const AboutSection = () => {
  return (
    <section className="h-[577px] w-4/5 mx-auto mt-[8rem]">
      <div className="">
        <h1
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-[4.25rem] font-light text-[#2F3E35]"
        >
          Neatly Hotel
        </h1>
        <div className="flex  justify-end">
          <p className=" text-[#646D89] w-4/5 tracking-wide mt-[4rem] font-light leading-7">
            Set in Bangkok, Thailand. Neatly Hotel offers 5-star accommodation
            with an outdoor pool, kids' club, sports facilities and a fitness
            centre. There is also a spa, an indoor pool and saunas.
            <br />
            <br />
            All units at the hotel are equipped with a seating area, a
            flat-screen TV with satellite channels, a dining area and a private
            bathroom with free toiletries, a bathtub and a hairdryer. Every room
            in Neatly Hotel features a furnished balcony. Some rooms are
            equipped with a coffee machine.
            <br />
            <br />
            Free WiFi and entertainment facilities are available at the property
            and also rentals are provided to explore the area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
