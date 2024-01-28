import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Posts = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let timer;

    const startTimer = () => {
      timer = setInterval(() => {
        handleNext();
      }, 6000); // Change the interval time as needed
    };

    const stopTimer = () => {
      clearInterval(timer);
    };

    startTimer();

    return () => {
      stopTimer();
    };
  }, [currentIndex]);

  return (
    <>
      <div className="p-5 m-5 bg-purple-900/70 -10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center relative">
          
          <img
            className="w-96 h-96 transition-opacity duration-500 ease-in-out opacity-100"
            style={{ opacity: currentIndex === 0 ? 1 : 0 }}
            src={images[currentIndex]}
            alt="carousel"
          />
          <img
            className="w-96 h-96 absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-100"
            style={{ opacity: currentIndex === images.length - 1 ? 1 : 0 }}
            src={images[images.length - 1]}
            alt="carousel"
          />
          <img
            className="w-96 h-96 absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-100"
            style={{ opacity: currentIndex !== 0 && currentIndex !== images.length - 1 ? 1 : 0 }}
            src={images[currentIndex - 1]}
            alt="carousel"
          />
          
        </div>
        <div className="flex items-center justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer mx-2 ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;

