import { useTranslation } from "react-i18next";

export default function Picture() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold">{t("picture.title")}</h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <img src="https://i.ibb.co/3r4Y6sF/orphan.jpg" />
        <img src="https://i.ibb.co/3r4Y6sF/orphan.jpg" />
        <img src="https://i.ibb.co/3r4Y6sF/orphan.jpg" />
      </div>
    </div>
  );
}