import { WordPressTemplate } from "@faustwp/core";

export type WordPressTemplateProps = Parameters<
  typeof WordPressTemplate
>[number];

export type AcfBlockProps = {
  __typename: string;
  [key: string]: any;
};

export type AcfBlock<T extends AcfBlockProps> = {
  (props: T): JSX.Element;
  displayName: string[] | string;
};
