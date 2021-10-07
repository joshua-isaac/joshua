import Link from "next/link";

const Hero = ({ title, text, linkText, linkUrl }) => {
  return (
    <section className="container px-4 my-14">
      <h1 className="text-3xl lg:text-4xl mb-4 font-semibold text-gray-900">
        {title}
      </h1>
      {text}
      {/* {linkUrl && linkText && (
        <Link href={linkUrl} title={linkText}>
          <a className="text-blue text-lg block mt-2">{linkText}</a>
        </Link>
      )} */}
    </section>
  );
};

export default Hero;
