import React from "react"

const ResCard = (props) =>{
    const {image, name,shop, rating, eta} = props.data
    return <div className='bg-gray-200 rounded-lg shadow-lg p-2 w-48 m-2'>
            <img
                className='w-48'
                src={image}
            />
            <h3>{name}</h3>
            <h4>{shop}</h4>
            <h4>{rating}</h4>
            <h4>{eta}</h4>
        </div>
}

export const PromotedResCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Promoted </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default ResCard