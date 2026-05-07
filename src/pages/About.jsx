import { useTranslation } from "react-i18next";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import madrasaImg from "../../src/assets/Hero3.png";
import img from "../../src/assets/cemetery.png";


const About = () => {

  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100  px-6 md:px-20 py-4 md:py-8">

      <div className="container mx-auto px-6 md:px-20 bg-white p-6 rounded-lg shadow-md">

        {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-xl md:text-3xl font-bold border-b pb-2 mb-4"
        >
          {t("about.title")}
        </h2>

        <div className="max-w-6xl mx-auto bg-white  p-4 md:p-6 grid grid-cols-1 md:grid-cols-1 gap-10">

          {/* Image */}
          <div
            data-aos="zoom-in"
            className=" rounded-lg overflow-hidden flex items-center justify-center"
          >
            <img
              src={madrasaImg}
              alt="madrasa"
              className="w-[450px]  h-[300px]: rounded-md hover:scale-110 transition duration-300 object-cover"
            />
          </div>

          {/* Description */}
          <div
            data-aos="fade-up"
            className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4"
          >
            <p>
              {t("about.p1")}
            </p>

            <p>
              {t("about.p2")}
            </p>

            <p>
              {t("about.p3")}
            </p>
            <p>
              {t("about.p4")}
            </p>
            <p>
              {t("about.p5")}
            </p>
          </div>
        </div>



        <div className="max-w-6xl mx-auto bg-white  p-4 md:p-6 mt-8 border-t border-gray-300">

          {/* ===== Top Content ===== */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/*Image */}
            <div data-aos="fade-left" className="block md:hidden overflow-hidden" >
              <img
                src={img}
                alt="health"
                className=" shadow-lg w-[450px]  h-[300px] rounded-md hover:scale-110 transition duration-300 object-cover"
              />
            </div>

            {/* Left Text */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
                {t("about.title1")}
              </h2>

              <p className="text-gray-600 mb-4">
                {t("about.p6")}
              </p>

              <p className="text-gray-600 mb-4">
                {t("about.p7")}
              </p>

              <p className="text-gray-600 mb-6">
                {t("about.p8")}
              </p>



            </div>

            {/* Right Image */}
            <div data-aos="fade-left" className="hidden md:block overflow-hidden rounded-lg" >
              <img
                src={img}
                alt="health"
                className=" shadow-lg   h-auto  hover:scale-110 transition duration-300 object-cover"
              />
            </div>
          </div>



        </div>

      </div>

    </div>
  );
};

export default About;