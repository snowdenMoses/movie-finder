import {useDispatch} from "react-redux"
import { reduceDefaultPage, increaseDefaultPage } from "../stateManagement/slices/movieSlice"

const Pagination = ()=>{
    const dispatch = useDispatch()
    return(
    <div className='flex justify-between mt-5'>
            <button onClick={()=>{
                dispatch(reduceDefaultPage(1))
                }}
                className='rounded-md border-2 border-[red] p-1 px-2 ml-1 hover:bg-[red] hover:text-black'>
                    Previous
             </button>
            <button onClick={()=>{
                dispatch(increaseDefaultPage(1))
                }
            }
            className='rounded-md border-2 border-[red] p-1 px-2 ml-1 hover:bg-[red] hover:text-black'>
                    Next
        </button>
    </div>
    )
}

export  default Pagination