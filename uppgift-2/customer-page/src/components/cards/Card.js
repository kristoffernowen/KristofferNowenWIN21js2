import React from 'react'

const Card = ({item}) => {

    
   

    return (
        <div className="card" style={{width: 18 + 'rem'}}> 
            <img src="images/sunset.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
            
            <p className="card-text"> {item.firstName}</p>
            <p className="card-text"> {item.lastName}</p>
            <p className="card-text"> {item.email}</p>
            
            {/* <a href="#" className="btn btn-primary">Kontakta</a> */}
            </div>
        </div>
    )
}

export default Card

// https://static.thousandwonders.net/%C5%A0ar.Mountains.640.39559.jpg
