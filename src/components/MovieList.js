const MovieList = (props)=>{
    return(
     <div className="bg-white rounded-md flex-row w-auto items-center justify-center">
            <img 
              src={props.Poster} 
              className='object-none w-[100%] h-[400px] rounded hover:scale-105 hover:ease-in-out' alt={props.Title}
            />
            <div className='text-center font-semibold p-1'>{props.Title}</div>
    </div>
    )
}

export default MovieList