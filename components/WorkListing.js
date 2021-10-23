import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WorkListing = ({ projects }) => {
  return (
    <section className="container px-4 my-20 md:mb-20" id="work">
      <h2 className="text-3xl mb-6 font-medium text-gray-900 dark:text-white">
        Work
      </h2>
      <motion.div variants={container} initial="hidden" animate="show">
        {projects.map((project, i) => (
          <motion.div
            className="border-b border-gray-200 dark:border-gray-500 py-6 first:pt-0"
            key={i}
            variants={item}
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkListing;
