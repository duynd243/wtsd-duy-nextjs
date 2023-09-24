import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { GetStaticPaths, GetStaticProps } from "next";
import { WordPressTemplateProps } from "../types";
import { getGlobalData } from "@/libs/graphql/utils";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return getWordPressProps({
    ctx,
    props: {
      globalData: await getGlobalData(),
    },
  });
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
