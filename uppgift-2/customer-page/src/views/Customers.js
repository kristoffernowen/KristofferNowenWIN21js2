import React from 'react'
import GridCard from '../components/cards/GridCard'
import Navbar from '../components/navbar/Navbar'

const Customers = () => {
    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center my-5">
                <h1>Befintliga kunder</h1>
            </div>
            <div className="App d-flex justify-content-around">
                <GridCard />
            </div>
        </div>
    )
}

export default Customers
