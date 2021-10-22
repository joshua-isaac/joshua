import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // change theme
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="bg-gray-200 p-2 rounded-lg"
        >
          <FiSun className="text-black text-lg" />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="bg-gray-200 p-2 rounded-lg"
        >
          <FiMoon className="text-black text-lg" />
        </button>
      );
    }
  };

  return (
    <header className="bg-white bg-opacity-60 sticky-nav dark:bg-black dark:bg-opacity-0">
      <div className="flex justify-between items-center py-4 text-sm md:text-base text-gray-900 dark:text-white container px-4">
        <nav>
          <ul className="flex space-x-4 text-base items-center">
            <li>
              <Link href="/#work">
                <a title="Work">work</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a title="Blog">blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a title="About">about</a>
              </Link>
            </li>
            <li>
              <a href="mailto:hello.joshua@hotmail.com" title="Contact">
                contact
              </a>
            </li>
            <li>
              <Link href="/">
                <a title="Home">home</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>{renderThemeChanger()}</div>
      </div>
    </header>
  );
};

export default Header;
