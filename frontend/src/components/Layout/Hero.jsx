import React, { useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";

const Hero = () => {
  const slides = [hero1, hero2, hero3, hero4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer); // Clear on unmount
  }, [currentIndex]);

  return (
    <section className="">
      <div className="container mx-auto h-[400px] md:h-[600px] lg:h-[750px] p-6 pt-0 relative group">
        <div className="relative w-full h-full">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
            className="w-full h-full bg-center bg-cover duration-1000 ease-in-out"
          ></div>

          {/* Left Arrow */}
          <div
            className="hidden group-hover:block absolute top-[45%] left-10 text-2xl rounded-full p-2 bg-slate-200 text-gray-700 cursor-pointer"
            onClick={prevSlide}
          >
            <BsArrowLeftShort className="w-8 h-8" />
          </div>

          {/* Right Arrow */}
          <div
            className="hidden group-hover:block absolute top-[45%] right-10 text-2xl rounded-full p-2 bg-slate-200 text-gray-700 cursor-pointer"
            onClick={nextSlide}
          >
            <BsArrowRightShort className="w-8 h-8" />
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-white"
                    : "w-3 bg-gray-300 border-2 border-gray-700 bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
