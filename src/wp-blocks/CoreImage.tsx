import { graphql } from "@/__generated__";
import { CoreImageFragmentFragment } from "@/__generated__/graphql";
import { WordPressBlock } from "@faustwp/blocks";
import Image from "next/image";
import React from "react";

const CoreImage: WordPressBlock<CoreImageFragmentFragment> = (props) => {
  return (
    <Image
      width={1000}
      height={1000}
      className='w-full rounded-[10px]'
      alt={props?.attributes?.alt || ""}
      src={props?.attributes?.src}
    />
  );
};

CoreImage.displayName = "CoreImage";

export default CoreImage;
