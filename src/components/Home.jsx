import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to='/login'>
                <div className='border-box'></div>
            </Link>
        </div>
    )
}

export default Home