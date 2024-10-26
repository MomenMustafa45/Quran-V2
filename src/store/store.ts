import { configureStore } from "@reduxjs/toolkit";
import pageIndexSlice from "./reducers/pageIndexSlice";
import surahIndexSlice from "./reducers/surahIndex";
import juzIndexSlice from "./reducers/juzIndexSlice";
// ...

export const store = configureStore({
  reducer: {
    pageIndex: pageIndexSlice,
    surahIndex: surahIndexSlice,
    juzIndex: juzIndexSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
