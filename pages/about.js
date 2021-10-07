import Hero from "../components/Hero";

const About = () => {
  // set up hero text
  const text = (
    <>
      <p className="text-gray-600 leading-relaxed mb-4">
        my name is joshua isaac and i’m a web developer currently working on the
        support team at{" "}
        <a
          href="https://www.agilitycms.com"
          className="text-blue"
          target="_blank"
          title="agility cms"
          rel="noopener noreferrer"
        >
          agility cms
        </a>
        .
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        born and raised in toronto, i went to school at humber college
        graduating with an advanced diploma in web design & interactive media.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        i am extremely interested jamstack development, and delivering high
        performance websites and web applications using modern web technologies
        and architecture.
      </p>
    </>
  );
  return (
    <>
      <Hero title="about me" text={text} />
    </>
  );
};

export default About;
