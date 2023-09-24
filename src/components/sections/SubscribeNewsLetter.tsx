import Image from "next/image";
import Button from "../Button";
import { GetGlobalDataQuery } from "@/__generated__/graphql";

type Props = {
  data: GetGlobalDataQuery["siteSettings"]["subscribeNewsLetter"];
};

const SubscribeNewsLetter = ({ data }: Props) => {
  return (
    <section className='relative pb-[157px] pt-[66px]'>
      <Image
        alt={data?.background?.altText}
        src={data?.background?.sourceUrl}
        fill
        className='-z-10 object-cover object-center brightness-75'
      />
      <div className='baseContainer'>
        <h2 className='text-center text-section-heading text-white'>
          {data?.heading}
        </h2>
        <p className='mx-auto mt-[24px] max-w-[630px] text-center text-section-description text-gainsboro'>
          {data?.description}
        </p>
        <div className='relative mx-auto mt-[88px] flex max-w-[676px] items-center justify-between rounded-full bg-white px-[8px] py-[7px]'>
          <div className='ml-3 flex-1'>
            <input
              type='email'
              className='w-full text-ellipsis border-none text-[16px] font-medium leading-[34px] outline-none placeholder:text-spanish-gray focus:ring-0 md:text-[20px]'
              placeholder='Enter your email address'
            />
          </div>
          <Button className='px-[22px] py-[10px]'>
            <span className='text-[20px] font-medium leading-[212.5%] text-white'>
              Subscribe
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsLetter;
