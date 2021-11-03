import React, { useState } from 'react'
import Form from '../components/Form'
import Navbar from '../components/navbar/Navbar'

const RegisterCustomers = () => {
    let thisName
    
    function validateThis(e) {
        
        
        if (e.target.value.length < 2) {
            
            document.getElementById("firstNameResponse").innerText = 'Namnet måste innehålla minst två tecken'
            document.getElementById("firstNameResponse").style.color ="red"
            thisName = e.target.value
            console.log(thisName)
        } else {
            
            document.getElementById("firstNameResponse").innerText = 'Giltigt namn'
            document.getElementById("firstNameResponse").style.color="green"
            thisName = e.target.value
            console.log(thisName)
        }        
    }
    
    console.log('hej ' + thisName)
// Passing Arguments to Event Handlers, finns guide på react sidan

    function validateThat(e) {

        
        if (e.target.value.length < 2) {
            
            document.getElementById("lastNameResponse").innerText = 'Namnet måste innehålla minst två tecken'
            document.getElementById("lastNameResponse").style.color ="red"
            console.log(thisName)
        } else {
            
            document.getElementById("lastNameResponse").innerText = 'Giltigt namn'
            document.getElementById("lastNameResponse").style.color="green"
        }
        
    }
    // const emailResponse = document.getElementById('emailResponse')
    function validateEmail(e) {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regEx.test(e.target.value)) {
                // emailResponse.innerText="ogiltig e-postadress"
                // emailResponse.style.color="red"
                document.getElementById('emailResponse').innerText = 'ogiltig e-postadress'
                document.getElementById('emailResponse').style.color ="red"
            } else {       
                document.getElementById('emailResponse').innerText="giltig e-postadress"
                document.getElementById('emailResponse').style.color="green"
            } 
       }
    
    

    


    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center">
                <form className="mb-3 ">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Förnamn</label>
                        <input type="text" id="firstName" onChange={validateThis} className="form-control" aria-describedby="emailHelp" />
                        <div id="firstNameResponse" className="form-text">Namnet måste innehålla minst två tecken.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Efternamn</label>
                        <input type="text" className="form-control" id="lastName" onChange={validateThat} />
                        <div id="lastNameResponse" className="form-text">Namnet måste innehålla minst två tecken.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailAdress" className="form-label">E-postadress</label>
                        <input type="text" className="form-control" id="emailAdress" onChange={validateEmail}/>
                        <div id="emailResponse" className="form-text">Skriv en giltig e-postadress</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="iAprove" />
                        <label className="form-check-label" htmlFor="iAprove">Jag vill registrera mina uppgifter hos er</label>
                    </div>
                    <button id="submitButton"  type="submit" className="btn btn-primary">Skicka</button>
                </form>

                <Form />
            </div>
        </div>

    )
}

export default RegisterCustomers
