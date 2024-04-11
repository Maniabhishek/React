import React, {useState, useEffect, useContext} from "react"
import ResCard, { PromotedResCard } from "./resCard"
import {card} from "../../data"
import Shimmer from "./shimmer"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils.js/useOnlineStatus"
import UserContext from "../utils.js/userContext"

const Body = ()=> {
    const [cardData, setCardData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [searchTxt, setSearchTxt] = useState('')
    const isOnline = useOnlineStatus()
    const {setUserName, userName, loggedInUser, dummy} = useContext(UserContext)
    const filterData = () => {
        let updatedcard = cardData.filter(c=> {
            const rating = Number(c.rating.split(" ")[0])
            if(rating > 4){
                return c
            }
        })
        setFilteredData(updatedcard)
    }
    

    const PromotedRestCard = PromotedResCard(ResCard)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos/10')
            const timer = setTimeout(async ()=>{
                const data  = await res.json()
                setCardData(card)
                setFilteredData(card)
            },1000)
            return ()=> clearTimeout(timer)
        } catch (error) {
            
        }
    }

    if(cardData.length === 0) {
        console.log("shimmer is returned ");
        return <Shimmer />
    }
    
    if(!isOnline) return <h1>You seem to be offline. Please check your connection!!! </h1>
    return (
        <div className="body">
            <div className = "flex">
                <button className="p-1 bg-blue-100 border border-black rounded-md m-2" onClick={filterData}>
                    Top Rated Restaurants
                </button>
                <div className='flex items-center'>
                    <input className="p-1 border border-black rounded-md m-2" type='text' id='search' value={searchTxt} onChange={(e)=>{
                        setSearchTxt(e.target.value)
                    }}/>
                    <button className="p-1 bg-gray-100 border border-black rounded-md m-2" onClick={()=>{
                        const newFilteredData = cardData.filter(card => card?.name?.toLowerCase().includes(searchTxt.toLowerCase()))
                        setFilteredData(newFilteredData)
                    }}>
                        search
                    </button>
                </div>
                <label className="m-3">UserName: </label>
                <input className="p-1 border border-black rounded-md m-2" value={userName} onChange={(e)=>{
                    setUserName(e.target.value)
                    console.log("on change input ran.....");
                    }}/>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredData.map((c, idx)=> (
                        <Link key={idx} to={`restaurant/${idx}`}>
                            {idx%3 === 0 ? <PromotedRestCard  key={idx} data={c} /> : <ResCard key={idx} data={c}/>}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body