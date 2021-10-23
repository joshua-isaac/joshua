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
          <Marquee gradient={false} pauseOnHover={true}>
            {data?.songUrl ? (
              <p className="ml-2 text-sm">
                <span>
                  {data?.title} - {data?.artist}
                </span>
              </p>
            ) : (
              <p className="ml-2 text-sm">Spotify Player - Offline</p>
            )}
          </Marquee>
        </div>
      </a>
    </div>
  );
};

export default SpotifyPlayer;
