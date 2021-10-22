import { ImSpotify } from "react-icons/im";
import Marquee from "react-fast-marquee";

const SpotifyPlayer = ({ data }) => {
  return (
    <div>
      {data?.songUrl ? (
        <a href={data.songUrl} className="flex items-center">
          <p>
            <ImSpotify style={{ color: "#1ED760" }} className="text-lg mr-3" />{" "}
          </p>
          <div>
            {data?.songUrl ? (
              <Marquee gradient={false}>
                <p className="ml-2 text-sm">
                  <span>
                    {data?.title} - {data?.artist}
                  </span>
                </p>
              </Marquee>
            ) : (
              <p className="ml-2 text-sm">Not Playing</p>
            )}
          </div>
        </a>
      ) : (
        <div className="flex items-center">
          <p>
            <ImSpotify style={{ color: "#1ED760" }} className="text-lg mr-3" />{" "}
          </p>
          <div>
            {data?.songUrl ? (
              <Marquee gradient={false} delay={2} pauseOnHover={true}>
                <p className="ml-2 text-sm">
                  <span>
                    {data?.title} - {data?.artist}
                  </span>
                </p>
              </Marquee>
            ) : (
              <p className="ml-2 text-sm">Not Playing</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
