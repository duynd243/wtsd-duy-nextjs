import {
  BreadcrumbFragmentFragment,
  GetPageContactQuery,
} from "@/__generated__/graphql";
import { AcfBlock } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = BreadcrumbFragmentFragment & {
  __typename: "Page_Pagebuilder_DynamicBlocks_Breadcrumb";
};

const Breadcrumb: AcfBlock<Props> = (props) => {
  return (
    <section className='relative flex h-[860px] items-center'>
      <Image
        src={props?.backgroundImage?.sourceUrl}
        alt={props?.backgroundImage?.altText}
        fill
        priority
        className='-z-10 object-cover object-center brightness-75'
      />
      <div className='baseContainer'>
        <div className='text-center text-breadcrumb-heading text-white'>
          {props?.title}
        </div>
        {props?.links && (
          <div className='flex items-center justify-center gap-[10px] text-breadcrumb-item'>
            {props?.links?.map((link, index) => (
              <React.Fragment key={link.link.url}>
                <Link
                  href={link.link.url}
                  className='font-medium leading-[70px] text-white'
                >
                  {link.link.title}
                </Link>
                {index !== props.links.length - 1 && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='11'
                    height='18'
                    viewBox='0 0 11 18'
                    fill='none'
                  >
                    <path
                      d='M11 9L2.222 0L0 2.2782L6.556 9L0 15.7218L2.222 18L11 9Z'
                      fill='white'
                    />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

Breadcrumb.displayName = "Page_Pagebuilder_DynamicBlocks_Breadcrumb";

export default Breadcrumb;
