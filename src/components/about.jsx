import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <h1>This s sample react router program</h1>

        </div>
    )
}

export default About
