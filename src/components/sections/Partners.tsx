import { GetHomePageQuery } from "@/__generated__/graphql";
import { AcfBlock } from "@/types";
import Image from "next/image";
import React from "react";

type Props = Extract<
  GetHomePageQuery["page"]["pageBuilderFrontPage"]["dynamicBlocks"][number],
  { __typename: "Page_Pagebuilderfrontpage_DynamicBlocks_Partners" }
>;

const Partners: AcfBlock<Props> = (props) => {
  return (
    <section className='baseContainer'>
      <div className='text-center text-section-heading text-rich-black'>
        {props?.heading}
      </div>
      <p className='mx-auto mt-[20px] max-w-[630px] text-center text-section-description text-old-silver'>
        {props?.description}
      </p>

      <div className='mt-[68.81px] flex flex-wrap items-center justify-center gap-[83.32px]'>
        {props?.branchLogos?.map((logo, index) => (
          <Image
            key={index}
            src={logo?.logo?.sourceUrl}
            alt={logo?.logo?.altText || "Branch Logo"}
            width={100}
            height={100}
            className='h-auto w-auto'
          />
        ))}
      </div>
    </section>
  );
};

Partners.displayName = "Page_Pagebuilderfrontpage_DynamicBlocks_Partners";

export default Partners;
