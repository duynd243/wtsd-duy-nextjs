import { montserrat } from "@/fonts";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { GetGlobalDataQuery } from "@/__generated__/graphql";

type Props = {
  data: GetGlobalDataQuery;
};

const Footer = ({ data: { siteSettings, acfOptionsFooter } }: Props) => {
  return (
    <footer>
      <div className='baseContainer mx-auto grid gap-y-3 py-[70px] md:grid-cols-12 md:grid-rows-3 lg:grid-rows-1 lg:gap-x-8'>
        <div className='md:col-span-12 lg:col-span-4'>
          <div className='flex items-center gap-x-[14.77px]'>
            <Image
              alt={siteSettings?.siteInformation?.siteLogo?.altText}
              src={siteSettings?.siteInformation?.siteLogo?.sourceUrl}
              width={76.077}
              height={84.382}
            />
            <span
              className={cn(
                montserrat.className,
                "text-[47.608px] font-medium leading-[34px] text-black"
              )}
            >
              {siteSettings?.siteInformation?.siteName}
            </span>
          </div>
          <p className='mt-[3.62px] text-[18px] font-medium leading-[25px]	text-dim-gray'>
            {siteSettings?.siteInformation?.siteDescription}
          </p>
        </div>

        <div className='md:col-span-6 lg:col-span-3'>
          <span className='footerHeading'>
            {siteSettings?.contactInformation?.contactInformationHeading}
          </span>
          <ul className='space-y-[7px]'>
            {siteSettings?.contactInformation?.contactItems.map((item) => {
              const LinkComponent = item?.url ? Link : "span";
              return (
                <li key={item.text} className='flex items-center gap-[6px]'>
                  <Image
                    alt={item.icon.altText || ""}
                    src={item.icon.sourceUrl}
                    width={20}
                    height={20}
                  />
                  <LinkComponent href={item.url} className='footerItem'>
                    {item.text}
                  </LinkComponent>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='md:col-span-6 lg:col-span-3'>
          <span className='footerHeading'>
            {acfOptionsFooter?.quickLinks?.quickLinksHeading}
          </span>
          <ul className='space-y-[7px]'>
            {acfOptionsFooter?.quickLinks?.links.map((link) => (
              <li key={link.link.url} className='footerItem'>
                <Link target={link.link.target} href={link.link.url}>
                  {link.link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='md:col-span-12 lg:col-span-2'>
          <span className='footerHeading'>Follow Us</span>
          <ul className='flex flex-wrap items-center gap-[27px]'>
            {acfOptionsFooter?.socialLinks?.socialLinks?.map((link) => (
              <li key={link?.link?.url}>
                <Link target={link?.link?.target} href={link?.link?.url}>
                  <Image
                    alt={link?.icon?.altText || ""}
                    src={link?.icon?.sourceUrl}
                    width={23}
                    height={23}
                    className='h-[23px] w-[23px] grayscale transition-all hover:grayscale-0'
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='bg-black py-[44px] text-center'>
        <span className='text-[18px] font-medium leading-[34px] text-gainsboro'>
          {siteSettings?.siteInformation?.copyrightText}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
