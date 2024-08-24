import React from "react";
import img1 from "../images/Group65.png";
import img3 from "../images/Ellipse 3.svg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between mt-10 w-full h-auto md:h-[600px] ">
      <div className="relative flex items-center justify-center md:justify-start md:ml-[150px] mb-5 md:mb-[200px]">
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 md:left-10 flex items-center justify-center w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-red-50 rounded-full z-10"></div>

        <div className="text-center md:text-left z-20 w-[300px] md:w-[422px] h-auto">
          <span className="text-[#FF3E54] text-lg md:text-2xl font-bold">
            \ We Are Here \
          </span>
          <h1 className="text-3xl md:text-5xl  font-bold text-[#0E1F51] mt-2">
            Better Insights For Business Growth
          </h1>
          <button className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-[#FF3E54] text-white text-base md:text-lg rounded">
            View More
          </button>
        </div>
      </div>

      <div className="relative flex justify-center md:justify-end">
        <img src={img1} alt="" className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] md:mr-28" />
        <img src={img3} alt="" className="absolute bottom-2 right-1/2 transform translate-x-1/2 md:translate-x-0 md:bottom-14 md:right-0" />
      </div>
    </div>
  );
};

export default Hero;
