import React, {useState, useEffect} from "react"
import ResCard from "./resCard"
import {card} from "../../data"
import Shimmer from "./shimmer"
import {Link} from "react-router-dom"

const Body = ()=> {
    const [cardData, setCardData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [searchTxt, setSearchTxt] = useState('')
    const filterData = () => {
        let updatedcard = cardData.filter(c=> {
            const rating = Number(c.rating.split(" ")[0])
            if(rating > 4){
                return c
            }
        })
        setFilteredData(updatedcard)
    }
    
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
            },2000)
            return ()=> clearTimeout(timer)
        } catch (error) {
            
        }
    }

    if(cardData.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className = "filter-container">
                <button className="filter" onClick={filterData}>
                    Top Rated Restaurants
                </button>
                <div className='search'>
                    <input type='text' id='search' value={searchTxt} onChange={(e)=>{
                        setSearchTxt(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        const newFilteredData = cardData.filter(card => card?.name?.toLowerCase().includes(searchTxt.toLowerCase()))
                        setFilteredData(newFilteredData)
                    }}>search</button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredData.map((c, idx)=> (
                        <Link to={`restaurant/${idx}`}><ResCard key={idx} data={c}/></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body