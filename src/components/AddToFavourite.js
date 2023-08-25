const AddToFavourite = (props) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-white text-sm mr-2'>
                Add To Favourites
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={props.fillColor}
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
            </div>
        </div>
    )
}

export default AddToFavourite