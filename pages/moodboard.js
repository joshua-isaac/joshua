import useSWR from "swr";
import Image from "next/image";

const Moodboard = () => {
  // set up fetcher method
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // fetch scraper endpoint with swr
  const { data, error } = useSWR("/api/scraper", fetcher);

  // error
  if (error || data?.images.length <= 0) {
    return (
      <section className="px-4 text-center grid place-items-center h-screen">
        <p>moodboard broken...</p>
      </section>
    );
  }

  // loading
  if (!data) {
    return (
      <section className="px-4 text-center grid place-items-center h-screen">
        <p>loading...</p>
      </section>
    );
  }

  return (
    <section className="px-4 my-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
        {data?.images.map((image) => (
          <div className="relative" key={image.id}>
            <a
              href={`https://www.archillect.com/${image.id}`}
              target="_blank"
              rel="noreferrer noopener"
              title={`#${image.id}`}
              className="group"
            >
              <Image
                src={image.url}
                width="500"
                height="500"
                objectFit="contain"
                alt="stimulating visual content"
              />
              <div className="group-hover:bg-white group-hover:bg-opacity-75 absolute inset-0 transition duration-300 ease-in-out">
                <p className="text-black text-opacity-0 group-hover:text-opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 text-xs transition duration-300 ease-in-out">
                  #{image.id}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Moodboard;
