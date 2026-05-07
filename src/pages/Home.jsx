import { useTranslation } from "react-i18next";
import Hero from "./Hero";
import Profile from "./Profile";
import SubDonate from "./SubDonate";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className=" ">

      
        <Hero></Hero>   

        <Profile></Profile>

        <SubDonate></SubDonate>

    </div>
  );
}