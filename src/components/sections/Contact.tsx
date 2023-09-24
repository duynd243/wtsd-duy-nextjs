import { useRootContext } from "@/contexts";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Button from "../Button";
import Input from "../Input";
import InputError from "../InputError";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  to: z.string().email(),
  subject: z.string().min(2).max(100),
  message: z.string().min(2).max(500),
});

export type ContactSchema = z.infer<typeof contactSchema>;

const Contact = () => {
  const { globalData } = useRootContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactSchema> = async ({
    name,
    to,
    subject,
    message,
  }) => {
    try {
      await axios.post("/api/contact", {
        name,
        to,
        subject,
        message,
      } satisfies ContactSchema);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <section className='baseContainer py-[178px]'>
      <div className='flex flex-col items-center gap-[116px] lg:flex-row lg:items-start'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full max-w-[580px] rounded-[10px] px-[41px] py-[75px] shadow-blog-card'
        >
          <div className='space-y-[20px]'>
            <div className='space-y-2'>
              <Input
                {...register("name")}
                error={!!errors?.name?.message}
                placeholder='Your Name'
              />
              {errors.name && <InputError>{errors.name.message}</InputError>}
            </div>
            <div className='space-y-2'>
              <Input
                {...register("to")}
                error={!!errors?.to?.message}
                placeholder='Your Email'
              />
              {errors.to && <InputError>{errors.to.message}</InputError>}
            </div>
            <div className='space-y-2'>
              <Input
                {...register("subject")}
                error={!!errors?.subject?.message}
                placeholder='Subject'
              />
              {errors.subject && (
                <InputError>{errors.subject.message}</InputError>
              )}
            </div>
            <div className='space-y-2'>
              <Input
                {...register("message")}
                error={!!errors?.message?.message}
                placeholder='Message'
                isTextArea
              />
              {errors.message && (
                <InputError>{errors.message.message}</InputError>
              )}
            </div>
          </div>
          <Button disabled={isSubmitting} className='mt-[47px] w-full py-[8px]'>
            <span className='text-[20px] font-medium leading-[159.375%] lg:text-[32px]'>
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
          </Button>
        </form>
        <div className='w-full max-w-[675px]'>
          <div className='text-section-heading text-black lg:mt-[28px]'>
            Get In Touch
          </div>
          <p className='mt-[12px] text-section-description font-light text-jet'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <div className='mt-[47px] text-[24px] font-normal leading-[212.5%]'>
            Contact information
          </div>
          <ul className='mt-[12px] space-y-[23px]'>
            {globalData?.siteSettings?.contactInformation?.contactItems.map(
              (item) => {
                const LinkComponent = item?.url ? Link : "span";
                return (
                  <li key={item.text} className='flex items-center gap-[25px]'>
                    <Image
                      alt={item.icon.altText || ""}
                      src={item.icon.sourceUrl}
                      width={20}
                      height={20}
                    />
                    <LinkComponent
                      href={item.url}
                      className='text-[18px] font-normal leading-[122.222%] text-black'
                    >
                      {item.text}
                    </LinkComponent>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
