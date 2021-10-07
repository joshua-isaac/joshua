import Hero from "../components/Hero";
import { notion } from "../lib/notion";
import ServicesListing from "../components/ServicesListing";

const Services = ({ results }) => {
  // get items from notion
  const items = results?.map((item) => {
    return {
      item: item.properties,
    };
  });

  // set up hero text
  const text = (
    <p className="text-gray-600 leading-relaxed text-lg">
      the key to growing your brand or business starts with it’s online
      presence, and i love helping people have fun on the internet. let’s bring
      your idea to life with a fast, modern and responsive website or web
      application.
    </p>
  );
  return (
    <>
      <Hero title="services" text={text} />
      <ServicesListing items={items} />
    </>
  );
};

export default Services;

export async function getStaticProps() {
  // databaseId for work items
  const databaseId = "58d11c2334204b21ae3e221c0619c6c4";

  // get response from notion
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: "Order", direction: "descending" }],
  });

  return {
    revalidate: 1,
    props: {
      results: response.results.reverse(),
    },
  };
}
