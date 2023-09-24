import React from "react";
import FilterBar from "../FilterBar";
import Image from "next/image";
import { GetHomePageQuery } from "@/__generated__/graphql";
import { AcfBlock } from "@/types";

type Props = Extract<
  GetHomePageQuery["page"]["pageBuilderFrontPage"]["dynamicBlocks"][number],
  { __typename: "Page_Pagebuilderfrontpage_DynamicBlocks_Hero" }
>;

const Hero: AcfBlock<Props> = (props) => {
  return (
    <section className='relative'>
      <Image
        src={props?.image?.sourceUrl}
        alt={props.image.altText || "Hero Image"}
        fill
        priority
        className='-z-10 object-cover object-[80%_0px] brightness-[0.85] contrast-[1.1] md:object-center'
      />
      <div className='baseContainer pb-[113px] pt-[254.46px]'>
        <h1 className='max-w-[614px] text-hero-heading text-white'>
          {props.title}
        </h1>
        <p className='mt-[37.59px] font-medium leading-[200%] text-american-silver md:text-[18px]'>
          {props.description}
        </p>
        <div className='mt-[11.57px]'>
          <FilterBar />
        </div>
        <p className='mt-[36.63px] text-[18px] font-semibold text-bright-gray'>
          Popular Place:{" "}
          <span className='text-american-silver'>
            Bali, Istanbul, Rome, Paris.
          </span>
        </p>
      </div>
    </section>
  );
};

Hero.displayName = "Page_Pagebuilderfrontpage_DynamicBlocks_Hero";

export default Hero;
