import { useState, useEffect } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Footer = () => {
  // set current time
  const [time, setTime] = useState(format(new Date(), "h:mmaaaaa'm"));

  // each tick will update current time
  const tick = () => {
    setTime(format(new Date(), "h:mmaaaaa'm"));
  };

  // run tick every second
  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  }, []);

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
      return <button onClick={() => setTheme("light")}>lights on</button>;
    } else {
      return <button onClick={() => setTheme("dark")}>lights out</button>;
    }
  };

  return (
    <footer className="p-4 container grid grid-cols-3 text-sm md:text-base text-gray-900 mt-10">
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https:/www.twitter.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            instagram
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/moodboard">
            <a>moodboard</a>
          </Link>
        </li>
        <li>
          <Link href="/guestbook">
            <a>guestbook</a>
          </Link>
        </li>
        <li>{renderThemeChanger()}</li>
      </ul>
    </footer>
  );
};

export default Footer;
