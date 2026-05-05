import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../src/assets/logo.png";

const teamData = [
  {
    id: 1,
    name: "আব্দুল্লাহ আল মামুন",
    role: "সভাপতি",
    img: img,
  },
  {
    id: 2,
    name: "আব্দুল কাইয়ুম",
    role: "মুহতামিম / প্রিন্সিপাল",
    img: img,
  },
  {
    id: 3,
    name: "মাওলানা আনোয়ারুল হক",
    role: "শিক্ষা সচিব",
    img: img,
  },
  {
    id: 4,
    name: "মাওলানা মাকসুদুল হক",
    role: "সহকারী শিক্ষক",
    img: img,
  },
];

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              data-aos="zoom-in"
              className="group bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-200 hover:border-[#013622] rounded-xl p-6 text-center hover:bg-[#013622]"
            >

              {/* Image */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-white transition">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 group-hover:text-gray-200 transition">
                {member.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Profile;