import React from "react";
import Logo from "../../src/assets/logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <header className="bg-[#013622] text-white">
      <div className="container mx-auto px-6 md:px-20 py-6 md:py-10">

        <div
          className={`flex items-center gap-4 md:gap-8 ${
            isArabic ? "flex-row-reverse text-right" : "flex-row text-left "
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Institution Logo"
              className="h-20 md:h-32 w-20 md:w-32 object-contain rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1">

            {/* Bismillah */}
            <p className="text-lg md:text-xl font-semibold mb-2">
              {t("header.p")}
            </p>

            {/* Desktop Title */}
            <h1 className="hidden md:block text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t("header.title")}
            </h1>

            {/* Mobile Title */}
            <h1 className="block md:hidden text-lg font-bold mt-2 leading-snug">
              {t("header.title2")}
            </h1>

            {/* Address */}
            <p className="text-sm md:text-lg opacity-90 mt-2">
              {t("header.p1")}
            </p>

            {/* Bank + Bkash */}
            <p className="text-sm md:text-lg opacity-90 mt-1">
              {t("header.p2")}
            </p>
            <p className="text-sm md:text-lg opacity-90 mt-1">
              {t("header.p3")}
            </p>

          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;