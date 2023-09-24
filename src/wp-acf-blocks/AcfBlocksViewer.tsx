import { AcfBlock, AcfBlockProps } from "@/types";
import { getBlockComponent } from ".";

type Props<T> = {
  blocks: T;
};

const AcfBlocksViewer = <T extends Array<AcfBlockProps>>({
  blocks,
}: Props<T>) => {
  return (
    <>
      {blocks.map((block, index) => {
        const Component = getBlockComponent(block?.__typename) as
          | AcfBlock<T[number]>
          | undefined;
        if (!Component) return null;
        return <Component key={`${block?.__typename}_${index}`} {...block} />;
      })}
    </>
  );
};

export default AcfBlocksViewer;
