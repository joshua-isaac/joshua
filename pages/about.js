import PageHero from "../components/PageHero";

const About = () => {
  // set up hero text
  const text = (
    <div className="max-w-2xl">
      <p className="text-gray-600 leading-relaxed mb-2">
        hello and welcome to my little corner of the internet :)
      </p>
      <p className="text-gray-600 leading-relaxed mb-2">
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
      <p className="text-gray-600 leading-relaxed mb-2">
        born and raised in toronto, i went to school at humber college
        graduating with an advanced diploma in web design & interactive media.
      </p>
      <p className="text-gray-600 leading-relaxed mb-2">
        i am extremely passionate about jamstack development, and building
        dynamic websites, web applications, and e-commerce solutions that help
        brands and businesses convert, using modern web technologies and
        architecture.
      </p>
      <p className="text-gray-600 leading-relaxed mb-2">
        aside from being fascinated by the world wide web, i enjoy fashion, film
        photography, house music and tacos.
      </p>
    </div>
  );
  return (
    <>
      <PageHero title="about" text={text} />
    </>
  );
};

export default About;
