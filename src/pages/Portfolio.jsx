import React from "react";
import port1 from "../images/portfolioimg1.svg";
import port2 from "../images/portfolioimg2.svg";
import port3 from "../images/portfolioimg3.svg";
import port4 from "../images/portfolioimg4.svg";
import port5 from "../images/portfolioimg5.svg";
import bloggirl from "../images/bloggirl.svg";

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[288px] bg-[#0E1F51]">
        <div className="flex flex-col justify-center items-center mt-14 gap-2">
          <span className="text-5xl text-[#FF3E54] font-semibold ">
            Portfolio
          </span>
          <p className="text-center text-2xl font-thin text-white">
            Home / Portfolio
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto p-4">
  <div className="flex flex-col items-center mt-10">
    <span className="text-[#FF3E54] text-2xl font-bold">
      \ Portfolio \
    </span>
    <span className="text-[#0E1F51] mt-5 text-4xl font-bold">
      Our Work
    </span>
  </div>
  <div className="flex justify-center items-center mt-10">
  <div className="w-full max-w-3xl flex flex-wrap justify-center gap-2 rounded-lg border-2 border-gray-600 shadow-lg">
    <button className="flex-1 min-w-[80px] px-4 py-2 text-gray-500 hover:text-black focus:outline-none border-r border-gray-600 last:border-r-0">
      All
    </button>
    <button className="flex-1 min-w-[80px] px-4 py-2 text-gray-500 hover:text-black focus:outline-none border-r border-gray-600 last:border-r-0">
      Life
    </button>
    <button className="flex-1 min-w-[80px] px-4 py-2 text-gray-500 hover:text-black focus:outline-none border-r border-gray-600 last:border-r-0">
      Moment
    </button>
    <button className="flex-1 min-w-[80px] px-4 py-2 text-gray-500 hover:text-black focus:outline-none border-r border-gray-600 last:border-r-0">
      Nature
    </button>
    <button className="flex-1 min-w-[80px] px-4 py-2 text-gray-500 hover:text-black focus:outline-none border-r border-gray-600 last:border-r-0">
      Stores
    </button>
    <button className="flex-1 min-w-[80px] px-4 py-2 text-gray-500 hover:text-black focus:outline-none last:border-r-0">
      Travel
    </button>
  </div>
</div>

  <div className="flex flex-col justify-center items-center mt-10 gap-4">
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="w-full sm:w-[770px] md:w-[770px] lg:w-[770px] h-auto">
        <img src={port1} alt="" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full sm:w-[370px] md:w-[370px] lg:w-[370px] h-auto">
        <img src={port2} alt="" className="w-full h-auto object-cover" />
      </div>
    </div>
    <div className="flex flex-wrap justify-center items-center mt-5 gap-4">
      <div className="w-full sm:w-[270px] md:w-[270px] lg:w-[270px] h-auto">
        <img src={port3} alt="" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full sm:w-[370px] md:w-[370px] lg:w-[370px] h-auto">
        <img src={port4} alt="" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full sm:w-[470px] md:w-[470px] lg:w-[470px] h-auto">
        <img src={port5} alt="" className="w-full h-auto object-cover" />
      </div>
    </div>
    <div className="flex justify-center items-center mt-10">
      <button className="bg-[#FF3E54] py-2 px-4 rounded-lg text-white hover:bg-[#e02e45] focus:outline-none">
        Get In Touch
      </button>
    </div>
  </div>
</div>



      <div className="w-full bg-white mb-10 flex justify-center items-center relative ">
        <div className="w-full max-w-4xl h-[300px] relative">
          <img
            src={bloggirl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8">
            <h2 className="text-lg md:text-3xl font-bold text-center leading-relaxed mb-4">
              “Some of the History of Our Company is that we are Catching up
              through Video”
            </h2>
            <button className="py-2 px-6 md:py-3 md:px-8 rounded-lg bg-[#FF3E54]">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
