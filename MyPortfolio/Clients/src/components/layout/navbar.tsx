import { useEffect, useState } from "react";
import NavItem from "../Common/NavItem";

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved !== "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="mt-6">
      <div
        className="
          mx-auto max-w-6xl px-8 py-4 rounded-full shadow-lg
          flex justify-between items-center
          bg-white text-gray-900
          dark:bg-gray-800 dark:text-white
        "
      >
        <h1 className="font-bold text-xl tracking-wide">My Portfolio</h1>

        <div className="flex items-center space-x-6 text-sm font-medium">
          <NavItem to="/Home" label="Home" />
          <NavItem to="/About" label="About" />
          <NavItem to="/Experience" label="Experience" />
          <NavItem to="/TechStack" label="Tech Stack" />

          <button
            onClick={() => setDark((prev) => !prev)}
            className="
              px-3 py-1.5 rounded-full text-xs font-semibold
              bg-gray-200 text-gray-800
              dark:bg-gray-700 dark:text-white
              hover:opacity-80 transition
            "
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
