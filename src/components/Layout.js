const Layout = (props)=>{
    return(
        <div className='font-bold font-custom lg:text-6xl md:text-5xl ssm:text-3xl sm:text-3xl lg:text-left md:text-left ssm:text-left sm:text-center'>
            {props.text}
        </div>
    )
}

export default Layout