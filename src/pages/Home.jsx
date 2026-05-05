import { useTranslation } from "react-i18next";
import Hero from "./Hero";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className=" ">

      
        <Hero></Hero>   
       

    </div>
  );
}