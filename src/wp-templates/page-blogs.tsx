import { graphql } from "@/__generated__";
import { GetBlogsPageQuery } from "@/__generated__/graphql";
import BlogListing from "@/components/sections/BlogListing";
import AcfBlocksViewer from "@/wp-acf-blocks/AcfBlocksViewer";
import { FaustTemplate } from "@faustwp/core";
import Head from "next/head";

const PageBlogs: FaustTemplate<GetBlogsPageQuery> = (props) => {
  return (
    <>
      <Head>
        <title>{props?.data?.page?.title}</title>
      </Head>
      <AcfBlocksViewer blocks={props?.data?.page?.pageBuilder?.dynamicBlocks} />
      <BlogListing blogs={props?.data?.posts?.nodes} />
    </>
  );
};

PageBlogs.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
    numberOfPosts: 6,
  };
};

PageBlogs.query = graphql(`
  query GetBlogsPage(
    $databaseId: ID!
    $asPreview: Boolean = false
    $numberOfPosts: Int
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      pageBuilder {
        dynamicBlocks {
          __typename
          ...BreadcrumbFragment
        }
      }
    }
    ...MostRecentPostsFragment
  }
`);

export default PageBlogs;
