import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark = theme === "dark";

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <button
      className="absolute bg-white shadow-lg rounded-full bottom-5 right-5 w-10 h-10"
      onClick={handleClick}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}
