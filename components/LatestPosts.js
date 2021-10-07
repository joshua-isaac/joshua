const LatestPosts = () => {
  return (
    <div className="container px-4 mb-14">
      <h3 className="text-2xl mb-4 font-semibold text-gray-900">
        latest posts
      </h3>
      <article className="mb-6">
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
      </article>
    </div>
  );
};

export default LatestPosts;
