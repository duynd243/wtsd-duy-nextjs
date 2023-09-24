import DefaultLayout from "@/layouts/DefaultLayout";
import "@/styles/globals.scss";
import blocks from "@/wp-blocks";
import { WordPressBlocksProvider } from "@faustwp/blocks";
import { FaustProvider } from "@faustwp/core";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "sonner";
import "swiper/css";
import "../../faust.config";
import { GetGlobalDataQuery } from "@/__generated__/graphql";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <WordPressBlocksProvider
        config={{
          blocks,
        }}
      >
        <Toaster duration={5000} />
        <DefaultLayout globalData={pageProps?.globalData as GetGlobalDataQuery}>
          <Component {...pageProps} key={router.asPath} />
        </DefaultLayout>
      </WordPressBlocksProvider>
    </FaustProvider>
  );
}
