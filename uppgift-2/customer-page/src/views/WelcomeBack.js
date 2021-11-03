import React from 'react'
import { NavLink } from 'react-router-dom'

const WelcomeBack = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <p>Du har loggat ut. Välkommen åter!</p>
            <NavLink to="/">Logga in</NavLink>
        </div>
    )
}

export default WelcomeBack
