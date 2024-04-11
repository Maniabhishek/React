import { useDispatch } from "react-redux"
import { addItem } from "../utils.js/cartSlice"

const ItemList = ({item}) => {
    const dispatch = useDispatch()
    const handleItem = () => {
        dispatch(addItem(item))
    }
    return <>
        <div className="px-8 py-4 flex justify-between">
            <span className="my-4">{item.name}</span>
            <div className="w-28"> 
                <div className="absolute bg-black text-white p-1 text-xs rounded ml-3 cursor-pointer" onClick={handleItem}>
                    <button>Add + </button>
                </div>
                <img className="w-full h-20" src={item.imageUrl}/>
            </div>
        </div>
    </>
}

export default ItemList
