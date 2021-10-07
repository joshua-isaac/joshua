import WorkListingItem from "./WorkListingItem";

const WorkListing = ({ items }) => {
  return (
    <section className="container px-4">
      {items.map(({ item }) => (
        <WorkListingItem item={item} key={item.Name.title[0]?.plain_text} />
      ))}
    </section>
  );
};

export default WorkListing;
