import React from "react";
import Logo from '../../src/assets/Hero2.png'

const Header = () => {
  return (
    <header className="bg-[#013622]  text-white">
      <div className="container mx-auto px-6 md:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

          <div className="text-center item-center ">
            <img
              src={Logo}
              alt="Institution Logo"
              className="h-16 object-contain rounded-full  shadow-lg mx-auto"
            />
          </div>



          {/* Left Section */}
          <div className="text-center md:text-left  ">
            <h1 className="text-xl md:text-2xl font-extrabold">
              আলহাজ্ব শেখ গিয়াস উদ্দিন আহমদ নুরানী হাফিজিয়া মাদ্রাসা ও এতিমখানা
            </h1>
            {/* <p className="text-sm opacity-90">
             Sahora,Mymensingh,  Bangladesh
            </p> */}
       

             <h1 className="text-xl md:text-2xl font-bold mt-4">
              Alhaj Sheikh Gias Ahmed Ahmed Hajnurani Hafiria Madrasa and Orphanage
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
  