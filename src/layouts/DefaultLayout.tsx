import SubscribeNewsLetter from "@/components/sections/SubscribeNewsLetter";
import { poppins } from "@/fonts";
import { cn } from "@/utils";

import { PropsWithChildren } from "react";

import { GetGlobalDataQuery } from "@/__generated__/graphql";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RootContext } from "@/contexts";

type Props = PropsWithChildren<{
  globalData: GetGlobalDataQuery;
}>;

const DefaultLayout = ({ children, globalData }: Props) => {
  return (
    <RootContext.Provider
      value={{
        globalData,
      }}
    >
      <Header items={globalData?.acfOptionsHeader?.headerMenuItems} />
      <main className={cn(poppins.className, "relative")}>
        {children}
        <SubscribeNewsLetter
          data={globalData?.siteSettings?.subscribeNewsLetter}
        />
      </main>
      <Footer data={globalData} />
    </RootContext.Provider>
  );
};

export default DefaultLayout;
