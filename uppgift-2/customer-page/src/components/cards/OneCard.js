import React, { useState, useEffect } from 'react'

const OneCard = () => {

    const [theCustomers, setTheCustomers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
            const json = await res.json()
            setTheCustomers(json)
        }
        fetchData()
    }, [])

    const [viewCustomer, setViewCustomer] = useState()
    const customerHandler = (e) => { setViewCustomer(e.target.value) }

    
    const showCustomer = () => {
        if (viewCustomer <= theCustomers.length) {

        
        let item2 = theCustomers[viewCustomer - 1]
        
        document.querySelector('#customerHere').innerHTML = `<div className="card" style="width: 18rem">
        <div className="card-body"> 
        <p className="card-text"> ${item2.firstName}</p>
        <p className="card-text"> ${item2.lastName}</p>
        <p className="card-text"> ${item2.email}</p>
        </div></div>`
    } else { 
        document.querySelector('#customerHere').innerText = "Det kanske inte finns en kund med detta id."
    }

    }


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 ms-5">
            
                <div>
                    <label htmlFor="lastName" className="form-label">Skriv id nr på kund</label>
                    <input type="text" id="chooseId" onKeyUp={customerHandler} className="form-control" />
                    <button type="button" className="btn btn-primary mt-2 mb-5" onClick={showCustomer}>Hämta kund</button>
                    <div id="customerHere" >
                    </div>                 
                </div>
            
        </div>
    )
}

export default OneCard



