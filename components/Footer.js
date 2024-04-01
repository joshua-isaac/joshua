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
    <footer className="text-base text-gray-900 dark:text-white container px-4 mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-500 mb-8" />
      <div className="mb-10">
        <SpotifyPlayer data={data} />
      </div>
      <div className="flex justify-between">
        <ul className="space-y-2">
          <li>
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.webdisco.digital"
              title="work"
            >
              work
            </Link>
          </li>
          <li>
            <Link href="mailto:hell.joshua@hotmail.com" title="contact">
              contact
            </Link>
          </li>
          <li>
            <Link href="/mood-board" title="moodboard">
              mood board
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
        <ul>
          <li>
            <a
              href="https://www.google.com/maps/place/Toronto,+ON/@43.7181552,-79.5184864,11z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              title="Toronto, ON"
            >
              <p className={`time`}>■</p> <p className="ml-2 text-sm">{time}</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
