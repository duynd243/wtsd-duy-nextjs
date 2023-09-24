import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import ChooseUsCard from "../ChooseUsCard";
import PaginationButton from "../PaginationButton";
import { AcfBlock } from "@/types";
import { GetHomePageQuery } from "@/__generated__/graphql";

export type WhyChooseUsProps = Extract<
  GetHomePageQuery["page"]["pageBuilderFrontPage"]["dynamicBlocks"][number],
  {
    __typename: "Page_Pagebuilderfrontpage_DynamicBlocks_WhyChooseUs";
  }
>;

const WhyChooseUs: AcfBlock<WhyChooseUsProps> = (props) => {
  const [swiper, setSwiper] = useState<ReturnType<typeof useSwiper> | null>(
    null
  );
  return (
    <section className='relative pt-[26.31px]'>
      <div className='absolute inset-0 h-[542px] w-full object-cover object-center'>
        <Image
          alt={props?.background?.altText || "Why Choose Us"}
          fill
          src={props?.background?.sourceUrl}
          className='h-full w-full object-cover object-center brightness-75 contrast-125'
        />
      </div>
      <div className='baseContainer relative'>
        <div className='text-center text-section-heading text-white'>
          {props?.heading}
        </div>
        <p className='mt-[6.15px] text-center text-section-description text-bright-gray'>
          {props?.description}
        </p>

        <div className='mt-[17.6px] flex items-center justify-between'>
          <PaginationButton
            onClick={() => swiper?.slidePrev()}
            direction='prev'
          />
          <PaginationButton
            onClick={() => swiper?.slideNext()}
            direction='next'
          />
        </div>

        <div className='relative mt-[75.86px] overflow-hidden pb-[178px]'>
          <Swiper
            className='!mx-[50px] !overflow-visible md:!mx-[100px]'
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 69.41,
              },
            }}
            spaceBetween={50}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            {props.card.map((item, index) => (
              <SwiperSlide key={index}>
                <ChooseUsCard key={index} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = "Page_Pagebuilderfrontpage_DynamicBlocks_WhyChooseUs";

export default WhyChooseUs;
