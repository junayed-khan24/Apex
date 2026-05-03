
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-3xl font-bold">{t("contact.title")}</h2>

      <input className="input input-bordered w-full" placeholder={t("contact.name")} />
      <input className="input input-bordered w-full" placeholder={t("contact.email")} />
      <textarea className="textarea textarea-bordered w-full" placeholder={t("contact.message")} />

      <button className="btn btn-primary">
        {t("contact.send")}
      </button>
    </div>
  );
}