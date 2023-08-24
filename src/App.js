import { useEffect, useState } from 'react';
import './App.css';
import {getMovies} from './stateManagement/slices/movieSlice';
import {useDispatch, useSelector} from "react-redux"
import SearchBox from './components/reuseables/SearchBox';
import Button from './components/reuseables/Button';


// api = http://www.omdbapi.com/?i=tt3896198&apikey=73bff0fa
function App() {
  const [movieName, setMoviename] = useState("Avatar")
  
  const { movies, isLoading } = useSelector(state => state.movieSlice)
  const dispatch = useDispatch()
  
  useEffect(()=>{
     dispatch(getMovies)
  }, [movieName])

  const handleButtonClick = ()=>{
    dispatch(getMovies(movieName))
  }

  if(isLoading) return <div>Loading....</div>
  
  return (
    <div className='flex-row items-center bg-slate-100 w-full h-full'>
        <div className='flex justify-start p-3'>
            <SearchBox searchWord={movieName} setSearchWord={setMoviename}/>
            <Button handleButtonClick={handleButtonClick}>Search</Button>
        </div>
        <div className="flex items-center justify-center bg-slate-100 w-full h-full">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            {movies.map((movie, index) => {
              return(
                <div className="bg-white rounded-md" key={index}>
                  <img src={movie.Poster} height="500px" width="200px" className='w-300 h-500'/>
                  <div>{movie.Title}</div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  );
}

export default App;
