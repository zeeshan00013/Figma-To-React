import React from "react";
import blog1 from "../images/Blog1.svg";
import blog2 from "../images/Blog2.svg";
import blog3 from "../images/Blog3.svg";
import bloglogo1 from "../images/bloglogo1.svg";
import bloglogo2 from "../images/bloglogo2.svg";
import bloglogo3 from "../images/bloglogo3.svg";
import bloggirl from "../images/bloggirl.svg";

const LatestPost = () => {
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
  ];
  return (
    <div className="flex flex-col">
  <div className="w-full bg-[#F7F7F7] h-auto py-10">
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-10">
        <span className="text-[#FF3E54] text-lg md:text-2xl font-bold">
          \ Our Blog \
        </span>
        <span className="text-[#0E1F51] text-2xl md:text-4xl font-bold">
          Latest Post
        </span>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[360px] h-auto bg-white flex flex-col rounded-xl shadow-md"
          >
            <div className="flex justify-center mt-5">
              <img
                src={card.imgSrc}
                alt=""
                className="w-full h-[200px] object-cover rounded-t-xl"
              />
            </div>
            <span className="text-[#FF3E54] text-lg md:text-xl font-semibold mt-4 mx-4">
              {card.title}
            </span>
            <div className="flex justify-between mt-6 mx-4 mb-4">
              <div className="flex gap-1 items-center">
                <img src={card.authorImg} alt="" className="w-8 h-8 rounded-full" />
                <p className="text-sm text-[#0E1F51] font-semibold">
                  {card.authorName}
                </p>
              </div>
              <span className="text-sm text-[#4a4747] font-semibold">
                {card.date}
              </span>
            </div>
          </div>
        ))}
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

export default LatestPost;
