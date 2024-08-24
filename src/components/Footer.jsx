import React from "react";
import mainlogo from "../images/mainlogo.svg";
import { Link } from "react-router-dom";
import social1 from "../images/social1.svg";
import social2 from "../images/social2.svg";
import social3 from "../images/social3.svg";
import social4 from "../images/social4.svg";
import reactlogo from "../images/reactlogo.svg";
import wordpress from "../images/worpress.svg";
import wix from "../images/wix.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0E1F51] text-white w-full py-10 md:py-16">
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
        <div className="flex flex-col w-full md:w-[240px] sm:text-center md:text-start">
          <div className="flex justify-center md:justify-center mb-4">
            <Link to={"/"}>
              <img src={mainlogo} alt="Main Logo" className="w-24 md:w-32" />
            </Link>
          </div>
          <p className="text-sm md:text-base mb-6">
            Fact that a reader will be distracted by the readable content of a page when looking at.
          </p>
          <div className="flex justify-center md:justify-start gap-2">
            <div className="w-10 h-10 bg-[#FF3E54] flex items-center justify-center rounded-full">
              <img src={social1} alt="Social 1" className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-[#FF3E54] flex items-center justify-center rounded-full">
              <img src={social2} alt="Social 2" className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-[#FF3E54] flex items-center justify-center rounded-full">
              <img src={social3} alt="Social 3" className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-[#FF3E54] flex items-center justify-center rounded-full">
              <img src={social4} alt="Social 4" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[250px] p-8 md:p-0">
          <h2 className="text-xl  md:text-2xl font-semibold mb-4">Services</h2>
          <span className="block w-16 h-2 md:justify-start justify-center bg-[#FF3E54] mb-4 rounded-xl"></span>
          <ul className="text-sm md:text-base leading-6">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        <div className="flex flex-col w-full md:w-[250px] p-8 md:p-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Career</h2>
          <span className="block w-16 h-2 bg-[#FF3E54] mb-4 rounded-xl"></span>
          <div className="flex flex-col gap-4">
            {[{ imgSrc: reactlogo, title: "ReactJs Dev.", description: "1-5 Years of Exp." },
              { imgSrc: wordpress, title: "Wordpress Dev.", description: "1-5 Years of Exp." },
              { imgSrc: wix, title: "Python Developer.", description: "1-5 Years of Exp." }
            ].map((job, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-full">
                  <img src={job.imgSrc} alt={job.title} className="w-16 h-16" />
                </div>
                <div>
                  <p className="text-base md:text-xl text-[#FF3E54] font-semibold">{job.title}</p>
                  <p className="text-sm md:text-base">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[250px] p-8 md:p-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Subscribe</h2>
          <span className="block w-16 h-2 bg-[#FF3E54] mb-4 rounded-xl"></span>
          <p className="text-sm md:text-base mb-4">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
          <input
            type="text"
            className="border-none px-3 h-12 rounded-xl mb-4 text-gray-900"
            placeholder="Email"
          />
          <button className="py-2 px-4 rounded-xl bg-[#FF3E54]">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
