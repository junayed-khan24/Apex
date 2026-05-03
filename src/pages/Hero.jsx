import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const images = [
  "../../src/assets/Hero2.png",
  "../../src/assets/Hero3.png",
  "../../src/assets/Hero.jpeg",
  "../../src/assets/madrasa1.png",

];

// 🔥 clone first image at end
const sliderImages = [...images, images[0]];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  const prevSlide = () => {
    if (current === 0) {
      // jump to last real slide
      setTransition(false);
      setCurrent(images.length - 1);
    } else {
      setCurrent((prev) => prev - 1);
      setTransition(true);
    }
  };

  // 🔥 reset without animation
  useEffect(() => {
    if (current === images.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, 700); // same as duration
    }
  }, [current]);

  return (
    <section className="w-full bg-base-100 py-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Slider */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden shadow-lg">

            <div
              className={`flex h-full ${
                transition ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {sliderImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-full h-full object-cover flex-shrink-0 hover:scale-105 transition duration-700"
                />
              ))}
            </div>

            {/* Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2  text-white/60 hover:text-white text-4xl p-2 "
            >
              <GoChevronLeft></GoChevronLeft>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2  text-white/60 hover:text-white p-2  text-4xl"
            >
              <GoChevronRight />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-6 h-[3px] ${
                    current % images.length === index
                      ? "bg-white scale-125"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>

        

        </div>
      </div>
    </section>
  );
};

export default Hero;