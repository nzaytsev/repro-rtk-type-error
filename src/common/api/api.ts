import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const customBaseQuery: BaseQueryFn = async ({
  url,
  method,
  body,
  params,
}: {
  url: string;
  method?: Request["method"];
  body?: string | object;
  params?: object;
}) => {
  try {
    const searchParams = new URLSearchParams();
    Object.entries(params ?? {}).forEach(([key, value]) => {
      if (value) searchParams.append(key, value as string);
    });
    return {
      data: {} as any,
    };
  } catch (apRequestError) {
    const errorObject = { data: null, status: "" };
    errorObject.data = apRequestError.response?.data || apRequestError.message;
    errorObject.status = apRequestError.response?.status;
    throw errorObject;
  }
};

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
  tagTypes: ["Test"],
});
