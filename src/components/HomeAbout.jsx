import React from "react";
import img3 from "../images/Ellipse 3.svg";
import img4 from "../images/Mask group.svg";
import { FaUserAstronaut } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <div className="flex justify-center">
      <div className="hidden lg:block">
        <img
          src={img3}
          alt=""
          className="w-[150px] md:w-[250px] lg:w-[350px] h-[100px] md:h-[150px] lg:h-[200px] absolute top-[550px] md:top-[650px] left-[100px] md:left-[200px] lg:left-[300px]"
        />
      </div>
      <div className="w-screen h-auto md:h-[598px] bg-[#F7F7F7] mt-10 lg:gap-20">
        <div className="mt-10 md:mt-24 flex flex-col md:flex-row  items-center md:items-start gap-5">
          <div className="w-[300px] h-[200px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[398px] ml-0 md:ml-10 lg:ml-20">
          <img
            src={img4}
            alt=""
            className=""
          />
          </div>
          <div className="text-center md:text-left p-5 md:p-0 ">
            <span className="text-[#FF3E54] text-lg md:text-2xl font-bold">
              \ About us \
            </span>
            <div className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0E1F51] mt-2 leading-[30px] md:leading-[40px] lg:leading-[50px] w-full md:w-3/4">
              One of the Fastest Ways to Business Growth
            </div>
            <p className="mt-5 text-sm md:text-lg w-full md:w-auto">
              It is a long established fact that a reader will be distracted by
              the <br className="hidden md:block" />
              readable content of a page when looking at its layout. The point
              of <br className="hidden md:block" />
              using Lorem Ipsum is that it has a more-or-less normal
              distribution <br className="hidden md:block" /> of letters, as
              opposed
            </p>
            <div className="bg-white w-full md:w-[400px] lg:w-[550px] h-auto md:h-[100px] flex flex-col md:flex-row items-center justify-start mt-8 gap-5 p-5 md:p-0">
              <div className="bg-[#F7F7F7] w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex justify-center items-center rounded">
                <FaUserAstronaut className="w-6 h-6 md:w-10 md:h-10 text-[#FF3E54]" />
              </div>
              <div className="text-center md:text-left mt-3 md:mt-0">
                <p className="text-[#0E1F51] text-lg md:text-xl font-bold">
                  Get Instant Professional Advice
                </p>
                <p className="text-sm md:text-base text-[#000000]">
                  Ready to Help :{" "}
                  <span className="text-[#FF3E54] font-mono font-semibold">
                    +1 356 678 7897
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
