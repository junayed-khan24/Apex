import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  // RTL support
  if (i18n.language === "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button className="px-3 py-2 rounded-lg bg-[#032216] text-white font-semibold hover:bg-yellow-600 transition flex items-center gap-2">
        {currentLang.flag} LG
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border z-50 overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 transition ${
                i18n.language === lang.code ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;