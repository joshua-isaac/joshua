const cheerio = require("cheerio");
const axios = require("axios");

export default async function handler(req, res) {
  let posts = [];

  try {
    const url = await axios.get("https://archillect.com/archive");

    if (url.status === 200) {
      const html = url.data;

      const $ = cheerio.load(html);

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

  const filteredPosts = posts?.filter((post) => post.img.includes("_75sq"));

  const images = filteredPosts?.map((item) => {
    return {
      id: item.id,
      url: item.img.replace("_75sq", "_500"),
    };
  });

  res.status(200).json({ images: images });
}
