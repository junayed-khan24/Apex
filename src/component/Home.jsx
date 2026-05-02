import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="mt-4">
                    <LanguageSwitcher></LanguageSwitcher>
                </div>
                <div>
                    <h1>{t("home")}</h1>
                    <p>{t("welcome")}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;