import Aos from 'aos';
import React from 'react';
import { useTranslation } from 'react-i18next';
import construction from "../../src/assets/construction.png"
import { FaMosque } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { Link } from 'react-router';


const SubDonate = () => {

   const { t } = useTranslation();

  React.useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

    return (
        <div className="bg-base-100 container mx-auto px-6 md:px-20 ">
            {/* ===== Construction Section ===== */}
      <section className="py-12 md:py-16 ">
        <div className=" grid md:grid-cols-2 gap-10 items-center *:**:shadow font-bold">

          <div data-aos="fade-right" className="bg-white group hover:bg-amber-50 p-6 rounded-lg shadow order-2 md:order-1 h-full md:h-[430px]">
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

           <Link to="/contact">
            <button className="btn flex items-center py-2 bg-[#013622] text-white px-6 hover:bg-yellow-600 transition-all duration-300 mt-6" >
              <GiReceiveMoney className="mr-2"  size={24}/> <p>নির্মাণে দান করুন</p>
            </button>
           </Link>
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

export default SubDonate;