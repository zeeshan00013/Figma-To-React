import React from 'react'
import porfolio from "../images/portfolio.svg";
import black5 from "../images/Black5.svg";
import black6 from "../images/Black6.svg";
import black7 from "../images/Black7.svg";
import black8 from "../images/Black8.svg";
import black9 from "../images/Black9.svg";
import black10 from "../images/Black10.svg";
import black11 from "../images/Black11.svg";
import black12 from "../images/Black12.svg";
import bloggirl from "../images/bloggirl.svg";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      imgSrc: black7,
      number: "01",
      title: "Web Design / Development",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      id: 2,
      imgSrc: black8,
      number: "02",
      title: "UI/UX Design",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      id: 3,
      imgSrc: black9,
      number: "03",
      title: "Website Migration",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      id: 4,
      imgSrc: black10,
      number: "04",
      title: "App Development",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      id: 4,
      imgSrc: black11,
      number: "04",
      title: "HubSpot Integration",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      id: 4,
      imgSrc: black12,
      number: "04",
      title: "Email Marketing",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
  ];
  return (
    <div className='flex flex-col'>
       <div className='w-full bg-[#0E1F51] py-10 md:py-14'>
  <div className='flex flex-col justify-center items-center mt-4 md:mt-10 gap-2'>
    <span className='text-3xl md:text-5xl text-[#FF3E54] font-semibold'>
      Services
    </span>
    <p className='text-center text-lg md:text-2xl font-thin text-white'>
      Home / Services
    </p>
  </div>
</div>

<div className="w-full bg-[#F7F7F7] flex flex-col items-center py-10 md:py-20">
  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16 mx-4 md:mx-0">
    <div className="w-full md:w-1/2">
      <img src={porfolio} alt="" className="w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
      <span className="text-[#ff4343] text-xl md:text-2xl font-bold">
        \ What We Do \
      </span>
      <div className="font-bold text-2xl md:text-4xl text-[#0E1F51] mt-2 leading-relaxed text-center md:text-left">
        We Develop Products That People Love to Use.
      </div>
      <div className="mt-5 text-base md:text-lg w-full md:w-[500px] text-center md:text-left">
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The
        point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed, Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
        <div className="w-full md:w-[250px] h-[100px] bg-white rounded-lg flex justify-start items-center gap-2 p-4">
          <div className="bg-[#f4d6d6] w-[50px] h-[50px] flex justify-center items-center rounded">
            <img src={black5} alt="" className="w-[40px] h-[40px]" />
          </div>
          <div>
            <p className="text-[#FF3E54] font-bold">Our Vision</p>
            <p className="text-sm mt-1">
              It is a long established fact that
            </p>
          </div>
        </div>
        <div className="w-full md:w-[250px] h-[100px] bg-white rounded-lg flex justify-start items-center gap-2 p-4">
          <div className="bg-[#f4d6d6] w-[50px] h-[50px] flex justify-center items-center rounded">
            <img src={black6} alt="" className="w-[40px] h-[40px]" />
          </div>
          <div>
            <p className="text-[#FF3E54] font-bold">Our Goal</p>
            <p className="text-sm mt-1">
              It is a long established fact that
            </p>
          </div>
        </div>
      </div>
      <button className="bg-[#FF3E54] text-white py-2 px-6 rounded-lg mt-5 mx-auto md:mx-0">
        View More
      </button>
    </div>
  </div>
</div>


      <div className="w-full bg-white ">
  <div className="flex flex-col justify-center items-center mt-10 md:mt-20 px-4">
    <div className="flex flex-col items-center">
      <span className="text-[#ff4a4a] text-xl md:text-2xl lg:text-3xl font-bold">
        \ Services \
      </span>
      <span className="text-[#0E1F51] text-3xl md:text-4xl lg:text-5xl font-bold">
        Our Expertise
      </span>
    </div>

    <div className="mt-8 w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {serviceData.map((card) => (
          <div
            key={card.id}
            className="w-full bg-[#F7F7F7] flex flex-col justify-start gap-4 rounded-lg p-4"
          >
            <div className="flex justify-center">
              <div className="bg-white w-[60px] h-[60px] flex justify-center items-center rounded-lg">
                <img
                  src={card.imgSrc}
                  alt=""
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#0E1F51] text-xl md:text-2xl font-bold">
                {card.title}
              </p>
              <div className="flex justify-center gap-2 mt-3">
                <div className="w-12 h-2 bg-[#FF3E54] rounded-lg"></div>
                <div className="w-6 h-2 bg-[#FF3E54] rounded-lg"></div>
              </div>
              <p className="mt-4 text-sm md:text-base mx-4 md:mx-0">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        <div className="w-full bg-white mt-10 flex justify-center items-center relative mb-10 ">
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
      
  
  )
}

export default Services;