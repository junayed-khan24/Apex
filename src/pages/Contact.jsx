



import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMailUnreadFill } from "react-icons/ri";

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
        <div className="h-[#440] bg-base-200 flex items-center justify-center px-4 py-12 ">

          <div
            data-aos="zoom-in"
            className="w-full max-w-xl bg-base-100 shadow-xl rounded-3xl p-8 md:p-12"
          >

            {/* Title */}
            <h2
              data-aos="fade-up"
              className="text-3xl text-[#013622] md:text-4xl font-semibold text-center mb-10"
            >
              {t("contact.title")}
            </h2>

            {/* Form */}
            <form className="space-y-6">

              {/* Name */}
              <div data-aos="fade-up" data-aos-delay="100">
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              {/* Email */}
              <div data-aos="fade-up" data-aos-delay="200">
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              {/* Message */}
              <div data-aos="fade-up" data-aos-delay="300">
                <textarea
                  rows="5"
                  placeholder={t("contact.message")}
                  className="textarea textarea-bordered w-full rounded-xl resize-none"
                ></textarea>
                {t("contact.message")}
              </div>

              {/* Button */}
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                className="
              btn w-full rounded-full
              bg-[#013622] text-white px-8 hover:bg-yellow-600 border-none
              hover:scale-105
              transition-colors duration-300
            "
              >
                {t("contact.send")}
              </button>
            </form>

            {/* Footer Email */}
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-left mt-8 text-[#013622] text-sm  font-normal font-regular"
            >
              Or you can mail me at
              <br />
              <span className="font-regular font-normal text-2xl text-black underline">
                hello@madrasa.com
              </span>
            </p>

          </div>

          <div className="divider bg-amber-400"></div>


        </div>



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


      </div>
    </div>

  );
};

export default Contact;
