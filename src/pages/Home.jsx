import { useTranslation } from "react-i18next";
import Hero from "./Hero";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className=" ">

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bourder-2 ">
        <Hero></Hero>   <p className="">{t("home.desc")}</p>   
       </div>
       

    </div>
  );
}