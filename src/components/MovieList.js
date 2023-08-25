const MovieList = (props) => {
    const FavouriteMovie = props.favourite
    return (
        <div className="bg-white rounded-md flex-row w-auto items-center justify-center">
            <div className='img-card cursor-pointer'>
                <img
                    src={props.movie.Poster}
                    className='object-none w-[100%] h-[400px] rounded hover:scale-105' alt={props.movie.Title}
                />
                <div className='overlay flex justify-center items-center'
                onClick={()=> props.handleAddFavouriteMovie(props.movie)}>
                    <FavouriteMovie/>
                </div>
            </div>
            <div className='text-center font-semibold p-1'>{props.movie.Title}</div>
        </div>
    )
}

export default MovieList