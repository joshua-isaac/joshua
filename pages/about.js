import PageHero from "../components/PageHero";
import { NextSeo } from "next-seo";

const About = () => {
  // set up hero text
  const text = (
    <div className="max-w-2xl">
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        {`Hello! My name is Joshua and I'm a Software Engineer based out of Toronto, Ontario.`}
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        {`I'm extremely passionate about building dynamic websites and applications using modern technologies and architecture.`}
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        I currently work at{" "}
        <a
          href="https://www.nightshift.net"
          title="Nightshift"
          target="_blank"
          rel="noreferrer"
          className="text-blue"
        >
          Nightshift
        </a>,{" "}
        building immersive frontend websites and decentralized applications (<a href="https://ethereum.org/en/dapps/" target="_blank" rel="noopener noreferrer" className="text-blue" title="Decentralized Applications">dApps</a>).
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        My technology toolbox includes:
        <ul className="list-disc ml-4 mt-2 space-y-1">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Vercel</li>
          <li>Content Management Systems (CMS)</li>
          <li>Tailwind CSS</li>
          <li>GreenSock Animation Platform (GSAP)</li>
          <li>Framer Motion</li>
        </ul>
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
       {`With the uptick in NFT's and decentralization, I've been continuing to further my knowledge on Ethereum and Web3. 
        The future of our internet looks very exciting!`}
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Aside from being fascinated by the World Wide Web, I enjoy minimalism,
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
