import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import Image from "next/image";
import slugify from "slugify";
import { format } from "date-fns";
import { NextSeo } from "next-seo";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={index}
        className={`${[
          bold ? `font-semibold` : "",
          code ? `code dark:text-gray-900` : "",
          italic ? `italic` : "",
          strikethrough ? `line-through` : "",
          underline ? `underline` : "",
        ].join(" ")} leading-relaxed`}
      >
        {text.link ? (
          <a className="text-blue" href={text.link.url}>
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

const Post = ({ page, blocks }) => {
  // render blocks
  const renderBlock = (block) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
      case "heading_2":
        return (
          <h2
            className="font-medium text-gray-900 text-2xl md:text-3xl dark:text-white mb-2"
            key={id}
          >
            {value.text[0].plain_text}
          </h2>
        );
      case "heading_3":
        return (
          <h2
            className="font-medium text-gray-900 text-xl md:text-2xl dark:text-white mb-2"
            key={id}
          >
            {value.text[0].plain_text}
          </h2>
        );
      case "paragraph":
        return (
          <p className="mb-5 text-gray-500 dark:text-gray-400" key={id}>
            <Text text={value.text} />
          </p>
        );
      case "callout":
        return (
          <div className="bg-gray-200 p-4 rounded-md mb-4" key={id}>
            <div className="flex">
              <h4 className="mr-3">{value.icon.emoji}</h4>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                <Text text={value.text} />
              </p>
            </div>
          </div>
        );
      case "quote":
        return (
          <blockquote
            className="mb-4 border-l-4 border-gray-900 dark:border-white"
            key={id}
          >
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed pl-4 italic">
              <Text text={value.text} />
            </p>
          </blockquote>
        );
      case "numbered_list_item":
        return (
          <ol className="list-decimal pl-4 space-7-2 mb-4" key={id}>
            <li className="text-gray-500 dark:text-gray-400 leading-relaxed">
              <Text text={value.text} />
            </li>
          </ol>
        );
      case "bulleted_list_item":
        return (
          <ul className="list-disc pl-4 space-y-2 mb-4" key={id}>
            <li className="text-gray-500 dark:text-gray-400 leading-relaxed">
              <Text text={value.text} />
            </li>
          </ul>
        );
      case "image":
        return (
          <div className="mb-4" key={id}>
            <Image
              src={value.file?.url}
              alt={value.caption[0]?.plain_text}
              width="1200"
              height="630"
              className="rounded-md object-cover"
            />
          </div>
        );
    }
  };

  return (
    <>
      <NextSeo
        title={`${page.properties.title.title[0].plain_text} | Joshua Isaac`}
      />
      <article className="container px-4">
        <div className="my-10 md:mt-20 md:mb-8">
          <h1 className="text-4xl md:text-4xl font-medium mb-2 leading-normal">
            {page.properties.title.title[0].plain_text}
          </h1>
          {page.properties.date.date && (
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-xs">
              Posted on{" "}
              {format(
                new Date(page.properties.date.date?.start),
                "MMMM dd, yyy"
              )}
            </p>
          )}
        </div>
        {blocks.map((block) => (
          <div key={block.id}>{renderBlock(block)}</div>
        ))}
      </article>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  // notion database id
  const blogDatabaseId = process.env.BLOG_DATABASE_ID;

  // get database
  const response = await getDatabase(blogDatabaseId);

  // get paths from database
  const paths = response.map((path) => {
    return {
      params: {
        slug: slugify(path.properties.title.title[0].plain_text, {
          strict: true,
          lower: true,
        }),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // notion database id
  const blogDatabaseId = process.env.BLOG_DATABASE_ID;

  // get database
  const database = await getDatabase(blogDatabaseId);

  // find matching page in db by slug
  const response = database.find(
    (item) =>
      slugify(item.properties.title.title[0].plain_text.toLowerCase()) ===
      params.slug
  );

  // get page
  const page = await getPage(response.id);

  // get blocks
  const blocks = await getBlocks(response.id);

  return {
    revalidate: 1,
    props: {
      page,
      blocks: blocks.results,
    },
  };
}
