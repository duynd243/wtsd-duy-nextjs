import React from "react";
import Button from "./Button";

const FilterItem = ({ label }: { label: string }) => {
  return (
    <div className='flex items-center gap-x-2 text-[18px] font-semibold leading-[200%] text-spanish-gray'>
      {label}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='11'
        height='9'
        viewBox='0 0 11 9'
        fill='none'
      >
        <path
          d='M1 1.84943L5.23529 6.66864L10 1.84943'
          stroke='#9B9B9B'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
};

const FilterBar = () => {
  return (
    <div className='inline-flex flex-wrap items-center gap-x-[40px] rounded-lg bg-white p-[18px] shadow-filter-bar sm:flex-nowrap sm:rounded-full sm:p-[9px] sm:pl-[23px] md:gap-x-[87px]'>
      <FilterItem label='Location' />
      <FilterItem label='Date' />
      <FilterItem label='People' />
      <Button className='ml-auto mt-4 w-full rounded-lg px-[25.16px] py-[11.55px] text-[18px] font-semibold leading-[36px] sm:mt-0 sm:rounded-full'>
        Explore now
      </Button>
    </div>
  );
};

export default FilterBar;
