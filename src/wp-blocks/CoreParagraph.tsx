import { CoreParagraphFragmentFragment } from "@/__generated__/graphql";
import { cn } from "@/utils";
import { WordPressBlock } from "@faustwp/blocks";

const CoreParagraph: WordPressBlock<CoreParagraphFragmentFragment> = (
  props
) => {
  return (
    <p
      className={cn(
        "not-prose text-[18px] font-light leading-[183.333%] text-jet",
        {
          "text-center": props?.attributes?.align === "center",
          "text-right": props?.attributes?.align === "right",
        }
      )}
      dangerouslySetInnerHTML={{ __html: props?.attributes?.content || "" }}
    ></p>
  );
};

CoreParagraph.displayName = "CoreParagraph";

export default CoreParagraph;
