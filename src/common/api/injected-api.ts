import {
  generatedTestApi,
  SearchAndReconsileIssuesUsingJqlPostApiArg,
  SearchAndReconsileIssuesUsingJqlPostApiResponse,
} from "./generated-api";

export const injectedApi = generatedTestApi.injectEndpoints({
  endpoints(build) {
    return {
      getInfinite: build.infiniteQuery<
        SearchAndReconsileIssuesUsingJqlPostApiResponse,
        SearchAndReconsileIssuesUsingJqlPostApiArg,
        string
      >({
        infiniteQueryOptions: {
          getNextPageParam(firstPage, allPages, firstPageParam, allPageParams) {
            return allPages[allPages.length - 1].nextPageToken;
          },
          initialPageParam: undefined!,
        },
        providesTags(result, error, arg, meta) {
          return ["Test"];
        },
        query({ queryArg, pageParam }) {
          return {
            url: `/test`,
            method: "POST",
            body: {
              ...queryArg,
              nextPageToken: pageParam,
            },
          };
        },
      }),
    };
  },
});
