import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_MESSAGES_LIMIT } from "./constants";

const chatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
      state.messages.splice(LIVECHAT_MESSAGES_LIMIT, 1);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
