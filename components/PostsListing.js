import Link from "next/link";
import format from "date-fns/format";

const PostsListing = ({ posts }) => {
  return (
    <section className="container px-4">
      {posts.map((post) => (
        <article className="mb-6" key={post.slug}>
          <Link href={`/blog/${post.slug}`} title={post.title}>
            <h3 className="text-2xl text-gray-900 dark:text-white font-medium">
              {post.title}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 block mb-3">
              Posted on {format(new Date(post.date.start), "MMMM dd, yyy")}
            </span>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default PostsListing;
