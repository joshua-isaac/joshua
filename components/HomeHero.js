import Image from "next/image";
import heroImage from "../public/assets/pic1.jpg";

const HomeHero = () => {
  return (
    <>
      <section className="container px-4 my-10 md:my-20 flex items-center">
        <div className="w-20 h-20 md:w-40 md:h-40">
          <Image
            src={heroImage}
            alt="joshua isaac"
            width="200"
            height="200"
            className="rounded-lg object-cover border-2 border-gray-900"
          />
        </div>
        <div className="ml-8">
          <h1 className="text-3xl md:text-5xl mb-1 md:mb-2 font-medium text-gray-900 dark:text-white">
            Hello, {"I'm"} Joshua
          </h1>
          <p className="hidden md:block text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-2xl">
            Frontend web developer focused on performance and simplicity —
            building dynamic websites, web applications, and e-commerce
            solutions.
          </p>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-md md:hidden">
            Building the modern web
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
