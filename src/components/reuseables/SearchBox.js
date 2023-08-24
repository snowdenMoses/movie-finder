const SearchBox = (props)=>{
    return(
        <div>
            <input 
            value = {props.searchWord}
            onChange={(e)=>props.setSearchWord(e.target.value)}
            type="text"
            className="border-2 border-slate-500 rounded p-1"
            />
        </div>
    )
}

export default SearchBox