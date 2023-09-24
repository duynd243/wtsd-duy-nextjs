import {
  HeaderLinkFragmentFragment,
  HeaderLinkGroupFragmentFragment,
} from "@/__generated__/graphql";
import { Popover } from "@headlessui/react";
import Link from "next/link";

type Props = {
  item: HeaderLinkFragmentFragment | HeaderLinkGroupFragmentFragment;
};

const HeaderItem = (props: Props) => {
  const children = (
    <Popover className='relative flex items-center gap-x-[5px]'>
      <span className='text-[18px] font-semibold text-white/80 transition-colors'>
        {props?.item?.__typename ===
        "AcfOptionsHeader_Headermenuitems_Menu_LinkGroup"
          ? props?.item?.groupName
          : props?.item?.singleLink?.title}
      </span>
      {props?.item?.__typename ===
        "AcfOptionsHeader_Headermenuitems_Menu_LinkGroup" && (
        <Popover.Button>
          <span className='sr-only'>Open sub menu</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='10'
            viewBox='0 0 16 10'
            fill='none'
          >
            <path
              d='M8 10L16 2.02L13.9749 -8.85183e-08L8 5.96L2.02506 -6.10864e-07L-8.8297e-08 2.02L8 10Z'
              fill='white'
              fillOpacity='0.8'
            />
          </svg>
        </Popover.Button>
      )}
      <Popover.Panel className='absolute top-full z-10 bg-white p-4'>
        {props?.item?.__typename ===
          "AcfOptionsHeader_Headermenuitems_Menu_LinkGroup" &&
          props?.item?.links.map(({ link }) => (
            <Link key={link?.url} href={link?.url} target={link?.target}>
              {link?.title}
            </Link>
          ))}
      </Popover.Panel>
    </Popover>
  );

  return props?.item?.__typename ===
    "AcfOptionsHeader_Headermenuitems_Menu_LinkGroup" ? (
    children
  ) : (
    <Link href={props?.item?.singleLink?.url}>{children}</Link>
  );
};

export default HeaderItem;
