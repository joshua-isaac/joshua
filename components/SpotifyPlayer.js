import { ImSpotify } from "react-icons/im";

const SpotifyPlayer = ({ data }) => {
  return (
    <div className="flex items-center">
      <p>
        <ImSpotify style={{ color: "#1ED760" }} className="text-lg mr-3" />{" "}
      </p>
      <div>
        {data?.songUrl ? (
          <div className="mt-2" style={{ width: "80%" }}>
            <marquee direction="left" scrollamount="3">
              <div className="col-span-1 flex items-center">
                <p className="ml-2 text-sm">
                  <span>
                    {data?.title} - {data?.artist}
                  </span>
                </p>
              </div>
            </marquee>
          </div>
        ) : (
          <p className="ml-2 text-sm">Not Playing</p>
        )}
      </div>
    </div>
  );
};

export default SpotifyPlayer;
