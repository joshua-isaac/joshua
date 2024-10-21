import Image from "next/image";
import heroImage from "../public/assets/headshot.jpeg";

const HomeHero = () => {
  return (
    <section className="container px-4 mt-10 md:mt-20">
      <div className="relative">
        <Image
          src={heroImage}
          alt="joshua isaac"
          width="500"
          height="500"
          className="object-cover w-40 h-40 rounded-md mb-8"
          priority
        />
      </div>
      <h2
        id="about"
        className="font-medium text-gray-900 text-xl md:text-2xl dark:text-white mb-2"
      >
        About
      </h2>
      <div className="text-gray-500 dark:text-gray-400 leading-relaxed text-md flex flex-col space-y-[16px]">
        <p>Welcome to my little corner of the internet.</p>
        <p>
          {`My name is Joshua, and I'm a Frontend Web Developer based in Toronto,
          Ontario.`}
        </p>
        <p>
          {`Currently, I'm part of the engineering team at `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://otherlife.xyz"
            className="text-blue"
          >
            {`Otherlife`}
          </a>
          {`, an innovative creative agency recently acquired by `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moonpay.com"
            className="text-blue"
          >
            {`MoonPay`}
          </a>
          .
        </p>
        <p>
          {`Here, I contribute to the development of immersive websites and
          decentralized applications utilizing the blockchain.`}
        </p>
        <p>
          {`I'm also the founder of `}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue"
            href="https://webdisco.digital"
          >
            {`Web Disco`}
          </a>
          {`, my own small independent creative agency.`}
        </p>
        <p>{`I work on select projects for small to medium sized brands and businesses, helping them establish a strong online presence.`}</p>
        <h2
          id="work"
          className="font-medium text-gray-900 text-xl md:text-2xl dark:text-white mb-2 pt-6"
        >
          Work
        </h2>
        <p>
          {`While working at Otherlife, I've had the opportunity to work on some cool projects.`}
        </p>
        <ul className="list-disc ml-4 mt-2 space-y-1 pl-4">
          <li>
            <a
              className="text-blue"
              href="https://otherlife.xyz"
              title="Otherlife"
              target="_blank"
              rel="noreferrer"
            >
              Otherlife Creative Agency Website
            </a>
          </li>
          <li>
            <a
              className="text-blue"
              href="https://connect.priceless.com/artistaccelerator-mint"
              title="Mastercard Artist Accelerator"
              target="_blank"
              rel="noreferrer"
            >
              Mastercard Artist Accelerator
            </a>
          </li>
          <li>
            <a
              className="text-blue"
              href="https://narcos.otherlife.xyz"
              title="Narcos e-commerce experience"
              target="_blank"
              rel="noreferrer"
            >
              Narcos E-Commerce Experience
            </a>
          </li>
          <li>
            <a
              className="text-blue"
              href="https://www.vanta.club/"
              title="Vanta Club Collective"
              target="_blank"
              rel="noreferrer"
            >
              Vanta Club Collective
            </a>
          </li>
        </ul>
        <h2
          id="skills"
          className="font-medium text-gray-900 text-xl md:text-2xl dark:text-white mb-2 pt-6"
        >
          Skills
        </h2>
        <p>{`You can find me working with following tools and technologies:`}</p>
        <ul className="list-disc ml-4 mt-2 space-y-1 pl-4">
          <li>React, Next.js, TypeScript</li>
          <li>Vercel, AWS</li>
          <li>Content Management Systems (CMS)</li>
          <li>Tailwind CSS, GSAP, Framer Motion, Three.js</li>
          <li>Webflow, Shopify</li>
        </ul>
      </div>
    </section>
  );
};

export default HomeHero;
