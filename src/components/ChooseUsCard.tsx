import Link from "next/link";
import React from "react";
import { WhyChooseUsProps } from "./sections/WhyChooseUs";
import Image from "next/image";

type Props = WhyChooseUsProps["card"][number];

const ChooseUsCard = (props: Props) => {
  return (
    <div className='h-[432.767px] overflow-hidden rounded-[10px] bg-white pl-[19.4px] pr-[22.13px] pt-[44.34px] shadow-choose-us-card'>
      <div className='relative flex h-[95.565px] w-[95.565px] items-center justify-center overflow-hidden rounded-[10px] bg-black'>
        <Image
          alt={props?.icon?.altText || "Choose Us"}
          src={props?.icon?.sourceUrl}
          width={100}
          height={100}
          className='h-[65px] w-[65px] object-cover object-center'
        />
      </div>
      <div className='mt-[33.12px] text-[24px] font-semibold'>
        {props?.heading}
      </div>
      <p className='text-[18px] font-medium text-old-silver'>
        {props?.description}
      </p>

      <Link
        className='mt-[38.55px] flex items-center gap-3 text-[18px] font-medium text-black'
        href={props?.url || "#"}
      >
        Learn more
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='31'
          height='13'
          viewBox='0 0 31 13'
          fill='none'
        >
          <path
            d='M30.6518 6.63269L20.6518 0.859188V12.4062L30.6518 6.63269ZM0.976196 7.63269H21.6518V5.63269H0.976196V7.63269Z'
            fill='black'
          />
        </svg>
      </Link>
    </div>
  );
};

export default ChooseUsCard;
