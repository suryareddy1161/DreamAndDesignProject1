import React from 'react'
import "./Servicep.css"



const PojectCardser = (props) => {
  return (
    <div className='project-cardp'>
            <img src={props.imgsrc} alt='image'/>
            <h2 className='project-tittlep'>{props.tittle}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
     
            </div>
        </div>
  )
}

export default PojectCardser