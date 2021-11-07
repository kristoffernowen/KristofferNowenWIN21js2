import React, { useState, useEffect } from 'react'
import Card from './Card'


const GridCard = () => {

    const [theCustomers, setTheCustomers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
            const json = await res.json()
            setTheCustomers(json)
        }
        fetchData()
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 ms-5">

            {
                theCustomers.map(customer => (
                    <div key={customer.id} className="col">
                        <Card item={customer} />
                    </div>
                ))
            }
        </div>
    )
}

export default GridCard
