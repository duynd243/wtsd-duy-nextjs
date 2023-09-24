import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import PaginationButton from "../PaginationButton";
import TestimonialCard from "../TestimonialCard";
import { AcfBlock } from "@/types";
import { GetHomePageQuery } from "@/__generated__/graphql";

export type TestimonialProps = Extract<
  GetHomePageQuery["page"]["pageBuilderFrontPage"]["dynamicBlocks"][number],
  {
    __typename: "Page_Pagebuilderfrontpage_DynamicBlocks_Testimonial";
  }
>;

const Testimonial: AcfBlock<TestimonialProps> = (props) => {
  const [swiper, setSwiper] = useState<ReturnType<typeof useSwiper> | null>(
    null
  );
  return (
    <section className='baseContainer overflow-hidden py-[178px]'>
      <div className='text-[30px] font-medium leading-[233.333%] tracking-[4.2px] text-granite-gray'>
        {props?.sectionTitle}
      </div>
      <div className='text-section-heading leading-[116.667%] text-rich-black'>
        {props?.heading}
      </div>
      <div className='mb-[42.14px] mt-[18px] text-section-description text-granite-gray'>
        {props?.description}
      </div>
      <div className='mb-[calc(69.25px+3.5rem)] flex justify-end space-x-[50px] md:space-x-[80px]'>
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
        className='!overflow-visible'
        spaceBetween={43}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3.25,
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {props?.card?.map((card, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='container mx-auto px-[calc(30px-2.25rem)] lg:px-[calc(40px-2.25rem)] xl:px-[calc(70px-2.25rem)]'></div>
    </section>
  );
};

Testimonial.displayName = "Page_Pagebuilderfrontpage_DynamicBlocks_Testimonial";

export default Testimonial;
