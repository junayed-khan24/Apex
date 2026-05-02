import i18n from "i18next";
import { useState } from "react";

const languages = [
  {
    code: "bn",
    name: "বাংলা",
    flag: "🇧🇩",
  },
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
  {
    code: "ar",
    name: "Arabic",
    flag: "🇸🇦",
  },
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-base-200 rounded-lg shadow hover:bg-base-300"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <span>▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;