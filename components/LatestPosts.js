import Link from "next/link";

const LatestPosts = () => {
  return (
    <div className="container px-4">
      <h3 className="text-xl md:text-3xl mb-6 font-medium text-gray-900 dark:text-white">
        latest posts
      </h3>
      <div className="grid grid-cols-2 gap-8">
        <article className="bg-gray-200 rounded-lg p-5">
          <h5 className="text-gray-900 text-lg font-medium mb-2">
            next.js is fkn awesome
          </h5>
          <p className="text-gray-500 leading-relaxed truncate mb-6">
            gatsby is a great way to learn react because it takes away a lot of
            the burden needed to get going with a react project.
          </p>
          <div className="flex justify-end">
            <Link href="/">
              <a>read more</a>
            </Link>
          </div>
        </article>
      </div>
      {/* <article className="mb-6">
        <h5 className="text-gray-900 text-lg font-medium mb-2">
          next.js is fkn awesome
        </h5>
        <p className="text-gray-600 leading-relaxed">
          gatsby is a great way to learn react because it takes away a lot of
          the burden needed to get going with a react project.
        </p>
      </article>
      <article>
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          gatsby is a great way to learn react
        </h5>
        <p className="text-gray-600 leading-relaxed">
          gatsby is a great way to learn react because it takes away a lot of
          the burden needed to get going with a react project.
        </p>
      </article> */}
    </div>
  );
};

export default LatestPosts;
