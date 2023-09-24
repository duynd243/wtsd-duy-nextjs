import Breadcrumb from "@/components/Breadcrumb";
import FeaturedItems from "@/components/sections/FeaturedItems";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Testimonial from "@/components/sections/Testimonial";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { AcfBlock, AcfBlockProps } from "@/types";

export const possibleBlocks = {
  Hero,
  FeaturedItems,
  WhyChooseUs,
  Partners,
  Testimonial,
  Breadcrumb,
} satisfies Record<string, AcfBlock<AcfBlockProps>>;

export const getBlockComponent = (__typename: string) => {
  return Object.values(possibleBlocks).find((block) => {
    if (typeof block.displayName === "string")
      return block.displayName === __typename;
    if (Array.isArray(block.displayName)) {
      return block.displayName.includes(__typename);
    }
    return false;
  });
};
