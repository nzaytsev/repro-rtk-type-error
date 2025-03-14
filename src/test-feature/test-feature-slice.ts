import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { enhancedApi } from "../common/api/enhanced-api";

export const testFeatureSlice = createSlice({
  name: "test",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(
        isAnyOf(
          enhancedApi.endpoints.editIssue.matchFulfilled,
          enhancedApi.endpoints.editIssue.matchRejected
        ),
        (state, { meta: { arg } }) => {}
      )
      .addMatcher(
        enhancedApi.endpoints.getInfinite.matchFulfilled,
        (state, { payload }) => {
          // the ts error is here. infinite query payload should include pages
          payload.pages;
        }
      );
  },
});
