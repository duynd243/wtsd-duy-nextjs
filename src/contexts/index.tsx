"use client";

import { GetGlobalDataQuery } from "@/__generated__/graphql";
import { createContext, useContext } from "react";

type RootContextType = {
  globalData: GetGlobalDataQuery;
};

export const RootContext = createContext<RootContextType | null>(null);

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRootContext must be used within RootContext");
  }
  return context;
};
