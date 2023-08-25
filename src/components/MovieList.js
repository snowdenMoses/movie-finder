import { useState } from "react"

const MovieList = (props) => {
    const FavouriteMovie = props.favourite
    const [favouriteButtonClicked, setFavouriteButtonClicked] = useState()
    return (
        <div className="bg-white rounded-md flex-row w-auto items-center justify-center">
            <div className='img-card cursor-pointer'>
                <img
                    src={props.movie.Poster}
                    className='object-none w-[100%] h-[400px] rounded hover:scale-105 sm:w-screen' alt={props.movie.Title}
                />
                <div className='overlay flex justify-center items-center'
                    onClick={() => {
                        props.handleAddFavouriteMovie(props.movie)
                        setFavouriteButtonClicked(true)
                    }}>
                    <FavouriteMovie fillColor={`${favouriteButtonClicked ? "red" : "white"}`} />
                </div>
            </div>
            <div className='text-center font-bold p-1 font-custom'>{props.movie.Title}</div>
        </div>
    )
}

export default MovieList