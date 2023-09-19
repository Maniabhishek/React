import React, {useState} from "react"
import ResCard from "./resCard"
import {card} from "../../data"

const Body = ()=> {
    const [cardData, setCardData] = useState(card)
    const filterData = () => {
        let updatedcard = card.filter(c=> {
            const rating = Number(c.rating.split(" ")[0])
            if(rating > 4){
                return c
            }
        })
        setCardData(updatedcard)
    }
    return (
        <div className="body">
            <button className="filter" onClick={filterData}>
                Top Rated Restaurants
            </button>
            <div className="res-container">
                {
                    cardData.map((c, idx)=> (
                        <ResCard key={idx} data={c}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body