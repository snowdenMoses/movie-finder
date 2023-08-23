import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getMovies = createAsyncThunk("get/movies", async (movieName)=>{
    const movies = `http://www.omdbapi.com/?s=${movieName}&apikey=73bff0fa`
    const { data } = await Axios.get(movies);
    return data
})

const initialStates = {
  componentsStates: {
    removeAssociatePrompt: false,
    showListOfProccessedAssociates: false,
    showViewAssociateModal: false,
    hidePopOver: false,
    openProcessedAssModal: false,
    showListOfInProcessingAssociates: false,
    showProcessedAssociateDetailsModal: false,
    associateContactDropDown: false,
    showSelectedAssociateDetails: false,
  },
  movies: [],
  isLoading: false,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState: initialStates,
//   reducers:{
//     updatePhotos: (state)=>{
//         state.photos = "New Photo"
//     },
//     setRemoveAssociatePrompt:(state, action)=>{
//         state.componentsStates.removeAssociatePrompt = action.payload
//     },
//     setShowListOfProccessedAssociates:(state, action)=>{
//         state.componentsStates.showListOfProccessedAssociates = action.payload
//     },
//     setShowViewAssociateModal:(state, action)=>{
//         state.componentsStates.showViewAssociateModal = action.payload
//     },
//     setHidePopOver:(state, action)=>{
//         state.componentsStates.hidePopOver = action.payload
//     },
//     setOpenProcessedAssModal:(state, action)=>{
//         state.componentsStates.openProcessedAssModal = action.payload
//     },
//     setShowListOfInProcessingAssociates:(state, action)=>{
//         state.componentsStates.showListOfInProcessingAssociates = action.payload
//     },
//     setAssociatesCountry:(state, action)=>{
//         state.associatesCountry = action.payload
//     },
//     setAssociateDetails:(state, action)=>{
//         state.associateDetails = action.payload
//     },
//     setShowProcessedAssociateDetailsModal:(state, action)=>{
//         state.associateDetails = action.payload
//     },
//     setAssociateContactDropDown:(state, action)=>{
//         state.associateContactDropDown = action.payload
//     },
//     setShowSelectedAssociateDetails:(state, action)=>{
//         state.showSelectedAssociateDetails = action.payload
//     },
//   },
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
