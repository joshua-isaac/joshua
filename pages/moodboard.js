import useSWR from "swr";
import Image from "next/image";
import PageHero from "../components/PageHero";
import { CgSpinnerAlt } from "react-icons/cg";
import { NextSeo } from "next-seo";

const Moodboard = () => {
  // set up hero text
  const text = (
    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-3xl">
      My moodboard is curated from the help of{" "}
      <a
        href="https://archillect.com/about"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue"
        title="Archillect"
      >
        Archillect
      </a>
      , an AI created by{" "}
      <a
        href="https://twitter.com/muratpak"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue"
        title="Pak"
      >
        Pak
      </a>{" "}
      used to discover and share stimulating visual content.
    </p>
  );

  // set up fetcher method
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // fetch scraper endpoint with swr
  const { data, error } = useSWR("/api/scraper", fetcher);

  return (
    <div>
      <NextSeo title="Moodboard | Joshua Isaac" />
      <section className="my-2 container">
        <PageHero text={text} title="Moodboard" />
        {!data && (
          <div className="px-4 flex justify-center">
            <CgSpinnerAlt className="animate-spin text-gray-900 dark:text-white text-2xl" />
          </div>
        )}
        {error ||
          (data?.images.length <= 0 && (
            <p className="px-4">moodboard broken :(</p>
          ))}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center px-4">
          {data?.images.map((image) => (
            <div key={image.id} className="flex items-center">
              <a
                href={`https://archillect.com/${image.id}`}
                target="_blank"
                rel="noreferrer noopener"
                title={`#${image.id}`}
              >
                <img src={image.url} alt="stimulating visual content" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Moodboard;
