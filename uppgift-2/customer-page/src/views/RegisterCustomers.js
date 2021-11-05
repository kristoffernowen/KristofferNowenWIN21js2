import React, { useState } from 'react'
// import Form from '../components/Form'
import Navbar from '../components/navbar/Navbar'

const RegisterCustomers = () => {


    const [hisFirstName, setHisFirstName] = useState()
    const nameHandler = (e) => { setHisFirstName(e.target.value)}
    

    

    const [validName, setValidName] = useState()
    const nameRegex = /^[A-Z,ÅÄÖ][a-öA-Ö]+(-[A-Z,ÅÄÖ][a-ö]+)?$/
    const validateThis = (e) => {if (!nameRegex.test(e.target.value)) {
                
                 document.getElementById("firstNameResponse").innerText = 'Namnet måste innehålla minst två bokstäver, börja med stor bokstav. Skriv dubbelnamn Aa-Aa'
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

   

    const [hisLastName, setHisLastName] = useState()
    const lastNameHandler = (e) => { setHisLastName(e.target.value)}
    const [validLastName, setValidLastName] = useState()

    // Passing Arguments to Event Handlers, finns guide på react sidan

    function validateThat(e) {


        if (!nameRegex.test(e.target.value)) {

            document.getElementById("lastNameResponse").innerText = 'Namnet måste innehålla minst två bokstäver, börja med stor bokstav. Skriv dubbelnamn Aa-Aa'
            document.getElementById("lastNameResponse").style.color ="red"
            setValidLastName(false)
        } else {

            document.getElementById("lastNameResponse").innerText = 'Giltigt namn'
            document.getElementById("lastNameResponse").style.color="green"
            setValidLastName(true)
            lastNameHandler(e)
        }

    }
    // const emailResponse = document.getElementById('emailResponse')
    const [hisEmail, setHisEmail] = useState()
    const emailHandler = (e) => { setHisEmail(e.target.value)}
    

    

    const [validEmail, setValidEmail] = useState()


    function validateEmail(e) {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEx.test(e.target.value)) {
            // emailResponse.innerText="ogiltig e-postadress"
            // emailResponse.style.color="red"
            document.getElementById('emailResponse').innerText = 'ogiltig e-postadress'
            document.getElementById('emailResponse').style.color = "red"
            setValidEmail(false)
        } else {
            document.getElementById('emailResponse').innerText = "giltig e-postadress"
            document.getElementById('emailResponse').style.color = "green"
            setValidEmail(true)
            emailHandler(e)
        }
    }
    const customerObject = { firstName: hisFirstName, lastName: hisLastName, email: hisEmail }
    // console.log(theName)

    let jsonCustomer = JSON.stringify(customerObject)
            
    //         async function postCustomer() {
    //                 await fetch('https://ecexam-webapi.azurewebsites.net/api/customers',
    //                     {
    //                         headers: {
    //                             'content-Type': 'application/json'
    //                         },
    //                         method: 'post',
    //                         body: jsonCustomer
    //                     })
    //             }    //   detta går in på knappens att göra på click/submit

                // https://ecexam-webapi.azurewebsites.net/swagger/index.html     här finns apiet, men måste ha annat slut för fetch/fetchpost

    const buttonHandler = (e) => { 
        if (validName && validLastName && validEmail) {
            console.log(customerObject, 'firstName: ' + validName, 'lastName: ' + validLastName, 'email: ' + validEmail) 
            document.getElementById('submitResponse').innerText = "Du har skickat dina uppgifter"
            console.log(jsonCustomer)
            // postCustomer()
            
        }
        else {
            console.log('ogiltiga uppgifter', 'firstName: ' + validName, 'lastName: ' + validLastName, 'email: ' + validEmail)
            e.preventDefault()
            document.getElementById('submitResponse').innerText = "Du har lämnat ogiltiga uppgifter och kan inte registrera dig"
        }
    }
    




    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center">
                <form className="mb-3 "  autoComplete="off" >
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Förnamn</label>
                        <input type="text" id="firstName" name="firstName" onChange={validateThis}  className="form-control" aria-describedby="emailHelp" />
                        <div id="firstNameResponse" className="form-text">Namnet måste innehålla minst två tecken.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Efternamn</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" onChange={validateThat} />
                        <div id="lastNameResponse" className="form-text">Namnet måste innehålla minst två tecken.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailAdress" className="form-label">E-postadress</label>
                        <input type="text" className="form-control" id="emailAdress" name="emailAdress" onChange={validateEmail} />
                        <div id="emailResponse" className="form-text">Skriv en giltig e-postadress</div>
                    </div>
                    
                    <button id="submitButton" type="button" onClick={buttonHandler} className="btn btn-primary">Registrera</button>
                    <div id="submitResponse" className="form-text"></div>
                </form>

                {/* <Form /> */}
            </div>
        </div>

    )
}

export default RegisterCustomers
