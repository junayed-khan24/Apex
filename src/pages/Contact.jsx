import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMailUnreadFill } from "react-icons/ri";
import NetrokonaMap from "./NetrokonaMap";

const Contact = () => {

  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (

    <div>
      <div className="">
      

        <div className="bg-base-200 flex items-center justify-center  py-12  gap-3  mx-auto px-6 md:px-20">

          <div className="w-full max-w-xl bg-base-100 shadow-lg rounded-3xl p-8 md:p-12 mx-auto">
            <div className="flex" data-aos="fade-up" data-aos-delay="300">
              <div className="icon items-center justify-center w-16 h-16 rounded-full bg-[#013622] text-white mr-4 flex hover:bg-yellow-600 transition-colors duration-300">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div className="text">
                <div className="title text-2xl font-bold">Call Us</div>
                <div className="desc text-lg">+880 01711-625344</div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl bg-base-100 shadow-lg rounded-3xl p-8 md:p-12 mx-auto">
            <div className="flex" data-aos="fade-up" data-aos-delay="300">
              <div className="icon items-center justify-center w-16 h-16 rounded-full bg-[#013622] text-white mr-4 flex hover:bg-yellow-600 transition-colors duration-300">
                <RiMailUnreadFill className="text-2xl" />
              </div>
              <div className="text">
                <div className="title text-2xl font-bold">Email Us</div>
                <div className="desc text-lg">hello@madrasa.com</div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl bg-base-100 shadow-lg rounded-3xl p-8 md:p-12 mx-auto">
            <div className="flex" data-aos="fade-up" data-aos-delay="300">
              <div className="icon items-center justify-center w-16 h-16 rounded-full bg-[#013622] text-white mr-4 flex hover:bg-yellow-600 transition-colors duration-300">
                <FaLocationDot className="text-2xl" />
              </div>
              <div className="text">
                <div className="title text-2xl font-bold">Address</div>
                <div className="desc text-lg">Netrokona
                  Bangladesh
                </div>
              </div>
            </div>
          </div>

        </div>

        <NetrokonaMap></NetrokonaMap>


      </div>
    </div>

  );
};

export default Contact;
