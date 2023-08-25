import { useEffect, useState } from 'react';
import './App.css';
import { getMovies, setCurrentMovieName } from './stateManagement/slices/movieSlice';
import { useDispatch, useSelector } from "react-redux"
import SearchBox from './components/reuseables/SearchBox';
import Button from './components/reuseables/Button';
import LoadingSpinner from './components/reuseables/LoadingSpinner';
import Layout from './components/Layout';
import Pagination from './components/Pagination';
import MovieList from './components/MovieList';
import AddToFavourite from './components/AddToFavourite';
import RemoveFromFavourite from './components/RemoveFromfavourite';


function App() {
  const [movieName, setMoviename] = useState("")
  const [favouriteMovies, setFavouriteMovies] = useState([])
  const [onFavouriteClicked, setOnFavouriteClicked] = useState(false)

  console.log("favouriteMovie", favouriteMovies);

  const { movies, isLoading, defaultPage, currentMovieName } = useSelector(state => state.movieSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies(currentMovieName, defaultPage))
  }, [defaultPage])

  useEffect(() => {
    const persistedFavouriteMovies = JSON.parse(localStorage.getItem("IMDB Movies"))
    setFavouriteMovies(persistedFavouriteMovies)
  }, [])

  const handleMovieSearch = () => {
    dispatch(getMovies(movieName, 1))
    dispatch(setCurrentMovieName(movieName))
    setMoviename('')
  }

  const saveToLocalStorage = (movies) => {
    localStorage.setItem("IMDB Movies", JSON.stringify(movies))
  }

  const addFavouriteMovie = (movie) => {
    const updatedFavouriteMovie = [...favouriteMovies, movie]
    setFavouriteMovies(updatedFavouriteMovie)
    saveToLocalStorage(updatedFavouriteMovie)
  }

  const removeFavouriteMovie = (movie) => {
    const updatedFavouriteMovie = favouriteMovies.filter((favouriteMovie) => favouriteMovie.imdbID != movie.imdbID)
    setFavouriteMovies(updatedFavouriteMovie)
    saveToLocalStorage(updatedFavouriteMovie)
  }



  return (
    <>
      {!onFavouriteClicked ?
        <div className='flex-row items-center bg-black text-[red] overflow-hidden w-auto h-full mx-10 p-10 my-10 rounded-md'>
          <Layout text="Find That Movie" />
          <div className='flex justify-between items-center py-5'>
            <div className='flex justify-start py-3'>
              <SearchBox searchWord={movieName} setSearchWord={setMoviename} />
              <Button handleMovieSearch={handleMovieSearch}>Search</Button>
            </div>
            <div className='flex justify-end items-center'>
              <div className={`font-bold cursor-pointer mr-2 font-custom ${!onFavouriteClicked ? 'border-b-2 border-[red]' : ""}`} onClick={() => { setOnFavouriteClicked(false) }}>Home</div>
              <div className={`font-bold cursor-pointer font-custom ${onFavouriteClicked ? 'border-b-2 border-[red]' : ""}`} onClick={() => { setOnFavouriteClicked(true) }}>Favourites</div>
            </div>
          </div>
          {isLoading &&
            <div className='w-screen h-screen flex justify-center items-center'>
              <LoadingSpinner />
            </div>}
          <div className="flex items-center justify-center w-full h-full">
            <div className="grid grid-cols-4 gap-4">
              {movies?.Search?.length > 0 ? movies?.Search?.map((movie, index) => {
                return <MovieList
                  key={index}
                  movie={movie}
                  handleAddFavouriteMovie={addFavouriteMovie}
                  favourite={AddToFavourite} />
              })
                :
                <div className=' flex justify-center items-center'>
                  <span className='p-10 font-bold text-lg rounded-md border-2 border-[red] font-custom'>Please Search for a Movie </span>
                </div>
              }
            </div>
          </div>
          {movies?.Search?.length > 0 && <Pagination movieName={movieName} />}
        </div>
        :

        <div className='flex-row items-center bg-black text-[red] overflow-hidden w-auto h-full mx-10 p-10 my-10 rounded-md'>
          <Layout text="Favourite Movies" />
          <div className='flex justify-end items-center py-5'>
            <div className={`font-bold cursor-pointer mr-2 font-custom ${!onFavouriteClicked ? 'border-b-2 border-[red]' : ""}`} onClick={() => { setOnFavouriteClicked(false) }}>Home</div>
            <div className={`font-bold cursor-pointer font-custom ${onFavouriteClicked ? 'border-b-2 border-[red]' : ""}`} onClick={() => { setOnFavouriteClicked(true) }}>Favourites</div>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <div className="grid grid-cols-4 gap-4">
              {favouriteMovies?.length > 0 && favouriteMovies?.map((movie, index) => {
                return <MovieList
                  key={index}
                  movie={movie}
                  handleAddFavouriteMovie={removeFavouriteMovie}
                  favourite={RemoveFromFavourite} />
              })}
            </div>
            {favouriteMovies?.length == 0 &&
              <div className='font-custom font-bold border-2 border-[red] rounded p-3'>
                Your Favourite Movie List is Empty
              </div>}
          </div>
          {favouriteMovies?.length > 0 && <Pagination movieName={movieName} />}
        </div>}
    </>
  );
}

export default App;
