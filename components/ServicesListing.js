import ServicesListingItem from "./ServicesListingItem";

const ServicesListing = ({ items }) => {
  return (
    <section className="container px-4">
      {items.map(({ item }) => (
        <ServicesListingItem item={item} key={item.Name.title[0]?.plain_text} />
      ))}
    </section>
  );
};

export default ServicesListing;
