import React, {useState, useEffect} from 'react'
import Shimmer from './shimmer'
import { useParams } from 'react-router-dom'

const ResMenu = () => {
    const {resId} = useParams()
    const [resInfo, setResInfo] = useState()
    console.log("resinfo...",resInfo);
    useEffect(()=>{
        setTimeout(()=>{
            const name = "abc"
            const menu = ["Biryani", "Burger", "Noodles", "Pizza"]
            setResInfo({
                name: name,
                menu: menu,
            })
        }, 1000)
    },[])
    return resInfo == null ?
        <Shimmer/> :
        <div>
            <h1>{resInfo?.name} {resId}</h1>
            <h2>Menu</h2>
            <ul className='menu'>
                {resInfo?.menu?.map((menu, idx) => <li key={idx}>{menu}</li>)}
            </ul>
        </div>
}

export default ResMenu;
