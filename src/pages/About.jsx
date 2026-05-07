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
    <div className="bg-gray-100  px-2 md:px-20 py-4 md:py-8">

        <div className="container mx-auto px-6 md:px-20 bg-white p-6 rounded-lg shadow-md">

            {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-lg md:text-xl font-semibold border-b pb-2 mb-4"
        >
          গিয়াস উদ্দিন আহমদ হাফিজিয়া মাদ্রাসা সংক্ষিপ্ত পরিচিতি
        </h2>

     <div className="max-w-6xl mx-auto bg-white  p-4 md:p-6 grid grid-cols-1 md:grid-cols-1 gap-10">

        {/* Image */}
        <div
          data-aos="zoom-in"
          className=" rounded-lg overflow-hidden"
        >
          <img
            src={madrasaImg}
            alt="madrasa"
            className="w-[600px]  h-[400px]: rounded-md hover:scale-110 transition duration-300 object-cover"
          />
        </div>

        {/* Description */}
        <div
          data-aos="fade-up"
          className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4"
        >
          <p>
            এই প্রতিষ্ঠানে শিক্ষার্থীদের জন্য কুরআন হিফজ, নুরানী কায়দা, তাজবিদ এবং ইসলামের মৌলিক শিক্ষাগুলো সুশৃঙ্খল ও যত্নশীল পদ্ধতিতে পাঠদান করা হয়। শিক্ষার পাশাপাশি তাদের চরিত্র গঠন, শৃঙ্খলা, নৈতিকতা এবং মানবিক গুণাবলীর বিকাশে বিশেষ গুরুত্ব দেওয়া হয়, যাতে তারা ভবিষ্যতে সমাজে একজন দায়িত্বশীল, সৎ ও পরহেজগার ব্যক্তি হিসেবে প্রতিষ্ঠিত হতে পারে।
          </p>

          <p>এতিম ও অসহায় শিশুদের জন্য মাদ্রাসাটিতে নিরাপদ আবাসন ও খাদ্যের সুব্যবস্থা রয়েছে। স্নেহ-মমতা ও সুশৃঙ্খল পরিবেশে তাদের লালন-পালন করা হয়, যেখানে তারা একজন আদর্শ মুসলিম হিসেবে গড়ে ওঠার সুযোগ পায়। দক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলীর নিবিড় তত্ত্বাবধানে শিক্ষার্থীরা নিয়মিত পাঠ গ্রহণ করে এবং দ্বীনের সঠিক জ্ঞান অর্জনে অগ্রসর হয়।
          </p>

          <p>
            সমাজসেবামূলক কার্যক্রমের অংশ হিসেবে প্রতিষ্ঠানটি দীর্ঘদিন ধরে নিষ্ঠার সাথে কাজ করে যাচ্ছে। ভবিষ্যৎ প্রজন্মকে ইসলামের সুমহান আদর্শে গড়ে তোলা এবং সমাজে ইতিবাচক পরিবর্তন আনার ক্ষেত্রে এই মাদ্রাসা গুরুত্বপূর্ণ ভূমিকা রেখে চলেছে।
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