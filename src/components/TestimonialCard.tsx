import Image from "next/image";
import { TestimonialProps } from "./sections/Testimonial";

type Props = TestimonialProps["card"][number];

const TestimonialCard = (props: Props) => {
  const numOfGrayStars = props?.ratingScore ? 5 - props.ratingScore : 0;
  return (
    <div className='relative h-[432px] rounded-[10px] bg-white px-[54px] shadow-testimonial-card'>
      <Image
        className='absolute inset-x-0 -top-14 mx-auto h-28 w-28 rounded-full bg-alice-blue object-cover'
        src={props?.avatar?.sourceUrl}
        alt={props?.avatar?.altText || "avatar"}
        width={300}
        height={300}
      />

      <div className='mb-[50px] pt-[83px]'>
        <div className='text-center text-[24px] font-semibold text-black'>
          {props?.reviewer}
        </div>
        <div className='text-center text-[18px] font-medium text-old-silver'>
          {props?.reviewerTitle}
        </div>
      </div>
      {new Array(props?.ratingScore).fill(0).map((_, index) => (
        <svg
          key={index}
          stroke='#F4BC61'
          fill='#F4BC61'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
          className='inline h-[21px] w-[21px]'
        >
          <path d='M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z'></path>
        </svg>
      ))}
      {new Array(numOfGrayStars).fill(0).map((_, index) => (
        <svg
          key={index}
          stroke='#e2e2e2'
          fill='#e2e2e2'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
          className='inline h-[21px] w-[21px]'
        >
          <path d='M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z'></path>
        </svg>
      ))}

      <p
        title={props?.comment}
        className='mt-[18px] line-clamp-3 font-medium leading-[28px] text-old-silver'
      >
        {props?.comment}
      </p>
    </div>
  );
};

export default TestimonialCard;
