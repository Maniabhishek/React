import React, {useState, useEffect} from 'react'
import Shimmer from './shimmer'
import { useParams } from 'react-router-dom'
import useResMenu from '../utils.js/useResMenu'
import ResCategory from './ResCategory'

const ResMenu = () => {
    const {resId} = useParams()
    const resInfo = useResMenu(resId)  
    const [showIndex, setShowIndex] = useState(0)
    return resInfo == null ?
        <Shimmer/> :
        <div>
            <h1>{resInfo?.name} {resId}</h1>
            <h2>Menu</h2>
            <ul className='menu'>
                {resInfo?.menu?.map((menu, idx) => <ResCategory showIndex={showIndex} setShowIndex={setShowIndex} itemKey={idx} showItem={showIndex === idx ? true : false} menu={menu} key={idx}/>)}
            </ul>
        </div>
}

export default ResMenu;
