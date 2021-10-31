import React from 'react'

const Card = () => {

    const herbert = {
        title: 'Herbert Hansson',
        firstname: 'Herbert',
        lastname: 'Hansson',
        age: 30
    }
    return (
        <div className="card" style={{width: 18 + 'rem'}}> 
            
            <div className="card-body">
            <h5 className="card-title"> {herbert.title}</h5>
            <p className="card-text">Förnamn: {herbert.firstname}</p>
            <p className="card-text">Efternamn: {herbert.lastname}</p>
            <p className="card-text">Ålder: {herbert.age}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card
