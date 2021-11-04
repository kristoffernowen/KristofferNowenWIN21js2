import React from 'react'
import { NavLink } from 'react-router-dom'

const Signin = () => {
    return (
        <div className="col-12 d-flex justify-content-center mt-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="logInName" className="form-label">Logga in med namnet Hans</label>
                    <input type="text" className="form-control" id="logInName" aria-describedby="emailHelp" placeholder="Hans" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="logInPassword" className="form-label">Använd lösenordet "Hans"</label>
                    <input type="password" className="form-control" id="logInPassword" />
                </div>

                <NavLink type="submit" to="customers" className="btn btn-primary">Logga in</NavLink>
            </form>
        </div>
    )
}

export default Signin
