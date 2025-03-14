/* eslint-disable import/no-unused-modules */
import type { ConfigFile } from "@rtk-query/codegen-openapi";

const baseApiPath = "./src/common/api/api.ts";

export const outputApiPath = "./src/common/api/generated-api.ts";

const config: ConfigFile = {
  schemaFile:
    "https://dac-static.atlassian.com/cloud/jira/platform/swagger-v3.v3.json",
  apiFile: baseApiPath,
  apiImport: "testApi",
  outputFile: outputApiPath,
  exportName: "generatedTestApi",
  hooks: false,
  endpointOverrides: [
    {
      pattern: ["searchAndReconsileIssuesUsingJqlPost"],
      type: "query",
    },
  ],
  filterEndpoints: ["searchAndReconsileIssuesUsingJqlPost", "editIssue"],
};

export default config;
