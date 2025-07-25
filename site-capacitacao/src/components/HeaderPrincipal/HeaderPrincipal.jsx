import React, { useState } from "react";
import "./header.css";
import { Moon, Sun } from "lucide-react";
import brFlag from "../../assets/br.png";
import usFlag from "../../assets/us.png";
import esFlag from "../../assets/es.png";

const HeaderPrincipal = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("pt");

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const handleLangChange = (langCode) => {
    setLang(langCode);
    
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-blue-900 dark:bg-gray-900 text-white">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold">✔ CAPACITAÇÃO</span>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={brFlag}
          alt="Português"
          className="w-6 h-6 cursor-pointer"
          onClick={() => handleLangChange("pt")}
        />
        <img
          src={usFlag}
          alt="English"
          className="w-6 h-6 cursor-pointer"
          onClick={() => handleLangChange("en")}
        />
        <img
          src={esFlag}
          alt="Español"
          className="w-6 h-6 cursor-pointer"
          onClick={() => handleLangChange("es")}
        />

        <button onClick={toggleTheme} className="ml-2">
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </header>
  );
};

export default HeaderPrincipal;
