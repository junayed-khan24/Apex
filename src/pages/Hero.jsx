import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import img1 from "../../src/assets/hero.jpeg";
import img2 from "../../src/assets/Hero3.png";
import img3 from "../../src/assets/Hero2.png";
import img4 from "../../src/assets/madrasa.png";

const images = [
  img1,
  img2,
  img3,
  img4
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

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#013622] mb-4">
              মাদ্রাসার সংক্ষিপ্ত পরিচিতি
            </h2>

            <div className="divider text-gray-800"></div>

            <p className="text-base md:text-lg text-gray-700 mb-6   break-all overflow-hidden text-clip line-clamp-">
               আলহাজ্ব শেখ গিয়াস উদ্দিন আহমদ নুরানী হাফিজিয়া মাদ্রাসা ও এতিমখানা...
              ইসলামী দ্বীনি শিক্ষা প্রতিষ্ঠান । প্রতিষ্ঠানটি বাংলাদেশের নেত্রকোনা জেলার কেন্দুয়া উপজেলায় মাসকা গ্রামে অবস্থিত। Aspernatur voluptatibus beatae incidunt, expedita, iure velit consequuntur quod saepe nostrum accusantium nisi excepturi, ipsa aperiam rem animi sequi  assumenda eveniet maxime possimus harum illum fugit. assumenda eveniet maxime possimus harum illum fugit.
            </p>

            <Link to="/about">
              <button className="btn bg-[#013622] text-white px-8 hover:bg-yellow-600 transition-all duration-300">
                বিস্তারিত
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;