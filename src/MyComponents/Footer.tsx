import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark footerstyle">
  <h2 className="h2style">  Find Us On Social Media!</h2>
    
    <div className="iconstyle">
      <a href="https://www.facebook.com/acmnuces/" target="_blank"><i style={{color:"white"}} className="fab fa-facebook-square fa-3x fa-customise"></i></a>
      <a href="https://www.linkedin.com/company/acm-nuces/" target="_blank"><i  style={{color:"white"}} className="fab fa-linkedin fa-3x  fa-customise"></i></a> 
      <a href="https://www.instagram.com/acm_nuces_khi/?utm_medium=copy_link" target="_blank"><i  style={{color:"white"}}className="fab fa-instagram fa-3x fa-customise"></i></a>
             
            </div>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
          <br />
          <div>
       <i style={{color:"white"}} className="fab fa-facebook-square"></i>
            <i style={{color:"white"}} className="fab fa-linkedin"></i>
            <i  style={{color:"white"}}className="fab fa-instagram"></i>
            </div>
      </li>
      
    </ul>
    
  </div> */}
</nav>
        
            
        </>
    )
}

export default Footer