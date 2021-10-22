import { ImSpotify } from "react-icons/im";

const SpotifyPlayer = ({ data }) => {
  return (
    <div className="flex items-center">
      <p>
        <ImSpotify
          style={{ color: "#1ED760" }}
          className="text-lg mr-3 -mt-2"
        />{" "}
      </p>
      <div>
        <marquee style={{ width: "90%" }} direction="left" scrollamount="3">
          <div className="col-span-1 flex items-center">
            <p className="ml-2 text-sm">
              {data?.songUrl ? (
                <>
                  <span>
                    {data?.title} - {data?.artist}
                  </span>
                </>
              ) : (
                <>
                  <span>Not Playing</span>
                </>
              )}
            </p>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
