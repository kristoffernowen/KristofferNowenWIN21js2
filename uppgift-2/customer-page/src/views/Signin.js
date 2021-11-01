import React from 'react'
import { NavLink } from 'react-router-dom'

const Signin = () => {
    return (
        <div className="col-12 d-flex justify-content-center mt-5">
            <form>
                <div class="mb-3">
                    <label htmlFor="logInName" class="form-label">Logga in med namnet Hans</label>
                    <input type="text" class="form-control" id="logInName" aria-describedby="emailHelp" placeholder="Hans" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="logInPassword" class="form-label">Använd lösenordet "Hans"</label>
                    <input type="password" class="form-control" id="logInPassword" />
                </div>

                <NavLink type="submit" to="customers" class="btn btn-primary">Logga in</NavLink>
            </form>
        </div>
    )
}

export default Signin
