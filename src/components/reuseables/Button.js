const Button = (props)=>{
    return(
        <div>
            <button 
            onClick={props.handleButtonClick}
            className="rounded-md border-2 ml-2 p-1 border-indigo-600">{props.children}</button>
        </div>
    )
}

export default Button