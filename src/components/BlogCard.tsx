import {
  CoreParagraph,
  MostRecentPostsFragmentFragment,
} from "@/__generated__/graphql";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { cn } from "@/utils";

type Props = {
  className?: string;
  data: MostRecentPostsFragmentFragment["posts"]["nodes"][number];
  withImage?: boolean;
};

const BlogCard = ({ className, data, withImage }: Props) => {
  const firstParagraph = data?.editorBlocks?.find(
    (block) =>
      block?.__typename === "CoreParagraph" && block?.attributes?.content
  ) as CoreParagraph;
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-[10px] shadow-blog-card",
        className
      )}
    >
      {withImage && (
        <div className='relative h-[400px] xl:h-[679px]'>
          <Image
            src={data?.featuredImage?.node?.sourceUrl}
            className='-z-10 object-cover object-center'
            fill
            sizes={data?.featuredImage?.node?.sizes}
            alt={data?.title}
          />
        </div>
      )}
      <div className='flex min-h-0 flex-1 flex-col bg-white px-[30px] py-[17.5px] lg:px-[60px] lg:py-[35px]'>
        <div className='text-blog-card-categories text-black'>
          {data?.categories?.nodes
            ?.slice(0, 2)
            .map((category) => category?.name)
            .join(" | ")}{" "}
          <span
            className='ml-[6px] text-[75%] font-light italic text-jet'
            title={data?.categories?.nodes
              ?.slice(2)
              .map((category) => category?.name)
              .join(" | ")}
          >
            {data?.categories?.nodes?.length > 2 &&
              `${data?.categories?.nodes?.length - 2} more ...`}
          </span>
        </div>
        <Link
          href={`/${data?.slug}`}
          title={data?.title}
          className='mt-[10px] text-blog-card-title text-black'
        >
          <div className='line-clamp-2'>{data?.title}</div>
          {!withImage && <div>-</div>}
        </Link>
        <div className='my-[18px]'>
          <p
            className='line-clamp-3 max-h-full text-blog-card-desc text-jet'
            dangerouslySetInnerHTML={{
              __html: firstParagraph?.attributes?.content,
            }}
          ></p>
        </div>
        <div className='mt-auto shrink-0'>
          <Button>
            <Link
              href={`/${data?.slug}`}
              className='block px-[40px] text-blog-card-categories font-medium leading-[291.667%]'
            >
              Read More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
