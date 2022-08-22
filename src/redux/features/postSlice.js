import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get("https://covidnigeria.herokuapp.com/api");
    console.log(response);
    // dispatch(getPosts.fulfilled(response));
  } catch (error) {
    console.log(error);
  }
});

const postSlice = createSlice(({
  name: "posts",
  initialState: {
    posts: {},
    loading: false,
    error: "",
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
}));

export default postSlice.reducer;