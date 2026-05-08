import { useTranslation } from "react-i18next";
import React from "react";
import { FaMosque, FaDonate, FaHandsHelping } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

import group from "../../src/assets/group3.png";
import donation from "../../src/assets/donate.jpg";
import { Link } from "react-router-dom"; // ✅ FIX

const Donate = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-base-100 container mx-auto  px-6 md:px-20">

      {/* ===== Bank Account Section ===== */}
      <section className="mt-8 mb-12 ">

        <div className="flex items-center gap-2 mb-6">
          <FaMosque className="text-4xl text-[#013622]" />
          <h1 className="text-xl md:text-4xl font-bold text-[#013622]">
            {t("donate.title")} 
          </h1>
        </div>

        {/* Card */}
        <div className="bg-base-200 rounded-2xl p-6 md:p-10 shadow-md hover:shadow-lg transition">

          <p className="text-lg font-semibold text-gray-700 mb-2">
            🏦 {t("donate.p9")}
          </p>
          <p className="text-xl font-bold text-[#013622]">
            0100289611341
          </p>
          <p className="text-gray-600 mb-4">
            {t("donate.p10")}
          </p>

          <p className="text-lg font-semibold text-gray-700 mb-2">
            📱 bKash:
          </p>
          <p className="text-xl font-bold text-[#013622]">
            +880 01711-625344
          </p>

        </div>

      </section>

      {/* ===== Hero Section ===== */}
      <section className="py-6 md:py-12 grid md:grid-cols-2 gap-10 items-center">

        <div data-aos="fade-right" className="order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#013622]">
            {t("donate.title1")}
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {t("donate.des1")}
          </p>

          <Link to="/contact">
            <button className="btn flex items-center py-2 bg-[#013622] text-white px-6 hover:bg-yellow-600 transition-all duration-300 mt-6">
              <FaDonate className="mr-2" size={20} />
              <span>{t("donate.btn") || "Donate Now"}</span>
            </button>
          </Link>
        </div>

        <div data-aos="fade-left" className="order-1 md:order-2 overflow-hidden">
          <img
            src={group}
            alt="donation"
            className="rounded-2xl shadow-lg w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

      </section>

      {/* ===== Why Donate Section ===== */}
      <section className="bg-base-200 py-12 md:py-16 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div data-aos="fade-right">
            <img
              src={donation}
              alt="help"
              className="rounded-2xl shadow-lg w-full h-[300px] md:h-[350px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-2 text-[#013622]">
              <FaHandsHelping /> {t("donate.title2")}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              {t("donate.des2")}
            </p>

              <p className="text-gray-600 leading-relaxed">
          {t("donate.p8")}

              </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Donate;