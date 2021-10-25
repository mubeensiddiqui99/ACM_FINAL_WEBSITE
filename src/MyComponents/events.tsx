import React from 'react';
import './events.css';


interface Props {

  eventname:string;
  date:string
  imgsrc:string
}

export const events:React.FC<Props>=({eventname,date,imgsrc})=>{
  return (
    <div style={{marginLeft:'25rem'}}>
     <div className="db center mw5 tc black" style={{width:'18rem'}}>
               <img src={imgsrc} className="card-img-top" alt="pic1"/>
               <div className="ml0 gray">
               <dd>{eventname}</dd>
               <dt>{date}</dt>
     </div>
     </div>
     
    </div>
  );
}