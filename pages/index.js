import HomeHero from "../components/HomeHero";
import WorkListing from "../components/WorkListing";
import { getDatabase } from "../lib/notion";

const Home = ({ workResults }) => {
  return (
    <>
      <HomeHero />
      {/* <WorkListing items={items} /> */}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    revalidate: 1,
    props: {},
  };
}
