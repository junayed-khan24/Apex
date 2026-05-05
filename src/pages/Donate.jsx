import { useTranslation } from "react-i18next";
import React from "react";
import { FaMosque, FaDonate, FaHandsHelping } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

import group from "../../src/assets/group3.png"
import construction from "../../src/assets/construction.png"
import donation from "../../src/assets/donate.jpg"
import { Link } from "react-router";

const Donate = () => {
  
   const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-base-100 container mx-auto px-6 md:px-20  py-10">

      {/* ===== Hero Section ===== */}
      <section className=" py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div data-aos="fade-right " className="order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-6  text-[#013622] ">
            {t("donate.title1")}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t("donate.des1")}
          </p>
        

           <Link to="/contact">
            <button className="btn flex items-center py-2 bg-[#013622] text-white px-6 hover:bg-yellow-600 transition-all duration-300 mt-12" >
               <FaDonate className="mr-2" size={24} /> <p>এখনই দান করুন</p>
            </button>
           </Link>
        </div>

        <div data-aos="fade-left" className="order-1 md:order-2 overflow-hidden shadow-lg">
          <img
            src={group}
            alt="donation"
            className="rounded-2xl shadow-lg w-full h-[350px] md:h-[450px] object-cover  flex-shrink-0 hover:scale-105 transition duration-700"
          />
        </div>

      </section>

      {/* ===== Why Donate Section ===== */}
      <section className="bg-base-200 py-16">
        <div className="  grid md:grid-cols-2 gap-10 items-center">
          
          <div data-aos="fade-right" className="bg-white  rounded-lg overflow-hidden">
            <img
              src={donation}
              alt="help"
              className="rounded-2xl shadow-lg w-full h-[350px] object-cover flex-shrink-0 hover:scale-105 transition duration-700"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-5 flex items-center gap-2 text-[#013622]">
              <FaHandsHelping /> {t("donate.title2")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
             {t("donate.des2")}
            </p>

            <br />
            <p className="text-gray-600 leading-relaxed ">
              একটি ছোট দান একজন ছাত্রের শিক্ষা নিশ্চিত করতে পারে। 
              আপনি আজ সাহায্য করলে, আগামীকাল তারা সমাজের সম্পদ হয়ে উঠবে।
            </p>
            <p className="text-gray-600">
              আসুন, আমরা সবাই মিলে এই মানবিক কাজে অংশগ্রহণ করি।
            </p>
          </div>

        </div>
      </section>

      {/* ===== Construction Section ===== */}
      <section className="py-12 md:py-16 ">
        <div className=" grid md:grid-cols-2 gap-10 items-center *:**:shadow font-bold">

          <div data-aos="fade-right" className="bg-white p-6 rounded-lg shadow order-2 md:order-1 h-full md:h-[430px]">
            <h2 className="text-3xl font-bold mb-5 flex items-center gap-2 text-[#013622]">
              <FaMosque /> {t("donate.title3")}
            </h2>

            <p className="text-gray-600 mb-4">
              {t("donate.des3")}
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>📌 {t("donate.p1")}</li>
              <li>📌 {t("donate.p2")}</li>
              <li>📌 {t("donate.p3")}</li>
              <li>📌 {t("donate.p4")}</li>
              <li>📌 {t("donate.p5")}</li>
              <li>📌 {t("donate.p6")}</li>
              <li>📌 {t("donate.p7")}</li>
            </ul>

           {/* <Link to="/contact">
            <button className="btn flex items-center py-2 bg-[#013622] text-white px-6 hover:bg-yellow-600 transition-all duration-300 mt-12" >
              <GiReceiveMoney className="mr-2"  size={24}/> <p>নির্মাণে দান করুন</p>
            </button>
           </Link> */}
          </div>

          <div data-aos="fade-left" className="order-1 md:order-2 overflow-hidden shadow-lg">
            <img
              src={construction}
              alt="construction"
              className="rounded-2xl shadow-lg w-full h-[350px] md:h-[430px] object-cover  flex-shrink-0 hover:scale-105 transition duration-700"
            />
          </div>

        </div>
      </section>

     

      
    </div>
  );
};

export default Donate;