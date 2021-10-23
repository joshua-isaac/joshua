import PageHero from "../components/PageHero";
import PostsListing from "../components/PostsListing";
import slugify from "slugify";
import { getDatabase } from "../lib/notion";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

const Blog = ({ posts }) => {
  // set up hero text
  const text = (
    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-3xl">
      I plan to occasionally write about things I learn, modern web development,
      and how the web is changing.
    </p>
  );
  return (
    <div>
      <NextSeo
        title="Blog | Joshua Isaac"
        description="My thoughts on modern web development, programming, technology, food and my personal life."
      />
      <PageHero title="Blog" text={text} />
      <PostsListing posts={posts} />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  // notion database id
  const blogDatabaseId = process.env.BLOG_DATABASE_ID;

  // configure database sorting
  const sorts = [
    {
      property: "date",
      direction: "descending",
    },
  ];

  // get database
  const response = await getDatabase(blogDatabaseId, sorts);

  // return posts as clean object
  const posts = response.map((post) => {
    return {
      title: post.properties.title.title[0].plain_text,
      slug: slugify(post.properties.title.title[0].plain_text, {
        strict: true,
        lower: true,
      }),
      date: post.properties.date.date,
      excerpt: post.properties.excerpt.rich_text[0]?.plain_text || null,
    };
  });

  return {
    revalidate: 1,
    props: {
      posts: posts,
    },
  };
}
