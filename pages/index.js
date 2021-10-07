import Link from "next/link";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import FeaturedWork from "../components/FeaturedWork";

const Home = () => {
  // set up hero text
  const text = (
    <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
      web developer delivering fast, scaleable, and user-friendly websites and
      web applications that help you convert.
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
