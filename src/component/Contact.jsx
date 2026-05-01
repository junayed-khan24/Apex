import React, { useEffect } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-base-100 py-16 px-4 md:px-10">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-sm tracking-widest text-primary uppercase">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
          Contact
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Emergency */}
        <div
          data-aos="zoom-in"
          className="bg-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
        >
          <div className="text-3xl text-blue-600 mb-4 flex justify-center">
            <FaPhoneAlt />
          </div>
          <h3 className="font-semibold text-lg mb-2">Emergency</h3>
          <p className="text-sm text-gray-600">(237) 681-812-255</p>
          <p className="text-sm text-gray-600">(237) 666-331-894</p>
        </div>

        {/* Location */}
        <div
          data-aos="zoom-in"
          className="bg-blue-900 text-white rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
        >
          <div className="text-3xl mb-4 flex justify-center">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-sm">0123 Some place</p>
          <p className="text-sm">9876 Some country</p>
        </div>

        {/* Email */}
        <div
          data-aos="zoom-in"
          className="bg-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
        >
          <div className="text-3xl text-blue-600 mb-4 flex justify-center">
            <FaEnvelope />
          </div>
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-sm text-gray-600">info@email.com</p>
          <p className="text-sm text-gray-600">support@email.com</p>
        </div>

        {/* Working Hours */}
        <div
          data-aos="zoom-in"
          className="bg-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
        >
          <div className="text-3xl text-blue-600 mb-4 flex justify-center">
            <FaClock />
          </div>
          <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
          <p className="text-sm text-gray-600">
            Mon-Sat: 09:00–20:00
          </p>
          <p className="text-sm text-gray-600">
            Sunday Emergency only
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;