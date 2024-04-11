import {useEffect, useState} from 'react'

const useOnlineStatus = () => {
    console.log("entering useOnlineStatus");
    const [online, setOnline] = useState(true)
    useEffect(()=>{
        window.addEventListener("online", ()=>{
            console.log("setting online true");
            setOnline(true)
        })
        window.addEventListener("offline", ()=>{
            console.log("setting online false");
            setOnline(false)
        })
        console.log("child useeffect");
    },[])
    console.log("executed......");
    return online
}

export default useOnlineStatus;