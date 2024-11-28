import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
            </ul>
            <h1>Welcome to my website</h1>
        </div>
    )
}

export default Home
