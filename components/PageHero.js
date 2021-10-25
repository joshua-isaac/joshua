const PageHero = ({ title, text }) => {
  return (
    <section className="container px-4 my-10 md:my-20">
      <h1 className="text-3xl lg:text-5xl mb-2 font-medium text-gray-900 dark:text-white">
        {title}
      </h1>
      {text}
    </section>
  );
};

export default PageHero;
