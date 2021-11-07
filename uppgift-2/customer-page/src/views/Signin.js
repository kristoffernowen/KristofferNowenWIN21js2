import React from 'react'
import { NavLink } from 'react-router-dom'

const Signin = () => {

    return (
        <div className="col-12 d-flex justify-content-center mt-5">
            <form>
                <div className="mb-3">
                    <p style={{fontSize: 10 + 'rem'}} text-align="center">VÄLKOMMEN!</p>
                </div>
                <div className="d-flex justify-content-center">

                <NavLink type="submit" to="customers" className="btn btn-primary"><p style={{fontSize: 5 + 'rem'}} text-align="center">Logga in</p></NavLink>
                </div>
            </form>
        </div>
    )
}

export default Signin
