import React from "react";
import img4 from "../images/Mask group.svg";
import { FaUserAstronaut } from "react-icons/fa";
import img1 from "../images/Rectangle1.svg";
import img2 from "../images/Rectangle2.svg";
import img5 from "../images/Rectangle3.svg";
import img6 from "../images/Rectangle4.svg";
import bloggirl from "../images/bloggirl.svg";

const About = () => {
  const imagesData = [
    {
      id: 1,
      src: img1,
      name: "Larry F. Burnett",
      position: "CEO",
    },
    {
      id: 2,
      src: img2,
      name: "Meghan J. Webb",
      position: "CTO",
    },
    {
      id: 3,
      src: img5,
      name: "Yonne J. Cullum",
      position: "CFO",
    },
    {
      id: 4,
      src: img6,
      name: "Diana H. Williams",
      position: "COO",
    },
    {
      id: 5,
      src: img1,
      name: "Larry F. Burnett",
      position: "CEO",
    },
    {
      id: 6,
      src: img2,
      name: "Meghan J. Webb",
      position: "CTO",
    },
    {
      id: 7,
      src: img5,
      name: "Yonne J. Cullum",
      position: "CFO",
    },
    {
      id: 8,
      src: img6,
      name: "Diana H. Williams",
      position: "COO",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="w-full h-[288px] bg-[#0E1F51]">
        <div className="flex flex-col justify-center items-center mt-10 gap-2 px-4 sm:px-6 lg:px-8">
          <span className="text-3xl sm:text-4xl lg:text-5xl text-[#FF3E54] font-semibold">About</span>
          <p className="text-lg sm:text-xl lg:text-2xl text-center font-thin text-white">
            Home / About
          </p>
        </div>
      </div>
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl h-auto bg-[#F7F7F7] py-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={img4} alt="" className="w-full md:w-[600px] h-auto mx-auto md:mx-0" />
            <div className="text-center md:text-left">
              <span className="text-[#FF3E54] text-xl md:text-2xl font-bold">
                \ About us \
              </span>
              <div className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0E1F51] mt-2 leading-snug md:leading-[50px] w-full md:w-3/4">
                One of the Fastest Way to Business Growth
              </div>
              <p className="mt-5 text-base md:text-lg">
                It is a long established fact that a reader will be distracted
                by the <br />
                readable content of a page when looking at its layout. The point
                of <br />
                using Lorem Ipsum is that it has a more-or-less normal
                distribution <br /> of letters, as opposed
              </p>
              <div className="bg-white w-full max-w-xl h-auto flex flex-col md:flex-row items-center md:items-start justify-start mt-8 p-4 rounded-lg shadow-md">
                <div className="bg-[#F7F7F7] w-[70px] h-[70px] flex justify-center items-center rounded-full mb-4 md:mb-0">
                  <FaUserAstronaut className="w-8 h-8 text-[#FF3E54]" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[#0E1F51] text-lg md:text-xl font-bold">
                    Get Instant Professional Advice
                  </p>
                  <p className="text-base">
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
      <div className="w-full bg-white py-16">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <span className="text-[#ff4a4a] text-xl md:text-2xl font-bold"> \ Team \ </span>
            <span className="text-[#0E1F51] text-2xl md:text-3xl lg:text-4xl font-bold">
              Our Leaders
            </span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-8">
            {imagesData.map((card) => (
              <div key={card.id} className="w-full max-w-xs md:max-w-sm bg-white rounded-lg shadow-lg">
                <div className="bg-white w-full h-auto flex justify-center items-center rounded-t-lg">
                  <img
                    src={card.src}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-[#FF3E54] text-lg md:text-xl font-bold">
                    {card.name}
                  </p>
                  <p className="text-base">{card.position}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-white h-auto flex justify-center items-center relative py-10">
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
      </div>
    </div>
  );
};

export default About;
