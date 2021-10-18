import WorkListingItem from "./WorkListingItem";

const WorkListing = ({ items }) => {
  return (
    <section className="container px-4 mb-10 md:mb-20" id="work">
      <h3 className="text-xl md:text-3xl mb-6 font-medium text-gray-900 dark:text-white">
        featured work
      </h3>
      {items.map(({ item }) => (
        <WorkListingItem item={item} key={item.Name.title[0]?.plain_text} />
      ))}
    </section>
  );
};

export default WorkListing;
