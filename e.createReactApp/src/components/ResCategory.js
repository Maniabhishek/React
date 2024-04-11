import { biryaniImage } from "../utils.js/contant"
import ItemList from "./ItemList"

const ResCategory = ({menu, showIndex, setShowIndex, itemKey, showItem}) => {
    const handleClick = () => {
        if(showIndex === itemKey) {
            setShowIndex(null)
        }else {
            setShowIndex(itemKey)
        }
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">categories</span>
                    <span>⬇️</span>
                </div>
                <div>
                    {showItem ? <ItemList item={menu} image={biryaniImage}/> : ""}
                </div>
            </div>
        </div>
    )
}

export default ResCategory