import {Link, useNavigate} from 'react-router-dom'
import React from 'react'
function About(){
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <Link to="/">
                <div className='App'>Home</div>
            </Link>
            <div>About</div>
        </div>
    )
}

export default About