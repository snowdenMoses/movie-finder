import { useEffect, useState } from 'react';
import './App.css';
import {getMovies, setCurrentMovieName} from './stateManagement/slices/movieSlice';
import {useDispatch, useSelector} from "react-redux"
import SearchBox from './components/reuseables/SearchBox';
import Button from './components/reuseables/Button';
import LoadingSpinner from './components/reuseables/LoadingSpinner';
import Layout from './components/Layout';
import Pagination from './components/Pagination';
import MovieList from './components/MovieList';


function App() {
  const [movieName, setMoviename] = useState("")
  
  const { movies, isLoading, defaultPage, currentMovieName } = useSelector(state => state.movieSlice)
  const dispatch = useDispatch()

  console.log("defaultPage", typeof defaultPage);
  useEffect(()=>{
     dispatch(getMovies(currentMovieName, defaultPage))
  }, [defaultPage])

  const handleMovieSearch = ()=>{
    dispatch(getMovies(movieName, 1))
    dispatch(setCurrentMovieName(movieName))
    setMoviename('')
  }


  
  return (
    <div className='flex-row items-center bg-black text-[red] overflow-hidden w-auto h-full mx-10 p-2 my-10 rounded-md'>
        <Layout/>
        <div className='flex justify-start py-3'>
            <SearchBox searchWord={movieName} setSearchWord={setMoviename}/>
            <Button handleMovieSearch={handleMovieSearch}>Search</Button>
        </div>
        {isLoading &&
          <div className='w-screen h-screen flex justify-center items-center'>  
            <LoadingSpinner/> 
        </div>}
        <div className="flex items-center justify-center w-full h-full">
          <div className="grid grid-cols-4 gap-4">
            {movies?.Search?.length > 0 ? movies?.Search?.map((movie, index) => {
              return <MovieList key={index} Title={movie.Title} Poster={movie.Poster} /> 
            })
          :
          <div className='w-screen h-screen flex justify-center items-center'>
              <span className='p-10 font-bold text-lg rounded-md border-2 border-[red]'>Please Search for a Movie </span>
          </div>
            }
          </div>
        </div>
        {movies?.Search?.length > 0 && <Pagination movieName={movieName}/>}
    </div>
  );
}

export default App;
