import { useTranslation } from "react-i18next";
import Hero from "./Hero";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className=" flex flex-col items-center gap-6 p-6 text-center">

       
      <Hero></Hero>   <p className="w-6/12 h-full">{t("home.desc")}</p>    

    </div>
  );
}