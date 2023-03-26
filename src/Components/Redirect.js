import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Redirect = () => {
    return (
        <div>
            <h4>Lost?</h4>
            <br />
            <h1>Click on the HUGE running silloutte </h1>
            <Link to="/">
                <Logo />
            </Link>
        </div>
    )
}

export default Redirect