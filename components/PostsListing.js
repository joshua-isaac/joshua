import format from "date-fns/format";

import Link from "next/link";
const PostsListing = ({ posts }) => {
  return (
    <section className="container">
      {/* <input
        type="text"
        placeholder="Search posts..."
        className="w-full py-2 px-4 rounded-md border-2 border-gray-900 mb-8"
      /> */}
      {posts.map((post) => (
        <article className="mb-6" key={post.slug}>
          {/* <span>
            {format(new Date(post.properties.date.date?.start), "MMMM dd, yyy")}
          </span> */}
          <Link href={`/blog/${post.slug}`}>
            <a title={post.title}>
              <h3 className="text-2xl text-gray-900 dark:text-white font-medium mb-1">
                {post.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
            </a>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default PostsListing;
