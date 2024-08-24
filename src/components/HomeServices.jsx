import React from "react";
import black from "../images/Black.svg";
import black2 from "../images/Black2.svg";
import black3 from "../images/Black3.svg";
import black4 from "../images/Black4.svg";
import porfolio from "../images/portfolio.svg";
import black5 from "../images/Black5.svg";
import black6 from "../images/Black6.svg";
import black7 from "../images/Black7.svg";
import black8 from "../images/Black8.svg";
import black9 from "../images/Black9.svg";
import black10 from "../images/Black10.svg";
import black11 from "../images/Black11.svg";
import black12 from "../images/Black12.svg";
import img1 from "../images/Rectangle1.svg";
import img2 from "../images/Rectangle2.svg";
import img3 from "../images/Rectangle3.svg";
import img4 from "../images/Rectangle4.svg";
import manlogo from "../images/logoman.svg";
import hash1 from "../images/hash1.svg";
import womenlogo from "../images/womenlogo.svg";
import call from "../images/call.svg";
import message from "../images/message.svg";
import location from "../images/location.svg";
import social1 from "../images/social1.svg";
import social2 from "../images/social2.svg";
import social3 from "../images/social3.svg";
import social4 from "../images/social4.svg";




const cardData = [
  {
    id: 1,
    imgSrc: black,
    number: "01",
    title: "Research",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    id: 2,
    imgSrc: black2,
    number: "02",
    title: "Design",
    description:
      "It is a long established fact that a reader will be distra by the readable content of a page.",
  },
  {
    id: 3,
    imgSrc: black3,
    number: "03",
    title: "Develope",
    description:
      "It is a long established fact that a reader will be distra by the readable content of a page.",
  },
  {
    id: 4,
    imgSrc: black4,
    number: "04",
    title: "Test",
    description:
      "It is a long established fact that a reader will be distra by the readable content of a page.",
  },
];

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
    src: img3,
    name: "Yvonne J. Cullum",
    position: "CFO",
  },
  {
    id: 4,
    src: img4,
    name: "Diana H. Williams",
    position: "COO",
  },
];

const HomeServices = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-[#FF3E54] text-2xl font-bold mt-20">
          \ Planning \
        </span>
        <h2 className="mt-2 text-4xl text-[#0E1F51] font-bold">Our Process</h2>
        <div className="flex justify-center mt-10 gap-5 flex-wrap">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-[255px] h-[334px] bg-[#F7F7F7] flex flex-col justify-start gap-4 rounded-lg"
            >
              <div className="ml-10 mt-5 flex justify-between rounded">
                <div className="bg-white w-[80px] h-[80px] flex justify-center items-center rounded-lg">
                  <img src={card.imgSrc} alt="" className="w-[50px] h-[49px]" />
                </div>
                <span className="text-[#d6d4d4] text-5xl font-extrabold mr-2">
                  {card.number}
                </span>
              </div>

              <div>
                <p className="text-[#0E1F51] text-2xl font-bold ml-10">
                  {card.title}
                </p>
                <div className="flex gap-3 ml-10 mt-5">
                  <div className="w-16 h-2 bg-[#FF3E54] font-bold rounded-lg"></div>
                  <div className="w-8 h-2 bg-[#FF3E54] font-bold rounded-lg"></div>
                </div>
                <p className="ml-10 mt-5 w-3/4">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#F7F7F7] mt-20 flex justify-center px-4">
      <div className="w-full max-w-7xl h-auto flex flex-col lg:flex-row justify-center gap-8 py-10">
        <div className="flex-shrink-0 w-full lg:w-[600px] h-auto lg:ml-16">
          <img src={porfolio} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="flex-1 ">
          <span className="text-[#FF4343] text-xl md:text-2xl font-bold">
            \ What We Do \
          </span>
          <div className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0E1F51] mt-2 leading-[32px] md:leading-[36px] lg:leading-[40px]">
            We Develop Products That People Love to Use.
          </div>
          <div className="mt-5 text-sm md:text-base lg:text-lg w-full lg:w-[500px] h-auto lg:h-[140px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using readable content.
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-start mt-8 gap-4 lg:gap-8">
            <div className="w-full lg:w-[250px] h-auto bg-white rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-4 p-4">
              <div className="bg-[#F4D6D6] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] flex justify-center items-center rounded">
                <img src={black5} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[#FF3E54] text-sm md:text-base font-bold">Our Vision</p>
                <p className="text-xs md:text-sm lg:text-base mt-1 w-full lg:w-2/3">
                  It is a long established fact that
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[250px] h-auto bg-white rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-4 p-4">
              <div className="bg-[#F4D6D6] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] flex justify-center items-center rounded">
                <img src={black6} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[#FF3E54] text-sm md:text-base font-bold">Our Goal</p>
                <p className="text-xs md:text-sm lg:text-base mt-1 w-full lg:w-2/3">
                  It is a long established fact that
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#FF3E54] text-white py-2 px-4 md:px-6 rounded-lg mt-5">
            View More
          </button>
        </div>
      </div>
    </div>

    <div className="w-full bg-white mt-16 ">
  <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col items-center mb-8">
      <span className="text-[#ff4a4a] text-lg md:text-2xl font-bold">
        \ Services \
      </span>
      <span className="text-[#0E1F51] text-2xl md:text-4xl font-bold">
        Our Expertise
      </span>
    </div>

    <div className="flex flex-wrap gap-5 justify-center">
      {serviceData.map((card) => (
        <div
          key={card.id}
          className="w-full sm:w-[260px] md:w-[360px] md:h-[334px] bg-[#F7F7F7] flex flex-col justify-start gap-4 rounded-lg shadow-md"
        >
          <div className="flex justify-center mt-5">
            <div className="bg-white w-[80px] h-[80px] flex justify-center items-center rounded-lg">
              <img
                src={card.imgSrc}
                alt=""
                className="w-[50px] h-[50px] object-contain"
              />
            </div>
          </div>

          <div className="px-4">
            <p className="text-[#0E1F51] text-xl md:text-2xl font-bold text-center">
              {card.title}
            </p>
            <div className="flex gap-2 justify-center mt-3">
              <div className="w-16 h-2 bg-[#FF3E54] rounded-lg"></div>
              <div className="w-8 h-2 bg-[#FF3E54] rounded-lg"></div>
            </div>
            <p className="mt-3 text-center">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


<div className="w-full bg-[#F7F7F7] flex flex-col items-center mt-20">
  <div className="flex flex-col items-center mt-10 px-4 md:px-8">
    <div className="text-center">
      <span className="text-[#ff4a4a] text-xl md:text-2xl font-bold">
        \ Team \
      </span>
      <span className="text-[#0E1F51] text-3xl md:text-4xl font-bold block mt-2">
        Our Leaders
      </span>
    </div>

    <div className="mt-10 flex flex-wrap justify-center gap-5 px-4">
      {imagesData.map((card) => (
        <div
          key={card.id}
          className="w-full sm:w-[255px] h-auto bg-[#F7F7F7] flex flex-col justify-start rounded-lg"
        >
          <div className="mt-5 rounded">
            <div className="bg-white w-full h-auto flex justify-center items-center rounded-lg">
              <img
                src={card.src}
                alt=""
                className="w-full h-auto object-cover rounded-t-lg"
              />
            </div>
            <div className="mt-5 text-center">
              <p className="text-[#FF3E54] text-lg md:text-xl font-bold">
                {card.name}
              </p>
              <p>{card.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      <div className="w-full bg-white h-auto py-10">
      <div className="flex flex-col items-center px-4">
        <div className="flex flex-col items-center">
          <span className="text-[#FF3E54] text-xl md:text-2xl font-bold">
            \ From our Customers \
          </span>
          <span className="text-[#0E1F51] text-3xl md:text-4xl font-bold">
            Testimonials
          </span>
        </div>

        <div className="flex flex-col mt-10 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
            <div className="w-full lg:w-[270px] h-auto bg-[#F7F7F7] rounded-lg p-4">
              <div className="flex flex-col items-center">
                <span className="flex justify-end w-full">
                  <img src={hash1} alt="Hash Icon" className="w-12 h-12" />
                </span>
                <div className="text-center mt-4">
                  <p>
                    It is a long established fact that a reader will be distracted by
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[670px] h-auto bg-[#F3F1F1] rounded-lg p-4">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="ml-2 lg:ml-6">
                    <img src={manlogo} alt="Man Logo" className="w-12 h-12" />
                  </div>
                  <span className="mr-2 lg:mr-6">
                    <img src={hash1} alt="Hash Icon" className="w-12 h-12" />
                  </span>
                </div>
                <div className="ml-2 lg:ml-6 mt-4">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
                  </p>
                  <p className="mt-4 text-[#FF3E54] font-semibold">Samual Karl</p>
                  <p className="mt-1">CEO</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[270px] h-auto bg-[#F7F7F7] rounded-lg p-4">
              <div className="flex flex-col items-center">
                <div className="mt-4">
                  <img src={womenlogo} alt="Women Logo" className="w-12 h-12" />
                </div>
                <div className="mt-4 text-center">
                  <p>
                    It is a long established fact that a reader will be distracted by the
                  </p>
                  <p className="mt-1 text-[#FF3E54] font-semibold">Samual Karl</p>
                  <p className="mt-1">CEO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <button className="w-4 h-4 border border-red-500 bg-white rounded-full active:bg-[#FF3E54]"></button>
            <button className="w-4 h-4 border border-red-500 bg-red-600 rounded-full active:bg-[#FF3E54]"></button>
            <button className="w-4 h-4 border border-red-500 bg-white rounded-full active:bg-[#FF3E54]"></button>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full bg-[#0E1F51] py-10">
      <div className="flex flex-col items-center px-4">
        <div className="flex flex-col items-center">
          <span className="text-[#FF3E54] text-xl md:text-2xl font-bold">
            \ Get In touch \
          </span>
          <span className="text-white text-3xl md:text-4xl font-bold">
            Hey! Let’s Talk
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center mt-10 gap-8 px-4 lg:px-0">
          <div className="w-full lg:w-[750px] bg-white rounded-lg p-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#F7F7F7] w-full h-[50px] rounded-lg border border-[#F7F7F7] p-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-[#F7F7F7] w-full h-[50px] rounded-lg border border-[#F7F7F7] p-4"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-[#F7F7F7] w-full h-[50px] rounded-lg border border-[#F7F7F7] p-4"
              />
              <textarea
                placeholder="Your message"
                className="bg-[#F7F7F7] w-full h-[150px] rounded-lg border border-[#F7F7F7] p-4"
              ></textarea>
              <button className="bg-[#FF3E54] w-full h-[50px] text-white text-center rounded-lg mt-4">
                Send Now
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[360px] bg-white rounded-lg p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#F7F7F7] w-[70px] h-[70px] flex justify-center items-center rounded-lg">
                  <img src={call} alt="Call Icon" className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-lg text-[#FF3E54] font-semibold">Call Anytime</span>
                  <p className="text-sm mt-1">+91 23678 27867</p>
                  <p className="text-sm">+91 23678 27867</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#F7F7F7] w-[70px] h-[70px] flex justify-center items-center rounded-lg">
                  <img src={message} alt="Message Icon" className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-lg text-[#FF3E54] font-semibold">Send a Message</span>
                  <p className="text-sm mt-1">info@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#F7F7F7] w-[70px] h-[70px] flex justify-center items-center rounded-lg">
                  <img src={location} alt="Location Icon" className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-lg text-[#FF3E54] font-semibold">Visit Us</span>
                  <p className="text-sm mt-1">123 Business St, City</p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#0E1F51]">Follow Us</h3>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="w-12 h-12 bg-[#FF3E54] flex items-center justify-center rounded-full">
                  <img src={social1} alt="Social Icon 1" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-[#FF3E54] flex items-center justify-center rounded-full">
                  <img src={social2} alt="Social Icon 2" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-[#FF3E54] flex items-center justify-center rounded-full">
                  <img src={social3} alt="Social Icon 3" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-[#FF3E54] flex items-center justify-center rounded-full">
                  <img src={social4} alt="Social Icon 4" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default HomeServices;
