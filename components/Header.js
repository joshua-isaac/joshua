import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <button onClick={() => setTheme("light")}>lights on</button>;
    } else {
      return <button onClick={() => setTheme("dark")}>lights out</button>;
    }
  };

  return (
    <header className="bg-white bg-opacity-60 sticky-nav">
      {/* {renderThemeChanger()} */}
      <div className="container flex justify-between p-4 text-sm md:text-base text-gray-900">
        <div>
          <Link href="/">
            <a>joshua</a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 text-sm md:text-base">
            <li>
              <Link href="/work">
                <a>work</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>services</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
