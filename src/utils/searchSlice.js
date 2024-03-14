import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    updateSearchResultCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { updateSearchResultCache } = searchSlice.actions;
export default searchSlice.reducer;
