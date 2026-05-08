import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const linkClass =
    "px-6 py-3 flex items-center gap-1 transition-all duration-300";

  return (
    <div className="">
      <nav className="bg-[#032216] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-20 flex justify-between items-center">

          {/* Desktop Menu */}
          <div className="flex items-center gap-20">
            <div className="hidden lg:flex items-center justify-between">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                }
              >
                <FaHome /> {t("nav.home")}
              </NavLink>

              <NavLink
                to="/donate"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                }
              >
                {t("nav.donate")}
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                }
              >
                {t("nav.about")}
              </NavLink>

              <NavLink
                to="/picture"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                }
              >
                {t("nav.picture")}
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                }
              >
                {t("nav.contact")}
              </NavLink>

            </div>

            {/* Language */}
            <div className="p-2 rounded-lg bg-[#032216] text-right">
              <select
                className="select select-bordered text-left p-1 bg-[#032216] text-white border-[#032216] focus:ring-0 focus:border-[#032216] hover:bg-yellow-600 transition-colors duration-300"
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
                <option value="ar">Arabic</option>
              </select>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl py-4"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div>
          <div
            className={`lg:hidden bg-[#013622] overflow-hidden transition-all duration-500 ${
              open ? "max-h-[500px]" : "max-h-0"
            }`}
          >

            <NavLink
              to="/"
              onClick={() => setOpen(false)} // ✅ AUTO CLOSE
              className="block px-4 py-3 border-b border-[#032216] hover:bg-yellow-600 transition-all duration-300"
            >
              {t("nav.home")}
            </NavLink>

            <NavLink
              to="/donate"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 border-b border-[#032216] hover:bg-yellow-600 transition-all duration-300"
            >
              {t("nav.donate")}
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 border-b border-[#032216] hover:bg-yellow-600 transition-all duration-300"
            >
              {t("nav.about")}
            </NavLink>

            <NavLink
              to="/picture"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 border-b border-[#032216] hover:bg-yellow-600 transition-all duration-300"
            >
              {t("nav.picture")}
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 border-b border-[#032216] hover:bg-yellow-600 transition-all duration-300"
            >
              {t("nav.contact")}
            </NavLink>

          </div>
        </div>
      </nav>

      <div className="hidden md:flex gap-6"></div>
    </div>
  );
};

export default Navbar;