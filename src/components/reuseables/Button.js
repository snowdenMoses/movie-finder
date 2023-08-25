const Button = (props) => {
    return (
        <div>
            <button
                onClick={props.handleMovieSearch}
                className='font-custom font-semibold rounded-md border-2 border-[red] p-1 px-2 ml-1 hover:text-red-600'
                
            >{props.title}</button>
        </div>
    )
}

export default Button