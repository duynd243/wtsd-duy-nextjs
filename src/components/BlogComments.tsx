import { GetPostQuery } from "@/__generated__/graphql";
import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  comments: GetPostQuery["post"]["comments"]["nodes"];
};

const BlogComments = ({ comments }: Props) => {
  return (
    <div>
      <div className='text-[36px] font-medium leading-[141.667%] text-black'>
        Comments ({comments?.length})
      </div>
      {comments?.length > 0 ? (
        <div className='mt-[24px] space-y-[30px]'>
          {comments?.map((comment) => (
            <div key={comment?.id}>
              <div className='flex items-center gap-[16px]'>
                <Image
                  src={
                    comment?.author?.node?.avatar?.url ?? "/images/avatar.png"
                  }
                  alt='avatar'
                  width={50}
                  height={50}
                  className='h-[50px] w-[50px] shrink-0 rounded-full object-cover'
                />
                <div>
                  <div className='space-x-[16px] text-[20px] font-medium'>
                    <span>{comment?.author?.node?.name}</span>
                    <span className='text-gray-500'>
                      {formatDistance(new Date(comment?.date), new Date(), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  {comment?.author?.node?.url && (
                    <Link
                      href={comment?.author?.node?.url}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='inline-flex items-center gap-x-[8px] text-[18px] font-medium text-ultramarine-blue hover:underline'
                    >
                      Visit Website
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z'></path>
                        <path d='M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z'></path>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
              <div
                className='commentContent mt-[10px] text-[20px] text-outer-space'
                dangerouslySetInnerHTML={{
                  __html: comment?.content,
                }}
                suppressHydrationWarning
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <p className='mt-[30px] text-jet'>
          This post currently has no comments.
        </p>
      )}
    </div>
  );
};

export default BlogComments;
