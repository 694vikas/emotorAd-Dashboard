import React, { useState } from "react";

const ThemeSettings = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Theme Settings</h2>
      <div className="space-x-4">
        <button
          onClick={() => handleThemeChange("light")}
          className={`px-4 py-2 rounded-lg ${
            theme === "light" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => handleThemeChange("dark")}
          className={`px-4 py-2 rounded-lg ${
            theme === "dark" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Dark
        </button>
      </div>
    </div>
  );
};

export default ThemeSettings;
