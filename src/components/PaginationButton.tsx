import { cn } from "@/utils";
import React from "react";

type Props = {
  direction: "prev" | "next";
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const PaginationButton = ({ direction, className, ...props }: Props) => {
  return (
    <button
      type='button'
      className={cn(
        "inline-flex aspect-square h-[50px] items-center justify-center rounded-md border border-platinum bg-white shadow-testimonial-card md:h-[80px]",
        className
      )}
      {...props}
    >
      <span className='sr-only'>
        {direction === "prev" ? "Previous" : "Next"}
      </span>
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 512 512'
        className='h-7 w-7 text-nickel'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='48'
          d={
            direction === "prev"
              ? "M328 112L184 256l144 144"
              : "M184 112l144 144-144 144"
          }
        ></path>
      </svg>
    </button>
  );
};

export default PaginationButton;
