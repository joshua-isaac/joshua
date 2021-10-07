import Hero from "../components/Hero";
import WorkListing from "../components/WorkListing";
import Link from "next/link";
import { notion } from "../lib/notion";

const Work = ({ results }) => {
  // get items from notion
  const items = results?.map((item) => {
    return {
      item: item.properties,
    };
  });

  // set up hero text
  const text = (
    <p className="text-gray-600 leading-relaxed text-lg">
      browse through the websites and web applications i've been lucky enough to
      develop for some of previous clients, or view{" "}
      <Link href="/services">
        <a className="text-blue">my services</a>
      </Link>
      .
    </p>
  );
  return (
    <>
      <Hero title="work" text={text} />
      <WorkListing items={items} />
    </>
  );
};

export default Work;

export async function getStaticProps() {
  // databaseId for work items
  const databaseId = "3f5902143db645f9a88d31a0e4a83f06";

  // get response from notion
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    revalidate: 1,
    props: {
      results: response.results.reverse(),
    },
  };
}
