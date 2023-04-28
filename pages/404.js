import PageHero from "../components/PageHero";
import Link from "next/link";

const Error = () => {
  // set up hero text
  const text = (
    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-3xl">
      <Link href="/" className="text-blue" title="home">
        go home
      </Link>{" "}
      {"user, you're drunk"}
    </p>
  );
  return <PageHero text={text} title="404" />;
};

export default Error;
