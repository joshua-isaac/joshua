const WorkListing = ({ projects }) => {
  return (
    <section className="container px-4 mb-10 md:mb-20" id="work">
      <h3 className="text-3xl mb-6 font-medium text-gray-900 dark:text-white">
        Work
      </h3>
      <div className="">
        {projects.map((project, i) => (
          <div
            className="border-b border-gray-200 dark:border-gray-500 py-6 first:pt-0"
            key={i}
          >
            <a
              href={project.url}
              className="flex flex-col-reverse items-end md:flex-row md:justify-between md:items-center"
              target="_blank"
              rel="noopener noreferrer"
              title={project.title}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <h3 className="text-xl md:text-2xl font-medium">
                {project.title}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkListing;
