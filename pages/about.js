import PageHero from "../components/PageHero";
import { NextSeo } from "next-seo";

const About = () => {
  // set up hero text
  const text = (
    <div className="max-w-2xl">
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Hello,
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        My name is Joshua Isaac and I’m a frontend engineer — welcome to my
        little corner of the internet!
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        I currently work at{" "}
        <a
          href="https://www.agilitycms.com"
          title="Agility CMS"
          target="_blank"
          rel="noopener"
          className="text-blue"
        >
          Agility CMS
        </a>{" "}
        as a support engineer and I'm extremely passionate about jamstack
        development and building dynamic websites and web applications using
        modern technology and architecture.
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Recently I've been intrigued by NFTs, and started to explore web3 and
        the blockchain, and I'm pretty excited about the future of the internet.
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Aside from being fascinated by the world wide web, I enjoy minimalism,
        fashion, tacos, and house music.
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
