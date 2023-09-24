import { GetGlobalDataQuery } from "@/__generated__/graphql";
import { createApolloClient } from "@faustwp/core/dist/cjs/client";
import GetGlobalData from "@/libs/graphql/queries/GetGlobalData.gql";

export async function getGlobalData() {
  const client = createApolloClient();
  const { data } = await client.query<GetGlobalDataQuery>({
    query: GetGlobalData,
  });
  return data;
}
