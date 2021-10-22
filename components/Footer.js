import { useState, useEffect } from "react";
import { format } from "date-fns";
import Link from "next/link";
import useSWR from "swr";
import SpotifyPlayer from "./SpotifyPlayer";

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

  // set up fetcher method
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // get spotify player data
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <footer className="text-base text-gray-900 dark:text-white mt-10 container px-4 mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-500 mb-8" />
      <div className="grid grid-cols-3 mb-10">
        <div className="col-span-1">
          <SpotifyPlayer data={data} />
        </div>
        <div className="col-span-1" />
        <div className={`col-span-1 ${data?.songUrl ? `mt-2` : null}`}>
          <a
            href="https://www.google.com/maps/place/Toronto,+ON/@43.7181552,-79.5184864,11z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            title="Toronto, ON"
          >
            <p className={`time`}>■</p> <p className="ml-2 text-sm">{time}</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <ul className="space-y-2">
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
        </ul>
        <ul className="space-y-2">
          <li>
            <a
              href="https://github.com/joshua-isaac"
              target="_blank"
              rel="noreferrer noopener"
              title="GitHub"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/joshu____a"
              target="_blank"
              rel="noreferrer noopener"
              title="Twitter"
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/joshu.a/"
              target="_blank"
              rel="noreferrer noopener"
              title="Instagram"
            >
              instagram
            </a>
          </li>
        </ul>
        <ul className="space-y-2">
          <li>
            <Link href="/moodboard">
              <a title="Moodboard">moodboard</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a title="Home">home</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
