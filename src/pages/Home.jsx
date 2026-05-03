import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-center space-y-6">
      <h1 className="text-4xl font-bold">{t("home.title")}</h1>
      <p>{t("home.desc")}</p>

      <button className="btn btn-primary">
        {t("home.donateBtn")}
      </button>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card shadow p-4">{t("home.education")}</div>
        <div className="card shadow p-4">{t("home.food")}</div>
        <div className="card shadow p-4">{t("home.shelter")}</div>
      </div>
    </div>
  );
}