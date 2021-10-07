const cheerio = require("cheerio");
const axios = require("axios");

export default async function handler(req, res) {
  // set up posts array
  let posts = [];

  try {
    // make request to site we wanna scrape
    const url = await axios.get("https://archillect.com/archive");

    // if status is 200, lets scrape it :^)
    if (url.status === 200) {
      // get html
      const html = url.data;

      // chip chip cheerio
      const $ = cheerio.load(html);

      // for each post div we find, return the image src and id
      $(".post").each(function (i, el) {
        posts[i] = {
          img: $(this).find("img").attr("src"),
          id: $(this).find(".postid").text(),
        };
      });
    }
  } catch (e) {
    console.log("something went wrong :^( ", e);
  }

  // filter posts to get items with size
  const filteredPosts = posts?.filter((post) => post.img.includes("_75sq"));

  // replace size in url
  const images = filteredPosts?.map((item) => {
    return {
      id: item.id,
      url: item.img.replace("_75sq", "_500"),
    };
  });

  res.status(200).json({ images: images });
}
