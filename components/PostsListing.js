import Link from "next/link";
const PostsListing = ({ posts }) => {
  return (
    <section className="container px-4">
      {posts.map((post) => (
        <article className="mb-6" key={post.slug}>
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
