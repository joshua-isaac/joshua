import { ImSpotify } from "react-icons/im";
import Marquee from "react-fast-marquee";

const SpotifyPlayer = ({ data }) => {
  return (
    <div>
      <a href={data?.songUrl} className="flex items-center">
        <p>
          <ImSpotify style={{ color: "#1ED760" }} className="text-lg mr-3" />{" "}
        </p>
        <div>
          {data?.songUrl ? (
            <p className="ml-1 text-sm leading-[100%] relative top-[2px]">
              <span>
                {data?.title} - {data?.artist}
              </span>
            </p>
          ) : (
            <p className="ml-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400 block mt-1">
                Media player is currently offline.
              </span>
            </p>
          )}
        </div>
      </a>
    </div>
  );
};

export default SpotifyPlayer;
