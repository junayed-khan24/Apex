import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMailUnreadFill } from "react-icons/ri";
import NetrokonaMap from "./NetrokonaMap";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";



  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-base-200">

      {/* Contact Cards */}
      <div className="container mx-auto px-6 md:px-20 py-6 md:py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Call */}
          <div
            data-aos="fade-up"
            className={`bg-base-100 shadow-lg rounded-2xl p-6 flex items-center gap-4 ${
              isArabic ? "flex-row-reverse text-right" : ""
            }`}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#013622] text-white hover:bg-yellow-600 transition">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{t("contact.p1") || "Call Us"}</h3>
              <p className="text-base">+880 01711-625344</p>
            </div>
          </div>

          {/* Email */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={`bg-base-100 shadow-lg rounded-2xl p-6 flex items-center gap-4 ${
              isArabic ? "flex-row-reverse text-right" : ""
            }`}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#013622] text-white hover:bg-yellow-600 transition">
              <RiMailUnreadFill className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{t("contact.p2") || "Email Us"}</h3>
              <p className="text-base">hello@madrasa.com</p>
            </div>
          </div>

          {/* Address */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className={`bg-base-100 shadow-lg rounded-2xl p-6 flex items-center gap-4 ${
              isArabic ? "flex-row-reverse text-right" : ""
            }`}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#013622] text-white hover:bg-yellow-600 transition">
              <FaLocationDot className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{t("contact.p3") || "Address"}</h3>
              <p className="text-base">
                Netrokona, Bangladesh
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="px-6 md:px-20 pb-10">
        <NetrokonaMap />
      </div>

    </div>
  );
};

export default Contact;