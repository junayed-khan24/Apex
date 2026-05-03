import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold">{t("mission.title")}</h2>
      <p>{t("mission.desc")}</p>
    </div>
  );
}