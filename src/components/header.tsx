import { montserrat } from "@/fonts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import { GetGlobalDataQuery } from "@/__generated__/graphql";

type Props = {
  items: GetGlobalDataQuery["acfOptionsHeader"]["headerMenuItems"];
};
const Header = ({ items }: Props) => {
  return (
    <header className='absolute inset-x-0 top-0 z-10 h-[152px] bg-transparent'>
      <div className='baseContainer flex h-full items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-x-[8.01px]'>
          <div className='relative aspect-square h-[38px] md:h-[46px]'>
            <Image src='/logo.svg' alt='logo' fill />
          </div>
          <span
            className={clsx(
              montserrat.className,
              "text-[28px] font-bold text-white md:text-[36px]"
            )}
          >
            Traveller
          </span>
        </Link>
        {/* Nav Links */}
        <div className='flex items-center'>
          <ul className='hidden items-center lg:flex lg:gap-x-[20px] xl:gap-x-[67px]'>
            {items?.menu?.map((item, index) => (
              <li key={index}>
                <HeaderItem item={item} />
              </li>
            ))}
          </ul>

          {/* Mobile hamburger menu button */}
          <button type='button' className='order-3 ml-4 p-1 lg:hidden'>
            <span className='sr-only'>Menu</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M3 12.5H21M3 6.5H21M9 18.5H21'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>

          {/* Search */}
          <button type='button' className='p-1 lg:ml-[20px] xl:ml-[67px]'>
            <span className='sr-only'>Search</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21'
              height='21'
              viewBox='0 0 21 21'
              fill='none'
            >
              <path
                d='M18.8651 21L11.7134 13.8503C10.1518 14.8804 8.26345 15.2944 6.41407 15.0121C4.56469 14.7299 2.88585 13.7715 1.70265 12.3224C0.51946 10.8734 -0.0839024 9.03693 0.00940887 7.1686C0.10272 5.30026 0.886066 3.53302 2.20775 2.20909C3.53153 0.886998 5.29889 0.103194 7.16752 0.00948759C9.03615 -0.0842188 10.8731 0.51884 12.3225 1.70186C13.7719 2.88488 14.7307 4.56368 15.0131 6.41309C15.2956 8.2625 14.8815 10.1509 13.8513 11.7126L21 18.8653L18.8651 21ZM7.54868 3.01917C6.34704 3.01837 5.1943 3.49493 4.34405 4.34399C3.4938 5.19305 3.01569 6.34508 3.01489 7.54663C3.0141 8.74818 3.49068 9.90084 4.33981 10.751C5.18893 11.6012 6.34103 12.0793 7.54267 12.0801C8.13766 12.0805 8.72691 11.9637 9.27676 11.7364C9.82661 11.5091 10.3263 11.1757 10.7473 10.7553C11.1683 10.3349 11.5024 9.83565 11.7304 9.28614C11.9585 8.73663 12.0761 8.14758 12.0765 7.55263C12.0769 6.95768 11.96 6.36848 11.7327 5.81867C11.5054 5.26886 11.172 4.7692 10.7515 4.34823C10.3311 3.92726 9.83185 3.59322 9.2823 3.36518C8.73275 3.13714 8.14367 3.01956 7.54868 3.01917Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
