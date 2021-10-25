import PageHero from "../components/PageHero";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

const About = () => {
  // set up hero text
  const text = (
    <div className="max-w-2xl">
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Hello, my name is Joshua Isaac and I’m a frontend web developer. Welcome
        to my little corner of the internet!
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        I am extremely passionate about jamstack development and building
        dynamic websites, web applications, and e-commerce solutions using
        modern technology and architecture.
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Aside from being fascinated by the world wide web, I enjoy fashion,
        tacos, and house music.
      </p>
    </div>
  );
  return (
    <div>
      <NextSeo title="About | Joshua Isaac" />
      <PageHero title="About" text={text} />
    </div>
  );
};

export default About;
