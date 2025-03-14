import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { testApi } from "../common/api/api";

const rootReducer = combineReducers({
  [testApi.reducerPath]: testApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(testApi.middleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
