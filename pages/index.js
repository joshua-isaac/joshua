import HomeHero from "../components/HomeHero";

import { getDatabase } from "../lib/notion";
import slugify from "slugify";

const Home = ({ projects, posts }) => {
  return (
    <div>
      <HomeHero />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // notion database id
  const workDatabaseId = process.env.WORK_DATABASE_ID;
  const blogDatabaseId = process.env.BLOG_DATABASE_ID;

  // get database
  const workResponse = await getDatabase(workDatabaseId);

  // return posts as clean object
  const projects = workResponse.map((project) => {
    return {
      title: project.properties.title.title[0].plain_text,
      // image: project.properties.image.files[0].file.url,
      url: project.properties.url.url,
      description: project.properties.description.rich_text[0].plain_text,
    };
  });

  // configure database sorting
  const sorts = [
    {
      property: "date",
      direction: "descending",
    },
  ];

  // get database
  const blogResponse = await getDatabase(blogDatabaseId, sorts);

  // return posts as clean object
  const posts = blogResponse
    .map((post) => {
      return {
        title: post.properties.title.title[0].plain_text,
        slug: slugify(post.properties.title.title[0].plain_text, {
          strict: true,
          lower: true,
        }),
        date: post.properties.date.date,
        excerpt: post.properties.excerpt.rich_text[0]?.plain_text || null,
      };
    })
    .slice(0, 2);

  return {
    revalidate: 1,
    props: {
      projects,
      posts,
    },
  };
}
