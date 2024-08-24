import { useState } from 'react';
import manlogo from "../images/logoman.svg";
import hash1 from "../images/hash1.svg"
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const cardData = [
    {
      id: 0,
      content: (
        <>
          <div className="ml-10 mt-5">
            <img src={manlogo} alt="Man Logo" />
          </div>
          <span className="mr-10 mt-5">
            <img src={hash1} alt="Hash Logo" />
          </span>
          <div className="ml-10">
            <p className="mt-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
            <p className="mt-6 text-[#FF3E54] font-semibold">Samual Karl</p>
            <p className="mt-1">CEO</p>
          </div>
        </>
      ),
    },
    {
      id: 1,
      content: (
        <>
          <div className="ml-10 mt-5">
            <img src={manlogo} alt="Man Logo" />
          </div>
          <span className="mr-10 mt-5">
            <img src={hash1} alt="Hash Logo" />
          </span>
          <div className="ml-10">
            <p className="mt-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
            <p className="mt-6 text-[#FF3E54] font-semibold">Samual Karl</p>
            <p className="mt-1">CEO</p>
          </div>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <div className="ml-10 mt-5">
            <img src={manlogo} alt="Man Logo" />
          </div>
          <span className="mr-10 mt-5">
            <img src={hash1} alt="Hash Logo" />
          </span>
          <div className="ml-10">
            <p className="mt-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
            <p className="mt-6 text-[#FF3E54] font-semibold">Samual Karl</p>
            <p className="mt-1">CEO</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="relative flex justify-center items-center w-full h-[300px] overflow-hidden">
        {cardData.map((card, index) => {
          const isActive = activeIndex === index;
          const isPrev = activeIndex === (index + 1) % 3;
          const isNext = activeIndex === (index - 1 + 3) % 3;

          return (
            <div
              key={card.id}
              className={`absolute transition-all duration-500 ease-in-out ${
                isActive
                  ? 'w-[670px] h-[300px] scale-100 z-20'
                  : 'w-[335px] h-[150px] scale-75 z-10'
              } ${
                isPrev
                  ? 'left-[-150px] transform translate-x-[50%]'
                  : isNext
                  ? 'right-[-150px] transform translate-x-[-50%]'
                  : ''
              } bg-[#f3f1f1] rounded-lg`}
              style={{
                transform: isActive
                  ? 'translateX(0)'
                  : isPrev
                  ? 'translateX(-150px)'
                  : isNext
                  ? 'translateX(150px)'
                  : '',
              }}
            >
              <div className="flex flex-col">{card.content}</div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-5 h-5 border-solid border border-red-500 bg-white rounded-full active:bg-[#FF3E54]"
        >
        </button>
        <button
          onClick={handleNext}
         className="w-5 h-5 border-solid border border-red-500 bg-white rounded-full active:bg-[#FF3E54]"
        >
        </button>
      </div>
    </div>
  );
};

export default Carousel;
