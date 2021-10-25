import React from 'react'
import './Header1.css'
import ACMFINAL from '../images/ACM FINAL.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from '../data.json';
import {events as EL} from './events';



const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const Header1 = () => {
    return (
        <>
        {/*=========ACM====HOMEPAGE============*/}
        <div className="container">
                <div>
                <h1 className="homepg">About ACM</h1>
                     <p className="textbox"> 
                     <br/>
                         ACM NUCES is one of FAST's most prestigios and
                         influential socities, it's the hub of advancement.
                         research and development.<br/> A place where we redefine
                         minds and ideas for technical excellence and an
                         innovative vision.<br/> ACM aims to turn FAST into a 
                         powerhouse for tech advancements and research.<br/> It
                         does this by conducting various seminars and events
                         to help you connect with the world of tech. So, if
                         you're looking for a place to inspire, learn and grow
                         then ACM is the right place for you.
                     </p>                 
                     
                </div>
                <div className="imgg">
                    <img className="imgprop" src={ACMFINAL} alt=""/>
                </div>        
            </div>


            {/*===============upcoming====events===SLIDER===========*/}
            <div>
                <h2 className="homepg-slider">Upcoming Events</h2>
                <br/>
                <br/>
                <div >
                <Carousel responsive={responsive}>
                {
                  data.map((post => {
                 return (
                 <EL
                 key={post.id}
                 eventname={post.name}
                 date={post.date}
                 imgsrc={post.imgsrc}
                   />
                   );
                  }))
                  }
                 </Carousel>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>

            {/* ===========FOOTER===STYLE======================= */}
            <div className="footerback">

            </div>
          </>   
        
    )
}

export default Header1
