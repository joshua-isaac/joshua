import PageHero from "../components/PageHero";
import { NextSeo } from "next-seo";

const About = () => {
  // set up hero text
  const text = (
    <div className="max-w-2xl">
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Hello and welcome to my little corner of the internet :)
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        My name is Joshua Isaac and I’m a web developer currently working on the
        Support team at{" "}
        <a
          href="https://www.agilitycms.com"
          className="text-blue"
          target="_blank"
          title="Agility Cms"
          rel="noopener noreferrer"
        >
          Agility CMS.
        </a>
        .
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Born and raised in Toronto, i went to school at Humber College
        graduating with an advanced diploma in Web Design & Interactive Media.
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        I am extremely passionate about jamstack development and building
        dynamic websites, web applications, and e-commerce solutions using
        modern technology and architecture.
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Aside from being fascinated by the world wide web, i enjoy fashion,
        tacos, and house music.
      </p>
    </div>
  );
  return (
    <>
      <NextSeo title="About | Joshua Isaac" />
      <PageHero title="About" text={text} />
    </>
  );
};

export default About;
