import { MostRecentPostsFragmentFragment } from "@/__generated__/graphql";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = MostRecentPostsFragmentFragment["posts"]["nodes"][number];

const RecentPostCard = ({ title, date, slug, featuredImage }: Props) => {
  return (
    <div className='flex gap-x-[26px]'>
      <div className='relative h-[100px] w-[150px] shrink-0 bg-silver-sand'>
        {featuredImage?.node?.sourceUrl ? (
          <Image
            width={150}
            height={100}
            src={featuredImage.node.sourceUrl}
            alt={title}
            className='h-full w-full object-cover object-center'
          />
        ) : (
          <span className='text-gray-700 absolute inset-0 flex select-none items-center justify-center'>
            No Image
          </span>
        )}
      </div>
      <div className='text-[18px]'>
        <Link
          href={`/${slug}`}
          className='line-clamp-2 font-medium leading-[150%] text-black'
        >
          {title}
        </Link>
        <div className='mt-[18px] font-light leading-[183.333%] text-jet'>
          {new Date(date)
            .toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
            .replace(",", "")}
        </div>
      </div>
    </div>
  );
};

export default RecentPostCard;
