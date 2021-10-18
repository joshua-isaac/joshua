import { RiExternalLinkLine } from "react-icons/ri";
const WorkListingItem = ({ item }) => {
  return (
    <a
      href={item.URL?.url}
      target="_blank"
      rel="noreferrer noopener"
      title={item.Name.title[0]?.plain_text}
    >
      <article className="mb-6">
        <div className="flex">
          <div>
            <RiExternalLinkLine className="font-semibold md:text-md text-gray-900 dark:text-white mt-1" />
          </div>
          <div className="ml-3">
            <h5 className="font-semibold md:text-lg text-gray-900 dark:text-white">
              {item.Name.title[0]?.plain_text}
            </h5>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed w-full">
              {item.Description.rich_text[0]?.plain_text}
            </p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default WorkListingItem;
