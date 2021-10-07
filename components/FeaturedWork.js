// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";

const FeaturedWork = () => {
  return (
    <section className="container px-4 mb-14">
      <h3 className="text-2xl mb-4 font-semibold text-gray-900">
        featured work
      </h3>
      <Swiper
        spaceBetween={25}
        // slidesPerView={3.2}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          678: {
            slidesPerView: 3.2,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <a
            href="https://www.stevemomusic.com"
            title="steve mo music"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/steve_mo_music.jpeg"
              objectFit="cover"
              width="800"
              height="1000"
            />
            <div className="flex justify-between items-center bg-gray-100 p-2 relative -mt-2 text-gray-900">
              <p className="text-sm font-medium">steve mo music</p>
              <p>
                <RiExternalLinkLine />
              </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/cat.jpg" width="800" height="1000" />
          <div className="flex justify-between items-center bg-gray-100 p-2 relative -mt-2 text-gray-900">
            <p className="text-sm font-medium">flow with victoria</p>
            <p>
              <RiExternalLinkLine />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/cat.jpg" width="800" height="1000" />
          <div className="flex justify-between items-center bg-gray-100 p-2 relative -mt-2 text-gray-900">
            <p className="text-sm font-medium">libero world</p>
            <p>
              <RiExternalLinkLine />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/cat.jpg" width="800" height="1000" />
          <div className="flex justify-between items-center bg-gray-100 p-2 relative -mt-2 text-gray-900">
            <p className="text-sm font-medium">freshouse</p>
            <p>
              <RiExternalLinkLine />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FeaturedWork;
