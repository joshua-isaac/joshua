// get env vars
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// set up auth
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

// token endpoint
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// now playing endpoint
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

// set up query string
let queryString = `grant_type=refresh_token&refresh_token=${refresh_token}`;

// make new url search params with query string
const params = new URLSearchParams(queryString);

export default async function handler(req, res) {
  // get access token function
  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    return response.json();
  };

  const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  // get now playing
  const response = await getNowPlaying();

  // return false if not playing
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  // get song details
  const song = await response.json();

  // if song no item, return false
  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  res
    .status(200)
    .json({ album, albumImageUrl, artist, isPlaying, songUrl, title });
}
