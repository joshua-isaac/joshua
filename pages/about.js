import PageHero from "../components/PageHero";

const About = () => {
  // set up hero text
  const text = (
    <div className="max-w-2xl">
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        hello and welcome to my little corner of the internet :)
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
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
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        born and raised in toronto, i went to school at humber college
        graduating with an advanced diploma in web design & interactive media.
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        i am extremely passionate about jamstack development and building
        dynamic websites, web applications, and e-commerce solutions using
        modern technology and architecture.
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        aside from being fascinated by the world wide web, i enjoy fashion,
        tacos house music.
      </p>
    </div>
  );
  return (
    <>
      <PageHero title="About" text={text} />
    </>
  );
};

export default About;
