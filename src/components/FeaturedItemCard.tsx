import { cn } from "@/utils";
import Image from "next/image";
import { FeaturedItemsProps } from "./sections/FeaturedItems";

type Props = {
  isActive?: boolean;
} & FeaturedItemsProps["featuredItemCard"][number];

const FeaturedItemCard = ({ isActive, ...props }: Props) => {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-[10px] transition-all duration-700",
        {
          "-translate-y-3 shadow-featured-item-card": isActive,
        }
      )}
    >
      <div
        className={cn(
          "relative h-[361px] overflow-hidden transition-all duration-700",
          {
            "h-[316px]": isActive,
          }
        )}
      >
        <Image
          fill
          sizes={props.image?.sizes}
          alt={props.image?.altText || "Featured Item"}
          src={props.image?.sourceUrl}
          className='h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105'
        />
      </div>

      {isActive && (
        <div className='relative bg-white px-[19px] pb-[26.39px] pt-[34.55px]'>
          <div className='absolute -top-[19.75px] right-[30px] flex aspect-square w-[79px] items-center justify-center rounded-full bg-white drop-shadow-card-icon'>
            <svg
              width='25'
              height='18'
              viewBox='0 0 25 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M24.984 0.0685592C24.312 2.85256 23.64 5.87656 22.968 9.14056C22.296 12.3566 21.768 15.2126 21.384 17.7086H14.544L14.04 16.9166C14.712 14.3726 15.624 11.5886 16.776 8.56456C17.928 5.49256 19.104 2.66056 20.304 0.0685592H24.984ZM11.664 0.0685592C10.992 2.85256 10.32 5.87656 9.648 9.14056C8.976 12.3566 8.448 15.2126 8.064 17.7086H1.296L0.864 16.9166C1.536 14.3726 2.424 11.5886 3.528 8.56456C4.68 5.49256 5.856 2.66056 7.056 0.0685592H11.664Z'
                fill='black'
              />
            </svg>
          </div>
          <div className='text-[24px] font-semibold text-black'>
            {props.heading}
          </div>
          <p className='mt-[6.85px] line-clamp-3 text-[14px] font-medium text-davy-grey'>
            {props.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeaturedItemCard;
