import React, {useState, useEffect } from 'react'
import Card from './Card'


const GridCard = () => {

   const [theCustomers, setTheCustomers] = useState([])

   useEffect(async() => {
        const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
        setTheCustomers( await res.json())
   })
    
 
       

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 ms-5">

            {   
                theCustomers.map(customer => (
                <div key={customer.id} className="col">
                   <Card  item={customer}   />
                </div>
                ))
            }
        </div>    
    )
}

export default GridCard

// const myTestC = [{
//     id: 1,   
//     title: 'Herbert Hansson',
//     firstName: 'Herbert',
//     lastName: 'Hansson',
//     emailCustomer: 'herbert@herbert.her',
// },
// {   
//     id: 2,
//     title: 'Freddie Ersson',
//     firstName: 'Freddie',
//     lastName: 'Ersson',
//     emailCustomer: 'Freddie@earshow.eh',
// },
// {   
//     id: 3,
//     title: 'Bosse Ersson',
//     firstName: 'Bosse',
//     lastName: 'Ersson',
//     emailCustomer: 'Bosse@earshow.eh',
// },
// {   
//     id: 4,
//     title: 'Bea Nissbit',
//     firstName: 'Bea',
//     lastName: 'Nissbit',
//     emailCustomer: 'Bea@kolla.ko',
// }]
