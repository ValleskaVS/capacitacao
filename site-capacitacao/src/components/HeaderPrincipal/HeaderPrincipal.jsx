import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const HeaderPrincipal = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("pt");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleLangChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white dark:bg-gray-900 dark:text-white">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="Logo Capacitação" className="w-8 h-8" />
        <span className="text-xl font-bold">Capacitação</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Bandeiras */}
        <div className="flex gap-2">
          <button onClick={() => handleLangChange("pt")} title="Português">
            <svg width="24" height="16" viewBox="0 0 24 16">
              <rect width="24" height="16" fill="#009B3A" />
              <circle cx="12" cy="8" r="5" fill="#FFDF00" />
              <text x="50%" y="55%" textAnchor="middle" fill="#002776" fontSize="5" fontWeight="bold" dy=".3em">BR</text>
            </svg>
          </button>

          <button onClick={() => handleLangChange("en")} title="English">
            <svg width="24" height="16" viewBox="0 0 24 16">
              <rect width="24" height="16" fill="#00247D" />
              <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFF" strokeWidth="2"/>
              <rect x="9" y="0" width="6" height="16" fill="#FFF"/>
              <rect x="0" y="5" width="24" height="6" fill="#FFF"/>
              <rect x="10" y="0" width="4" height="16" fill="#CF142B"/>
              <rect x="0" y="6" width="24" height="4" fill="#CF142B"/>
            </svg>
          </button>

          <button onClick={() => handleLangChange("es")} title="Español">
            <svg width="24" height="16" viewBox="0 0 24 16">
              <rect width="24" height="16" fill="#AA151B" />
              <rect y="5" width="24" height="6" fill="#F1BF00" />
              <text x="50%" y="55%" textAnchor="middle" fill="#AA151B" fontSize="5" fontWeight="bold" dy=".3em">ES</text>
            </svg>
          </button>
        </div>

        {/* Botão de tema */}
        <button
          onClick={toggleTheme}
          className="ml-2 p-1 rounded-full bg-white text-black dark:bg-gray-700 dark:text-white transition-all"
          title="Modo claro/escuro"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </header>
  );
};

export default HeaderPrincipal;
