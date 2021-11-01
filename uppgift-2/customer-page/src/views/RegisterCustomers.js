import React from 'react'
import Navbar from '../components/navbar/Navbar'

const RegisterCustomers = () => {
    return (
        <div>
            <Navbar />
            <form className="ms-5 col-6">
                <div className="mb-3">
                    <label htmlFor="efirstName" className="form-label">Förnamn</label>
                    <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" />
                    <div id="firstNameResponse" className="form-text">Namnet måste innehålla minst två tecken.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Efternamn</label>
                    <input type="text" className="form-control" id="lastName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailAdress" className="form-label">E-postadress</label>
                    <input type="text" className="form-control" id="emailAdress" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="iAprove" />
                    <label className="form-check-label" htmlFor="iAprove">Jag vill registrera mina uppgifter hos er</label>
                </div>
                <button type="submit" className="btn btn-primary">Skicka</button>
            </form>
        </div>
    )
}

export default RegisterCustomers
