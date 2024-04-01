import Image from "next/image";
import heroImage from "../public/assets/headshot.jpeg";

const HomeHero = () => {
  return (
    <section className="container px-4 my-10 md:my-20">
      <div className="w-40 h-40 mb-10 rounded-md relative">
        <Image
          src={heroImage}
          alt="joshua isaac"
          width="500"
          height="500"
          className="rounded-md object-cover"
          priority
        />
      </div>
      <div className="text-gray-500 dark:text-gray-400 leading-relaxed text-md flex flex-col space-y-[16px]">
        <p>Yo!</p>
        <p>My name is Joshua, welcome to my little corner of the internet :)</p>
        <p>
          I'm a frontend web developer based in Toronto where I specialize in
          crafting dynamic online web epxeriences.
        </p>
        <p>
          Currently, I'm part of the engineering team at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://otherlife.xyz"
            className="text-blue"
          >
            Otherlife
          </a>
          , an innovative creative agency recently acquired by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moonpay.com"
            className="text-blue"
          >
            MoonPay
          </a>
          .
        </p>
        <p>
          Here, I contribute to the development of immersive websites and
          decentralized applications utilizing the blockchain.
        </p>
        <p>
          Notably, I've collaborated on projects for industry giants like
          Mastercard, FaZe Clan, and Wella, among others.
        </p>
        <p>In my toolkit, you'll find the following tech stack:</p>
        <ul className="list-disc ml-4 mt-2 space-y-1 pl-4">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Vercel</li>
          <li>Content Management Systems (CMS)</li>
          <li>Tailwind CSS</li>
          <li>GreenSock Animation Platform (GSAP)</li>
          <li>Framer Motion</li>
          <li>Three.js</li>
          <li>Webflow</li>
        </ul>
        <p>
          I also run my own little independent digitial creative agency called{" "}
          <a
            rel="noopener"
            target="_blank"
            className="text-blue"
            href="https://webdisco.digital"
          >
            Web Disco
          </a>
          , working on select projects for brands and businesses.
        </p>
        <p>
          Beyond the pixels and code, I'm passionate about minimalism, fashion,
          techno and tacos, of course.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
