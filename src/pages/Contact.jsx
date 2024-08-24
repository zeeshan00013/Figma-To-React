import React from "react";
import social1 from "../images/social1.svg";
import social2 from "../images/social2.svg";
import social3 from "../images/social3.svg";
import social4 from "../images/social4.svg";
import call from "../images/call.svg";
import message from "../images/message.svg";
import location from "../images/location.svg";
import bloggirl from "../images/bloggirl.svg";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[288px] bg-[#0E1F51]">
        <div className="flex flex-col justify-center items-center mt-14 gap-2">
          <span className="text-5xl text-[#FF3E54] font-semibold ">
            Contact
          </span>
          <p className="text-center text-2xl font-thin text-white">
            Home / Contact
          </p>
        </div>
      </div>
      <div className="w-full bg-[#f4dee4] py-10">
      <div className="flex flex-col items-center px-4">
        <div className="flex flex-col items-center">
          <span className="text-[#FF3E54] text-xl md:text-2xl font-bold">
            \ Get In touch \
          </span>
          <span className="text-[#0E1F51] text-3xl md:text-4xl font-bold">
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
  );
};

export default Contact;
