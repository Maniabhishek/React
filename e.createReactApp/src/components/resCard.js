import React from "react"

const ResCard = (props) =>{
    const {image, name,shop, rating, eta} = props.data
    return <div className="res-card">
        <img
            src={image}
        />
        <h3>{name}</h3>
        <h4>{shop}</h4>
        <h4>{rating}</h4>
        <h4>{eta}</h4>
    </div>
}

export default ResCard