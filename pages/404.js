import PageHero from "../components/PageHero";
import Link from "next/link";

const Error = () => {
  // set up hero text
  const text = (
    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-3xl">
      <Link href="/">
        <a className="text-blue" title="go home">
          go home
        </a>
      </Link>{" "}
      {"user, you're drunk"}
    </p>
  );
  return <PageHero text={text} title="404" />;
};

export default Error;
