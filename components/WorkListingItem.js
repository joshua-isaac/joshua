const WorkListingItem = ({ item }) => {
  return (
    <article className="mb-8">
      <a
        href={item.URL?.url}
        target="_blank"
        rel="noreferrer noopener"
        title={item.Name.title[0]?.plain_text}
      >
        <h3 className="text-xl font-semibold text-gray-900">
          {item.Name.title[0]?.plain_text}
        </h3>

        <p className="text-gray-600 leading-relaxed w-full mb-4">
          {item.Description.rich_text[0]?.plain_text}
        </p>
        <ul className=" text-xs space-x-4">
          {item.Tags.multi_select.map((tag) => (
            <li
              key={tag.id}
              className="bg-gray-200 text-gray-500 inline-block py-0.5 px-4 rounded-full"
            >
              <span>{tag.name}</span>
            </li>
          ))}
        </ul>
      </a>
    </article>
  );
};

export default WorkListingItem;
