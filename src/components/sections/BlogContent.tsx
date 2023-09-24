import { GetPostQuery } from "@/__generated__/graphql";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import { flatListToHierarchical } from "@faustwp/core";
import BlogCommentForm from "../BlogCommentForm";
import BlogComments from "../BlogComments";
import RecentPostCard from "../RecentPostCard";

type Props = {
  postData: GetPostQuery["post"];
  recentPosts: GetPostQuery["posts"]["nodes"];
  categories: GetPostQuery["categories"]["nodes"];
};

const BlogContent = (props: Props) => {
  const { editorBlocks, tags } = props.postData;

  const mostRecentPosts = props.recentPosts;

  const mostRecentPostsWithoutCurrentPost = mostRecentPosts?.filter(
    (p) => p?.databaseId !== props?.postData?.databaseId
  );

  const allCategories = props.categories;

  const comments = props.postData.comments.nodes;

  const blocks = flatListToHierarchical(editorBlocks);
  return (
    <section className='baseContainer py-[178px]'>
      <div className='grid xl:grid-cols-12 xl:gap-x-[58px]'>
        <div className='xl:col-span-8'>
          <article className='blogContent prose max-w-none'>
            <WordPressBlocksViewer blocks={blocks} />
          </article>

          {/* Tags */}
          <div className='mb-[64px] mt-[53px] flex flex-wrap items-center justify-between gap-[20px]'>
            <div className='text-[18px] leading-[183.333%] text-jet'>
              <span className='font-light'>Tags: </span>
              <span className='font-medium'>
                {tags?.nodes?.length > 0
                  ? tags?.nodes?.map((tag) => tag?.name).join(", ")
                  : "No Tags"}
              </span>
            </div>

            <div className='flex items-center gap-x-[21px]'>
              <span>Share This :</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
              >
                <path
                  d='M26.0002 12.5781C26.0002 5.63125 20.4033 0 13.5002 0C6.59394 0.0015625 0.99707 5.63125 0.99707 12.5797C0.99707 18.8563 5.56894 24.0594 11.5439 25.0031V16.2141H8.37207V12.5797H11.5471V9.80625C11.5471 6.65469 13.4143 4.91406 16.2689 4.91406C17.6377 4.91406 19.0674 5.15938 19.0674 5.15938V8.25313H17.4908C15.9393 8.25313 15.4549 9.22344 15.4549 10.2188V12.5781H18.9205L18.3674 16.2125H15.4533V25.0016C21.4283 24.0578 26.0002 18.8547 26.0002 12.5781Z'
                  fill='black'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
              >
                <path
                  d='M12.6875 0C5.68106 0 0 5.68106 0 12.6875C0 19.6939 5.68106 25.375 12.6875 25.375C19.6939 25.375 25.375 19.6939 25.375 12.6875C25.375 5.68106 19.6939 0 12.6875 0ZM18.7849 9.56377C18.7934 9.69688 18.7934 9.83564 18.7934 9.97158C18.7934 14.129 15.6271 18.918 9.84131 18.918C8.05713 18.918 6.40322 18.3997 5.00986 17.5076C5.26475 17.5359 5.5083 17.5473 5.76885 17.5473C7.2415 17.5473 8.59521 17.0488 9.67422 16.2049C8.29219 16.1766 7.13105 15.2703 6.73457 14.0242C7.21885 14.095 7.65498 14.095 8.15342 13.9676C7.4418 13.823 6.80219 13.4365 6.34323 12.8738C5.88427 12.3111 5.63429 11.6068 5.63574 10.8807V10.841C6.05205 11.0761 6.54199 11.2205 7.05459 11.2403C6.62367 10.9531 6.27028 10.5641 6.02574 10.1076C5.78121 9.65114 5.65308 9.14138 5.65273 8.62354C5.65273 8.0373 5.80566 7.50205 6.08037 7.0376C6.87023 8.00994 7.85586 8.80519 8.97319 9.37166C10.0905 9.93813 11.3146 10.2632 12.5657 10.3256C12.1211 8.1874 13.7184 6.45703 15.6385 6.45703C16.5447 6.45703 17.3604 6.83652 17.9353 7.44824C18.6461 7.31514 19.3258 7.04893 19.9318 6.69209C19.6968 7.41992 19.204 8.03447 18.5498 8.42246C19.1842 8.35449 19.7959 8.17891 20.3623 7.93252C19.9347 8.56123 19.3994 9.11914 18.7849 9.56377Z'
                  fill='black'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
              >
                <path
                  d='M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM10.5729 19.8027H7.73792V10.6794H10.5729V19.8027ZM9.13792 9.55937C8.2425 9.55937 7.66354 8.925 7.66354 8.14042C7.66354 7.33979 8.26 6.72437 9.17437 6.72437C10.0887 6.72437 10.6487 7.33979 10.6662 8.14042C10.6662 8.925 10.0887 9.55937 9.13792 9.55937ZM20.9271 19.8027H18.0921V14.7467C18.0921 13.5698 17.6808 12.7706 16.6556 12.7706C15.8725 12.7706 15.4073 13.3117 15.2017 13.8323C15.1258 14.0175 15.1069 14.28 15.1069 14.541V19.8012H12.2704V13.5888C12.2704 12.4498 12.234 11.4975 12.196 10.6779H14.6592L14.789 11.9452H14.8458C15.2192 11.3502 16.1335 10.4723 17.6633 10.4723C19.5285 10.4723 20.9271 11.7221 20.9271 14.4083V19.8027Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
          <hr className='border-silver-sand' />

          {/* Comments */}
          <div className='mt-[64px] space-y-[50px] xl:mt-[178px]'>
            <BlogComments comments={comments} />
            <BlogCommentForm postDatabaseId={props?.postData?.databaseId} />
          </div>
        </div>
        {/* Sidebar Cards */}
        <div className='mt-[64px] space-y-[58px] xl:col-span-4 xl:mt-0'>
          {/* Recent Post */}
          <div className='blogSidebarCard'>
            <div className='title'>Recent Post</div>

            <div className='mt-[29px] space-y-[27px]'>
              {mostRecentPostsWithoutCurrentPost?.map((post) => (
                <RecentPostCard key={post?.databaseId} {...post} />
              ))}
            </div>
          </div>

          {/* Catagories */}
          <div className='blogSidebarCard'>
            <div className='title'>Catagories</div>
            <div className='mt-[29px]'>
              {allCategories?.map((category) => (
                <div
                  className='flex items-center gap-x-[32px] border-b border-silver-sand py-[8px]'
                  key={category?.id}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='16'
                    viewBox='0 0 20 16'
                    fill='none'
                  >
                    <path
                      d='M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928932C12.9526 0.538408 12.3195 0.538408 11.9289 0.928932C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM0 9H19V7H0V9Z'
                      fill='black'
                    />
                  </svg>
                  <span className='text-[18px] font-medium leading-[183.333%] text-jet'>
                    {category?.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Any Questions */}
          <div className='rounded-[10px] bg-silver-sand px-[42px] pb-[67px] pt-[21px] text-white'>
            <div className='text-[27px] font-semibold leading-[259.259%]'>
              Have Any Question?
            </div>
            <div className='mt-[13px]'>
              <p>
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
