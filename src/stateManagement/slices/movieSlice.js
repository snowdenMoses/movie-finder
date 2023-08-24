import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getMovies = createAsyncThunk("get/movies", async (movieName="Avatar")=>{
    const movies = `http://www.omdbapi.com/?s=${movieName}&apikey=73bff0fa`
    const { data } = await Axios.get(movies);
    return data.Search
})

const initialStates = {
  movies: [],
  isLoading: false,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState: initialStates,
  extraReducers:(builder) => {
    builder
      .addCase(getMovies.pending, (state, action) => {
          state.isLoading = true
      })
      .addCase(getMovies.fulfilled, (state, action) => {
          state.movies = action.payload 
          state.isLoading = false

      })
    }
  },
);

// export const {setRemoveAssociatePrompt, 
//               setShowListOfProccessedAssociates, 
//               setShowViewAssociateModal,
//               setHidePopOver,
//               setOpenProcessedAssModal,
//               setShowListOfInProcessingAssociates,
//               setAssociatesCountry,
//               setAssociateDetails,
//               setShowProcessedAssociateDetailsModal,
//               setAssociateContactDropDown,
//               setShowSelectedAssociateDetails
//             } = associateSlice.actions
export default movieSlice;
