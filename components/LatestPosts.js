import Link from "next/link";
import { format } from "date-fns";

const LatestPosts = ({ posts }) => {
  return (
    <div className="container px-4 mb-10">
      <h3 className="text-3xl mb-6 font-medium text-gray-900 dark:text-white">
        Latest Posts
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <a title={post.title}>
              <article className="rounded-md" key={post.slug}>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Posted on {format(new Date(post.date.start), "MMMM dd, yyy")}
                </span>
                <h5 className="text-gray-900 dark:text-white text-2xl font-medium mb-1">
                  {post.title}
                </h5>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </article>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
