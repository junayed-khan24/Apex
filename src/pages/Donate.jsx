import { useTranslation } from "react-i18next";

export default function Donate() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-center space-y-6">
      <h2 className="text-3xl font-bold text-violet-700">{t("donate.title")}</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4 shadow">{t("donate.p1")} aoheiouh</div>
        <div className="card p-4 shadow">{t("donate.p2")} aoheiouh</div>
        <div className="card p-4 shadow">{t("donate.p3")} aoheiouh</div>
      </div>
    </div>
  );
}