import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

// 🔥 images import (important: direct import use korba)
import madrasa from "../../src/assets/hero.png";
import madrasa2 from "../../src/assets/hero.png";
import hero from "../../src/assets/hero.png";
import madrasa1 from "../../src/assets/hero.png";
import group1 from "../../src/assets/hero.png";
import pond2 from "../../src/assets/hero.png";
import group2 from "../../src/assets/hero.png";
import maktab from "../../src/assets/hero.png";
import pond from "../../src/assets/Hero3.png";

const Photos = () => {
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // 🔥 i18n + images combine
  const photos = [
    { id: 1, img: madrasa, title: t("picture.picture1") },
    { id: 2, img: madrasa2, title: t("picture.picture2") },
    { id: 3, img: hero, title: t("picture.picture3") },
    { id: 4, img: madrasa1, title: t("picture.picture4") },
    { id: 5, img: group1, title: t("picture.picture6") },
    { id: 6, img: pond2, title: t("picture.picture5") },
    { id: 7, img: group2, title: "ক্লাস রুম" },
    { id: 8, img: maktab, title: "মক্তব ক্লাস" },
    { id: 9, img: pond, title: t("picture.picture5") },
  ];

  return (
   <div className="py-12 container mx-auto px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        আমাদের গ্যালারি
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            data-aos="zoom-in"
            className="bg-white shadow-md overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImg(photo)}
          >
            <img
              src={photo.img}
              alt={photo.title}
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-3 text-center">
              <p className="font-medium text-gray-700">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full px-4">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 btn btn-circle btn-sm"
            >
              ✕
            </button>
            <img
              src={selectedImg.img}
              alt=""
              className="w-full rounded-xl"
            />
            <p className="text-center text-white mt-3">
              {selectedImg.title}
            </p>
          </div>
        </div>
      )}


     
    </div>
  );
};

export default Photos;