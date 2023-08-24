import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getMovies = createAsyncThunk("get/movies", async (movieName, pageNumber=2, hello)=>{
    const movies = `http://www.omdbapi.com/?s=${movieName}&apikey=73bff0fa&page=${pageNumber}&hello=${hello}`
    const { data } = await Axios.get(movies);
    return data
})

const initialStates = {
  movies: [],
  isLoading: false,
  defaultPage: 1,
  currentMovieName: ""
};

export const movieSlice = createSlice({
  name: "movies",
  initialState: initialStates,
  reducers:{
    reduceDefaultPage:(state, action)=>{
        state.defaultPage = state.defaultPage - action.payload
    },
    increaseDefaultPage:(state, action)=>{
        state.defaultPage = state.defaultPage + action.payload
    },
    setCurrentMovieName:(state, action)=>{
        state.currentMovieName = action.payload
    },
  },
  extraReducers:(builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
          state.isLoading = true
      })
      .addCase(getMovies.fulfilled, (state, action) => {
          state.movies = action.payload 
          state.isLoading = false

      })
    }
  },
);

export const {
  reduceDefaultPage,
  increaseDefaultPage,
  setCurrentMovieName
} = movieSlice.actions

export default movieSlice;
