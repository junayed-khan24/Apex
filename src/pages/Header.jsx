import React from "react";
import Logo from '../../src/assets/logo.png'
import { useTranslation } from "react-i18next";

const Header = () => {

    const { t } = useTranslation();
  

  return (
    <header className="bg-[#013622]  text-white">
      <div className="container mx-auto px-6 md:px-20 md:py-12 py-6 ">
        <div className="flex flex-col md:flex-row items-center gap-8 ">

          <div className="text-center item-center  ">
            <img
              src={Logo}
              alt="Institution Logo"
              className="h-20 md:h-32 w-full object-contain rounded-full  shadow-lg mx-auto"
            />
          </div>



          {/* Left Section */}
          <div className="text-center "> 
            <p className="text-xl font-bold mb-2">
              {t("header.p")}
            </p>
            <h1 className="text-xl lg:text-5xl md:text-3xl sm:text-2xl font-bold capitalize">
              {t("header.title")}
            </h1>

              <h1 className="text-xl md:text-2xl font-bold mt-4 md:hidden block">
              {t("header.title2")}
            </h1>

            <p className="text-sm md:text-xl opacity-90 mt-1">
              {t("header.p1")}   {t("header.p3")}
            </p>


          
             <p className="text-sm  md:text-xl opacity-90 mt-1">
              {t("header.p2")}
            </p>
          </div>



        </div>
      </div>
    </header>
  );
};

export default Header;
