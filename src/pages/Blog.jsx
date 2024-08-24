import React from "react";
import bloglogo1 from "../images/bloglogo1.svg";
import bloglogo2 from "../images/bloglogo2.svg";
import bloglogo3 from "../images/bloglogo3.svg";
import blog2 from "../images/Blog2.svg";
import blog3 from "../images/Blog3.svg";
import blog1 from "../images/Blog1.svg";
import bloggirl from "../images/bloggirl.svg";

const Blog = () => {
  const cardData = [
    {
      imgSrc: blog1, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo1, // Replace with your image source
      authorName: "Ranold Jeff.",
      date: "August 23, 2024", // Replace with your date
    },
    {
      imgSrc: blog2, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo2, // Replace with your image source
      authorName: "Patricia Anderson.",
      date: "August 20, 2024", // Replace with your date
    },

    {
      imgSrc: blog3, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo3, // Replace with your image source
      authorName: "Elaine Luna.",
      date: "August 15, 2024", // Replace with your date
    },
    {
      imgSrc: blog1, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo1, // Replace with your image source
      authorName: "Ranold Jeff.",
      date: "August 23, 2024", // Replace with your date
    },
    {
      imgSrc: blog2, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo2, // Replace with your image source
      authorName: "Patricia Anderson.",
      date: "August 20, 2024", // Replace with your date
    },

    {
      imgSrc: blog3, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo3, // Replace with your image source
      authorName: "Elaine Luna.",
      date: "August 15, 2024", // Replace with your date
    },
    {
      imgSrc: blog1, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo1, // Replace with your image source
      authorName: "Ranold Jeff.",
      date: "August 23, 2024", // Replace with your date
    },
    {
      imgSrc: blog2, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo2, // Replace with your image source
      authorName: "Patricia Anderson.",
      date: "August 20, 2024", // Replace with your date
    },

    {
      imgSrc: blog3, // Replace with your image source
      title: "The most Popular Business Of the Year",
      authorImg: bloglogo3, // Replace with your image source
      authorName: "Elaine Luna.",
      date: "August 15, 2024", // Replace with your date
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="w-full h-[288px] bg-[#0E1F51]">
        <div className="flex flex-col justify-center items-center mt-14 gap-2">
          <span className="text-5xl text-[#FF3E54] font-semibold ">Blogs</span>
          <p className="text-center text-2xl font-thin text-white">
            Home / Blogs
          </p>
        </div>
      </div>

      <div className="w-full bg-white ">
  <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center  sm:mt-20">
      <span className="text-[#FF3E54] text-xl sm:text-2xl font-bold">
        \ Our Blog \
      </span>
      <span className="text-[#0E1F51] text-2xl sm:text-3xl lg:text-4xl font-bold">
        Latest Post
      </span>
    </div>
    <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-5">
      <div className="w-full max-w-sm lg:max-w-md h-auto border rounded-lg shadow-xl flex flex-col">
        <div className="flex justify-center items-center mt-5">
          <img src={blog1} alt="" className="w-full max-w-[490px] h-auto" />
        </div>
        <p className="mt-2 ml-5 text-gray-500">May 4th, 2022</p>
        <span className="mt-1 ml-5 text-[#FF3E54] text-base md:text-lg font-semibold">
          The most Popular Business Of the Year
        </span>
        <div className="flex justify-between mt-2 items-center px-5">
          <img src={bloglogo1} alt="" className="mr-auto" />
          <p className="text-gray-500">2 Min Read</p>
        </div>
      </div>
      <div className="w-full max-w-sm lg:max-w-md flex flex-col justify-center items-center gap-5">
        <div className="border rounded-lg shadow-xl w-full max-w-[554px] h-auto">
          <div className="flex gap-5 p-5">
            <div className="flex justify-center items-center">
              <img src={blog3} alt="" className="w-full max-w-[185px] h-auto" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gray-500">Apr 27th, 2022</p>
                <span className="text-[#FF3E54] text-base md:text-lg font-bold">
                  The most Popular Business Of the Year
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <img src={bloglogo3} alt="" />
                <p className="text-gray-500">2 Min Read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-lg shadow-xl w-full max-w-[554px] h-auto">
          <div className="flex gap-5 p-5">
            <div className="flex justify-center items-center">
              <img src={blog2} alt="" className="w-full max-w-[185px] h-auto" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gray-500">Apr 27th, 2022</p>
                <span className="text-[#FF3E54] text-base md:text-lg font-bold">
                  The most Popular Business Of the Year
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <img src={bloglogo2} alt="" />
                <p className="text-gray-500">2 Min Read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="w-full bg-[#F7F7F7]  h-auto mt-10 ">
  <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center mt-10 sm:mt-20">
      <span className="text-[#FF3E54] text-xl sm:text-2xl font-bold">
        \ Our Blog \
      </span>
      <span className="text-[#0E1F51] text-2xl sm:text-3xl lg:text-4xl font-bold">
        Latest Post
      </span>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 sm:px-0">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto bg-white flex flex-col rounded-xl shadow-lg"
        >
          <div className="flex justify-center mt-5">
            <img
              src={card.imgSrc}
              alt=""
              className="w-full max-w-[320px] h-auto rounded-t-xl object-cover"
            />
          </div>
          <span className="text-[#FF3E54] text-lg sm:text-xl font-semibold mt-4 w-3/4 ml-4">
            {card.title}
          </span>
          <div className="flex justify-between mt-6">
            <div className="flex ml-4 gap-1 items-center">
              <img
                src={card.authorImg}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm mt-1 text-[#0E1F51] font-semibold">
                {card.authorName}
              </p>
            </div>
            <span className="text-sm mt-3 mr-4 text-[#4a4747] font-semibold">
              {card.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      <div className="w-full bg-white mt-10 flex justify-center items-center relative ">
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

export default Blog;
