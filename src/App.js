import { useEffect, useState } from 'react';
import './App.css';
import movieSlice, {getMovies} from './stateManagement/slices/movieSlice';
import {useDispatch, useSelector} from "react-redux"


// api = http://www.omdbapi.com/?i=tt3896198&apikey=73bff0fa
function App() {
  const [movieName, setMoviename] = useState('avatar')
  
  const { movies } = useSelector(state => state.movieSlice)
  console.log("movies", movies.Search);
  const dispatch = useDispatch()
  
  useEffect(()=>{
     dispatch(getMovies(movieName))
  }, [movieName])
  
  return (
    <>
    <div className='font-bold ml-5'>Hello</div>
    </>
  );
}

export default App;
