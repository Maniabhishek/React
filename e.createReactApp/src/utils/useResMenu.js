import {useEffect, useState} from 'react'
import { biryaniImage, burgerImage, noodlesImage, pizzaImage } from './contant';

const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState()
    useEffect(()=>{
        console.log("line5");
        setTimeout(()=>{
            const name = "abc"
            const menu = [
                {name: "Biryani", imageUrl: biryaniImage},
                {name: "Burger", imageUrl: burgerImage}, 
                {name: "Noodles", imageUrl: noodlesImage}, 
                {name: "Pizza", imageUrl: pizzaImage}
            ]
            setResInfo({
                name: name,
                menu: menu,
                resId: resId,
            })
        }, 1000)
    },[])
    console.log("line17");
    return resInfo
}

export default useResMenu;