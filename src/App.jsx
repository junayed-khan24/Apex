import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Mission from "./pages/Mission";
import Picture from "./pages/Picture";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./component/Navbar";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/picture" element={<Picture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;