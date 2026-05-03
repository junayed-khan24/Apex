import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink } from "react-router";
import { FaHome, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const linkClass =
        "px-6 py-3 flex items-center gap-1 transition-all duration-300";

    return (
        <div className="">

            <nav className="bg-[#032216] text-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-6 md:px-20 flex justify-between ">



                    {/* Desktop Menu */}
                    <div className="flex items-between gap-20">
                        <div className="hidden lg:flex items-center">

                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"
                                    }`
                                }
                            >
                                <FaHome /> {t("nav.home")}
                            </NavLink>

                            <NavLink to="/donate" className={({ isActive }) =>
                                `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                            }>
                                {t("nav.donate")}
                            </NavLink>

                            <NavLink to="/mission" className={({ isActive }) =>
                                `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                            }>
                                {t("nav.mission")}
                            </NavLink>

                            <NavLink to="/picture" className={({ isActive }) =>
                                `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                            }>
                                {t("nav.picture")}
                            </NavLink>




                            <NavLink to="/contact" className={({ isActive }) =>
                                `${linkClass} ${isActive ? "bg-yellow-600" : "hover:bg-yellow-600"}`
                            }>
                                {t("nav.contact")}
                            </NavLink>


                          

                        </div>
                        <select
                            className="select select-bordered"
                            value={i18n.language}
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="bn">বাংলা</option>
                            <option value="ar">Arabic</option>
                        </select>
                    </div>


                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-2xl"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden bg-green-900 overflow-hidden transition-all duration-500 ${open ? "max-h-[500px]" : "max-h-0"
                        }`}
                >
                    <NavLink to="/" className="block px-4 py-3 border-b border-green-800">
                        প্রচ্ছদ
                    </NavLink>

                    {/* Mobile Dropdown */}
                    <div>
                        <button
                            onClick={() =>
                                setDropdown(dropdown === "jamia" ? null : "jamia")
                            }
                            className="w-full text-left px-4 py-3 flex justify-between items-center border-b border-green-800"
                        >
                            জামিয়ার পরিচিতি <FaChevronDown />
                        </button>

                        {dropdown === "jamia" && (
                            <div className="bg-green-800">
                                <NavLink to="/about" className="block px-6 py-2">
                                    ইতিহাস
                                </NavLink>
                                <NavLink to="/mission" className="block px-6 py-2">
                                    লক্ষ্য ও উদ্দেশ্য
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/donate" className="block px-4 py-3 border-b border-green-800">
                        অনুদান
                    </NavLink>

                    <NavLink to="/contact" className="block px-4 py-3">
                        যোগাযোগ
                    </NavLink>
                </div>
            </nav>

            

            <div className="hidden md:flex gap-6">
            </div>



        </div>
    );
};

export default Navbar;