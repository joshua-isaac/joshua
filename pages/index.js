import Link from "next/link";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import FeaturedWork from "../components/FeaturedWork";

const Home = () => {
  // set up hero text
  const text = (
    <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
      web developer interested in the jamstack, and delivering blazing-fast
      websites and web applications using modern web technologies and
      architecture.
    </p>
  );

  return (
    <>
      <Hero title="hello, i'm joshua" text={text} />
      <FeaturedWork />
      <LatestPosts />
    </>
  );
};

export default Home;
