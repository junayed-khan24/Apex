import React from "react";
import Logo from '../../src/assets/logo.png'

const Header = () => {
  return (
    <header className="bg-[#013622]  text-white">
      <div className="container mx-auto px-6 md:px-20 py-12  ">
        <div className="flex flex-col md:flex-row items-center gap-8 ">

          <div className="text-center item-center  ">
            <img
              src={Logo}
              alt="Institution Logo"
              className=" h-32 w-full object-contain rounded-full  shadow-lg mx-auto"
            />
          </div>



          {/* Left Section */}
          <div className="text-center "> 
            <p className="text-xl font-bold mb-2">
              بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
            <h1 className="text-xl lg:text-5xl md:text-3xl sm:text-2xl font-bold capitalize">
              {/* Al Ghiyas Madrasa and Orphanage */}
              {/* Al-Ghiyas Madrasa and Orphanage */}
              {/* আল-গিয়াস মাদ্রাসা ও এতিমখানা */}
              مَدْرَسَةُ وَدَارُ أَيْتَامِ الحَاجِّ الشَّيْخِ غِيَاثِ أَحْمَدَ أَحْمَدَ نُورَانِي حَافِظِيَّة
            </h1>
            <p className="text-sm md:text-base opacity-90 mt-2">
              Sahora,Mymensingh,  Bangladesh
            </p>


            <h1 className="text-xl md:text-2xl font-bold mt-4">
              আলহাজ্ব শেখ গিয়াস উদ্দিন আহমদ নুরানী হাফিজিয়া মাদ্রাসা ও এতিমখানা
            </h1>
            {/* <p className="text-sm">
                সেহড়া, ময়মনসিংহ, বাংলাদেশ
            </p> */}
          </div>



        </div>
      </div>
    </header>
  );
};

export default Header;
