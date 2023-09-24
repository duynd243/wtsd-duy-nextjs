import { graphql } from "@/__generated__";
import { GetHomePageQuery } from "@/__generated__/graphql";
import AcfBlocksViewer from "@/wp-acf-blocks/AcfBlocksViewer";
import { FaustTemplate } from "@faustwp/core";
import Head from "next/head";

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const {
    title,
    pageBuilderFrontPage: { dynamicBlocks },
  } = props.data.page;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AcfBlocksViewer blocks={dynamicBlocks} />
    </>
  );
};

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId: databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = graphql(`
  query GetHomePage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      pageBuilderFrontPage {
        dynamicBlocks {
          __typename
          ...HeroFrontPageFragment
          ...FeaturedItemsFragment
          ...WhyChooseUsFragment
          ...PartnersFragment
          ...TestimonialFragment
          ...NewsLetterFrontPageFragment
        }
      }
    }
  }
`);

export default Component;
