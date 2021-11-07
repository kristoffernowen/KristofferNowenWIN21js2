import React from 'react'

const Card = ({item}) => {

    
   

    return (
        <div className="card" style={{width: 18 + 'rem'}}> 
            <img src="images/sunset.jpg" className="card-img-top" alt="sunset" />
            <div className="card-body">
            
            <p className="card-text"> {item.firstName}</p>
            <p className="card-text"> {item.lastName}</p>
            <p className="card-text"> {item.email}</p>
            
            
            </div>
        </div>
    )
}

export default Card


