const SearchBox = (props)=>{
    return(
        <div>
            <input 
            value = {props.searchWord}
            onChange={(e)=>props.setSearchWord(e.target.value)}
            type="text"
            className="border-2 border-[red] rounded p-1 text-black "
            />
        </div>
    )
}

export default SearchBox