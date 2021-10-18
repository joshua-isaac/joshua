import HomeHero from "../components/HomeHero";
import WorkListing from "../components/WorkListing";
import { notion } from "../lib/notion";

const Home = ({ workResults }) => {
  // set up hero text
  const text = (
    <>
      <p className="hidden md:block text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-2xl">
        web developer interested in the jamstack and building websites, web
        applications, and e-commerce solutions with modern technologies and
        architecture.
      </p>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-md md:hidden">
        frontend web developer
      </p>
    </>
  );

  // get items from notion
  const items = workResults?.map((item) => {
    return {
      item: item.properties,
    };
  });

  return (
    <>
      <HomeHero />
      <WorkListing items={items} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // databaseId for work items
  const workDatabaseId = "3f5902143db645f9a88d31a0e4a83f06";

  // get response from notion
  const response = await notion.databases.query({
    database_id: workDatabaseId,
  });

  return {
    revalidate: 1,
    props: {
      workResults: response.results.reverse(),
    },
  };
}
