import React, { useState } from 'react'
// import Form from '../components/Form'
import Navbar from '../components/navbar/Navbar'

const RegisterCustomers = () => {


    const [hisFirstName, setHisFirstName] = useState()
    const nameHandler = (e) => { setHisFirstName(e.target.value)}
    const [hisLastName, setHisLastName] = useState()
    const lastNameHandler = (e) => { setHisLastName(e.target.value)}

    

    const [validName, setValidName] = useState()
    // const nameRegex = /^[a-öA-Ö]{2,}\-?([a-öA-Ö]{2,})?$/
    const validateThis = (e) => {if (e.target.value.length  < 2) {
                //funkar inte denna regex eller formen
                 document.getElementById("firstNameResponse").innerText = 'Namnet måste innehålla minst två tecken'
                 document.getElementById("firstNameResponse").style.color ="red"
                 setValidName(false)   
             } else {
    
                 document.getElementById("firstNameResponse").innerText = 'Giltigt namn'
                 document.getElementById("firstNameResponse").style.color="green"
                setValidName(true)
                nameHandler(e)
             } }

    // function validateThis(e) {


    //     if (e.target.value.length < 2) {

    //         document.getElementById("firstNameResponse").innerText = 'Namnet måste innehålla minst två tecken'
    //         document.getElementById("firstNameResponse").style.color ="red"

    //     } else {

    //         document.getElementById("firstNameResponse").innerText = 'Giltigt namn'
    //         document.getElementById("firstNameResponse").style.color="green"

    //     }        
    // }

    const customerObject = { firstName: hisFirstName, lastName: hisLastName }
    // console.log(theName)




    // Passing Arguments to Event Handlers, finns guide på react sidan

    // function validateThat(e) {


    //     if (e.target.value.length < 2) {

    //         document.getElementById("lastNameResponse").innerText = 'Namnet måste innehålla minst två tecken'
    //         document.getElementById("lastNameResponse").style.color ="red"

    //     } else {

    //         document.getElementById("lastNameResponse").innerText = 'Giltigt namn'
    //         document.getElementById("lastNameResponse").style.color="green"
    //     }

    // }
    // const emailResponse = document.getElementById('emailResponse')
    function validateEmail(e) {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEx.test(e.target.value)) {
            // emailResponse.innerText="ogiltig e-postadress"
            // emailResponse.style.color="red"
            document.getElementById('emailResponse').innerText = 'ogiltig e-postadress'
            document.getElementById('emailResponse').style.color = "red"
        } else {
            document.getElementById('emailResponse').innerText = "giltig e-postadress"
            document.getElementById('emailResponse').style.color = "green"
        }
    }

    const buttonHandler = (e) => { 
        if (validName) console.log(customerObject, validName)
        else
        console.log('ogiltiga uppgifter', validName)
        e.preventDefault()
         }
    // let jsonCustomer = JSON.stringify(customerObject)
    // async function postCustomer() {
    //     await fetch('',
    //         {
    //             headers: {
    //                 'content-Type': 'application/json'
    //             },
    //             method: 'post',
    //             body: jsonCustomer
    //         })
    // }    //   detta går in på knappens att göra på click




    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center">
                <form className="mb-3 ">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Förnamn</label>
                        <input type="text" id="firstName" onChange={validateThis}  className="form-control" aria-describedby="emailHelp" />
                        <div id="firstNameResponse" className="form-text">Namnet måste innehålla minst två tecken.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Efternamn</label>
                        <input type="text" className="form-control" id="lastName" onChange={lastNameHandler} />
                        <div id="lastNameResponse" className="form-text">Namnet måste innehålla minst två tecken.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailAdress" className="form-label">E-postadress</label>
                        <input type="text" className="form-control" id="emailAdress" onChange={validateEmail} />
                        <div id="emailResponse" className="form-text">Skriv en giltig e-postadress</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="iAprove" />
                        <label className="form-check-label" htmlFor="iAprove">Jag vill registrera mina uppgifter hos er</label>
                    </div>
                    <button id="submitButton" type="button" onClick={buttonHandler} className="btn btn-primary">Skicka</button>
                </form>

                {/* <Form /> */}
            </div>
        </div>

    )
}

export default RegisterCustomers
