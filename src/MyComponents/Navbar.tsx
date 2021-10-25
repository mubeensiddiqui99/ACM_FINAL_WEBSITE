import React from 'react'
import './Navbar.css'
import logo from '../images/acm.svg'

const Navbar = () => {
    return (
        <>
        <nav>
          <img className="logosize"  style={{marginLeft:'0%'}}src={logo} alt=""/>
      <ul className="nav">
        <li>
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
         <li>
          <a className="nav-link active" aria-current="page" href="/teams">Our Team</a>
        </li>
         <li>
          <a className="nav-link active" aria-current="page" href="/events">Events</a>
        </li>
         <li>
          <a className="nav-link active" aria-current="page" href="/coderscup">CodersCup</a>
        </li>
        
        
       
       
      </ul>
      </nav>
      

</>
    )
}

export default Navbar
