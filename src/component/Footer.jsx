import React, { useEffect } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaPaperPlane } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";


const Footer = () => {
     useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <footer className="bg-[#1F2B6C] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div data-aos="fade-up" className="col-span-1">
          <h2 className="text-2xl font-bold mb-3 tracking-wide">
            MEDDICAL
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        {/* Important Links */}
        <div data-aos="fade-up" className="col-span-1">
          <h3 className="font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Appointment</li>
            <li className="hover:text-white cursor-pointer">Doctors</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" className="col-span-1">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">Call: (237) 681-812-255</p>
          <p className="text-sm text-gray-300">
            Email: info@email.com
          </p>
          <p className="text-sm text-gray-300">
            Address: 0123 Some place <br />
            Some country
          </p>
        </div>

        {/* Newsletter */}
        <div data-aos="fade-up" className="col-span-1">
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 text-sm text-black outline-none"
            />
            <button className="bg-gray-200 px-3 py-2 hover:bg-gray-300 transition">
              <FaPaperPlane className="text-black" />
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 my-8"></div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <p>© 2021 Hospital’s name All Rights Reserved</p>

        <div className="flex gap-3">
          <span className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#2c3472] cursor-pointer">
            <FaLinkedinIn />
          </span>
          <span className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#2c3472] cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#2c3472] cursor-pointer">
            <FaInstagram />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;