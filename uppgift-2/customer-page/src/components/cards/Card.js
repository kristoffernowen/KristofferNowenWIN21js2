import React from 'react'

const Card = ({image, title, firstName, lastName, emailCustomer}) => {

    
   

    return (
        <div className="card" style={{width: 18 + 'rem'}}> 
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text"> {firstName}</p>
            <p className="card-text"> {lastName}</p>
            <p className="card-text"> {emailCustomer}</p>
            
            <a href="#" className="btn btn-primary">Kontakta</a>
            </div>
        </div>
    )
}

export default Card


