import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import img from "../../src/assets/profile.jfif";
import img2 from "../../src/assets/arif.jpeg";
import img3 from "../../src/assets/mustafiz.jpeg";
import img4 from "../../src/assets/nurul.jpeg";

const Profile = () => {
  const { t } = useTranslation();

  const member = [
    { id: 1, name: t("profile.title1"), role: t("profile.p1"), img: img },
    { id: 3, name: t("profile.title3"), role: t("profile.p3"), img: img2 },
    { id: 4, name: t("profile.title4"), role: t("profile.p4"), img: img3 },
    { id: 5, name: t("profile.title5"), role: t("profile.p5"), img: img4 },

  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white py-6 md:py-12">
      <div className="container mx-auto px-6 md:px-20 bg-white">

          {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-xl md:text-3xl text-[#013622]  font-extrabold  "
        >
          {t("profile.title")}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 py-4 md:py-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          
          {member.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="group bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-200 hover:border-[#013622] rounded-xl p-6 text-center hover:bg-[#013622]"
            >

              {/* Image */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-300">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-white transition">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 group-hover:text-gray-200 transition">
                {item.role}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Profile;