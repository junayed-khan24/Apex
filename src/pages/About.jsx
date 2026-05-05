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
    <div className="bg-gray-100 py-10 px-4">

        <div className="container mx-auto px-6 md:px-20 bg-white p-6 rounded-lg shadow-md">

            {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-lg md:text-xl font-semibold border-b pb-2 mb-4"
        >
          গিয়াস উদ্দিন আহমদ হাফিজিয়া মাদ্রাসা সংক্ষিপ্ত পরিচিতি
        </h2>

     <div className="max-w-6xl mx-auto bg-white  p-4 md:p-6 flex flex-col lg:flex-row gap-10">

        {/* Image */}
        <div
          data-aos="zoom-in"
          className=" rounded-lg overflow-hidden"
        >
          <img
            src={madrasaImg}
            alt="madrasa"
            className="w-full  h-auto rounded-md hover:scale-110 transition duration-300 object-cover"
          />
        </div>

        {/* Description */}
        <div
          data-aos="fade-up"
          className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4"
        >
          <p>
            দারুল উলূম হাফিজিয়া মাদ্রাসা একটি সুপ্রতিষ্ঠিত ইসলামী শিক্ষা প্রতিষ্ঠান।
            এটি ধর্মীয় শিক্ষার পাশাপাশি আধুনিক শিক্ষার সমন্বয়ে পরিচালিত হয়।
            এখানে শিক্ষার্থীদের কুরআন, হাদিস, ফিকহসহ বিভিন্ন বিষয়ে শিক্ষা প্রদান করা হয়।
          </p>

          <p>
            মাদ্রাসাটিতে অভিজ্ঞ শিক্ষকমণ্ডলী দ্বারা পাঠদান পরিচালিত হয় এবং
            শিক্ষার্থীদের নৈতিকতা ও আদর্শ গঠনে বিশেষ গুরুত্ব দেওয়া হয়।
            পাশাপাশি সহশিক্ষা কার্যক্রমের মাধ্যমে তাদের মানসিক বিকাশ নিশ্চিত করা হয়।
          </p>

          <p>
            এখানে আবাসিক ও অনাবাসিক উভয় ধরনের শিক্ষার্থীদের জন্য সুব্যবস্থা রয়েছে।
            মাদ্রাসার পরিবেশ শান্ত, মনোরম ও শিক্ষার জন্য উপযোগী।
          </p>
        </div>
      </div>

      <div className="p-6 text-center">
      <h2 className="text-3xl font-bold">{t("about.title")}</h2>
      <p>{t("about.desc")}</p>
    </div>

           <div className="max-w-6xl mx-auto bg-white  p-4 md:p-6 mt-4">

        {/* ===== Top Content ===== */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">

           {/*Image */}
          <div data-aos="fade-left" className="block md:hidden overflow-hidden" >
            <img
              src={img}
              alt="health"
              className=" shadow-lg   h-auto rounded-md hover:scale-110 transition duration-300 object-cover"
            />
          </div>

          {/* Left Text */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              The Future <br />
              of <span className="text-primary">Quality Health</span>
            </h2>

           <p className="text-gray-600 mb-4">
  We are committed to delivering modern and high-quality healthcare services
  that prioritize patient comfort, safety, and faster recovery. Our experienced
  medical team uses advanced technology to ensure accurate diagnosis and
  effective treatment for every individual.
</p>

<p className="text-gray-600 mb-4">
  From routine checkups to specialized care, we focus on personalized health
  solutions that meet your unique needs. Our goal is to create a trusted
  environment where patients feel supported, informed, and confident about
  their treatment journey.
</p>

<p className="text-gray-600 mb-6">
  Discover the future of healthcare with compassionate service, innovative
  methods, and a commitment to improving lives every single day.
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