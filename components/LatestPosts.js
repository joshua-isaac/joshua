import Link from "next/link";
import { format } from "date-fns";

const LatestPosts = ({ posts }) => {
  return (
    <div className="container px-4 mb-10">
      <h2 className="text-3xl mb-6 font-medium text-gray-900 dark:text-white">
        Latest Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} title={post.title}>
            <article className="rounded-md" key={post.slug}>
              <h3 className="text-gray-900 dark:text-white text-2xl font-medium">
                {post.title}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400 block mb-3">
                Posted on {format(new Date(post.date.start), "MMMM dd, yyy")}
              </span>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
