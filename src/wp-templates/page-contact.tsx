import { graphql } from "@/__generated__";
import { GetPageContactQuery } from "@/__generated__/graphql";
import Contact from "@/components/sections/Contact";
import AcfBlocksViewer from "@/wp-acf-blocks/AcfBlocksViewer";
import { FaustTemplate } from "@faustwp/core";
import Head from "next/head";

const PageContact: FaustTemplate<GetPageContactQuery> = (props) => {
  return (
    <>
      <Head>
        <title>{props?.data?.page?.title}</title>
      </Head>
      <AcfBlocksViewer blocks={props?.data?.page?.pageBuilder?.dynamicBlocks} />
      <Contact />
    </>
  );
};

PageContact.variables = ({ databaseId }, ctx) => {
  return {
    databaseId: databaseId,
    asPreview: ctx?.asPreview,
  };
};

PageContact.query = graphql(`
  query GetPageContact($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      pageBuilder {
        dynamicBlocks {
          __typename
          ...BreadcrumbFragment
        }
      }
    }
  }
`);

export default PageContact;
