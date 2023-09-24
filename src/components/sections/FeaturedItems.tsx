import { useState } from "react";
import FeaturedItemCard from "../FeaturedItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import PaginationButton from "../PaginationButton";
import { AcfBlock } from "@/types";
import { GetHomePageQuery } from "@/__generated__/graphql";

export type FeaturedItemsProps = Extract<
  GetHomePageQuery["page"]["pageBuilderFrontPage"]["dynamicBlocks"][number],
  {
    __typename: "Page_Pagebuilderfrontpage_DynamicBlocks_FeaturedItems";
  }
>;

const FeaturedItems: AcfBlock<FeaturedItemsProps> = (props) => {
  const [swiper, setSwiper] = useState<ReturnType<typeof useSwiper> | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='baseContainer pt-[178px]'>
      <div className='mx-auto max-w-[740px] text-center text-section-heading text-rich-black'>
        {props?.heading}
      </div>
      <p className='my-[29.06px] text-center text-section-description text-taupe-gray'>
        {props?.description}
      </p>

      <div className='flex items-center justify-between'>
        <PaginationButton
          onClick={() => swiper?.slidePrev()}
          direction='prev'
        />
        <PaginationButton
          onClick={() => swiper?.slideNext()}
          direction='next'
        />
      </div>

      <Swiper
        className='mt-[94.6px] !h-[calc(178px+530px)] !pt-3'
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        centeredSlides
        loop
        spaceBetween={21}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {props.featuredItemCard.map((item, index) => (
          <SwiperSlide key={index}>
            <FeaturedItemCard isActive={index === activeIndex} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

FeaturedItems.displayName =
  "Page_Pagebuilderfrontpage_DynamicBlocks_FeaturedItems";

export default FeaturedItems;
