import { MostRecentPostsFragmentFragment } from "@/__generated__/graphql";
import BlogCard from "../BlogCard";

type Props = {
  blogs: MostRecentPostsFragmentFragment["posts"]["nodes"];
};

const BlogListing = (props: Props) => {
  return (
    <section className='baseContainer py-[178px]'>
      <div className='text-center text-section-heading text-black'>
        Tips & Article
      </div>
      <p className='mx-auto mt-[25px] max-w-[852px] text-center text-[18px] font-light leading-[183.333%] text-dark-liver'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
      </p>

      <div className='mt-[104px]'>
        {/* Above XL */}
        <div className='hidden grid-cols-12 grid-rows-4 gap-[58px] xl:grid'>
          {props.blogs.map((blog, index) => {
            const isBig = index === 1 || index === 3;
            return (
              <BlogCard
                key={blog?.databaseId}
                className={
                  isBig ? "col-span-7 row-span-2" : "col-span-5 row-span-1"
                }
                data={blog}
                withImage={isBig}
              />
            );
          })}
        </div>

        {/* Below XL */}
        <div className='grid gap-10 md:grid-cols-2 xl:hidden'>
          {props.blogs.map((blog) => {
            return <BlogCard key={blog?.databaseId} data={blog} withImage />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
