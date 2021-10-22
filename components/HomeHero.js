import Image from "next/image";
import heroImage from "../public/assets/headshot.jpg";

const HomeHero = () => {
  return (
    <>
      <section className="container px-4 my-10 md:my-20 md:flex items-center">
        <div className="w-32 h-32 md:w-40 md:h-40 mb-8 md:mb-0 rounded-md relative">
          <Image
            src={heroImage}
            alt="joshua isaac"
            width="500"
            height="500"
            className="rounded-md object-cover"
            priority={true}
          />
        </div>
        <div className="md:ml-8">
          <h1 className="text-4xl md:text-5xl mb-1 md:mb-2 font-medium text-gray-900 dark:text-white">
            Hello, {"I'm"} Joshua
          </h1>
          <p className=" text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-xl">
            Frontend web developer building dynamic websites, web applications,{" "}
            <br className="hidden md:block" />
            and e-commerce solutions with{" "}
            <span className="font-medium">performance</span> and{" "}
            <span className="font-medium">simplicity</span>.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
