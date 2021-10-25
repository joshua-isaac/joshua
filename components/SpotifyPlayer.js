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
            <Marquee gradient={false} pauseOnHover={true}>
              <p className="ml-2 text-sm">
                <span>
                  {data?.title} - {data?.artist}
                </span>
              </p>
            </Marquee>
          ) : (
            <p className="ml-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400 block mt-1">
                Offline
              </span>
            </p>
          )}
        </div>
      </a>
    </div>
  );
};

export default SpotifyPlayer;
