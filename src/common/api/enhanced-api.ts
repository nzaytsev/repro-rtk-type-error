import { injectedApi } from "./injected-api";

export const enhancedApi = injectedApi.enhanceEndpoints({
  endpoints: {
    searchAndReconsileIssuesUsingJqlPost: {}
  },
});
