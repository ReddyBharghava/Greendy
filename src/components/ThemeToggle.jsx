// import { useEffect, useState } from "react";
// import { FiMoon, FiSun } from "react-icons/fi";

// const getInitialTheme = () => {
//   const savedTheme = localStorage.getItem("greendy-theme");
//   if (savedTheme) return savedTheme;
//   return window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";
// };

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState(getInitialTheme);
//   const isDark = theme === "dark";

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDark);
//     document.documentElement.dataset.theme = theme;
//     localStorage.setItem("greendy-theme", theme);
//   }, [isDark, theme]);

//   return (
//     <button
//       type="button"
//       onClick={() => setTheme(isDark ? "light" : "dark")}
//       className="relative justify-end-safe h-10 w-[4.5rem] shrink-0 items-center rounded-full border border-slate-200 bg-slate-100 p-1 text-slate-700 shadow-sm transition hover:ring-2 hover:ring-emerald-400/50 dark:border-slate-700 dark:bg-slate-800 dark:text-amber-300"
//       aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
//       aria-pressed={isDark}
//     >
//       <span className="sr-only">Toggle colour theme</span>
//       <FiSun className="absolute left-2.5 h-4 w-4" aria-hidden="true" />
//       <FiMoon className="absolute right-2.5 h-4 w-4" aria-hidden="true" />
//       <span
//         className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-600 shadow transition-transform duration-300 dark:bg-slate-950 ${
//           isDark ? "translate-x-8" : "translate-x-0"
//         }`}
//       >
//         {isDark ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
//       </span>
//     </button>
//   );
// }

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("greendy-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.dataset.theme = theme;

    localStorage.setItem("greendy-theme", theme);
  }, [theme, isDark]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        relative
        flex
        items-center
        justify-between
        h-10
        w-[4.5rem]
        sm:h-11
        sm:w-[4.75rem]
        shrink-0
        rounded-full
        border
        border-slate-200
        bg-slate-100
        p-1
        text-slate-700
        shadow-sm
        transition-all
        duration-300
        hover:ring-2
        hover:ring-emerald-400/50
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-500
        dark:border-slate-700
        dark:bg-slate-800
        dark:text-amber-300
      "
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
    >
      <span className="sr-only">Toggle colour theme</span>

      {/* Sun Icon */}
      <FiSun
        className="absolute left-2.5 h-4 w-4"
        aria-hidden="true"
      />

      {/* Moon Icon */}
      <FiMoon
        className="absolute right-2.5 h-4 w-4"
        aria-hidden="true"
      />

      {/* Sliding Toggle */}
      <span
        className={`
          relative
          z-10
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white
          text-emerald-600
          shadow
          transition-transform
          duration-300
          dark:bg-slate-950
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {isDark ? (
          <FiMoon aria-hidden="true" />
        ) : (
          <FiSun aria-hidden="true" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
