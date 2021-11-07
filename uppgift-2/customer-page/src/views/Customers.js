import React from 'react'
import GridCard from '../components/cards/GridCard'
import Navbar from '../components/navbar/Navbar'

const Customers = () => {
    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center my-3">
                <h1>Befintliga kunder</h1>
            </div>
            <div className="container">

                <div className="App d-flex  justify-content-around ms-5">
                    <GridCard />
                </div>
            </div>
        </div>
    )
}

export default Customers
