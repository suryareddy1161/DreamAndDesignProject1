import React from 'react'
import "./ProjectCard.css"



const PojectCard = (props) => {
  return (
    <div className='project-card'>
            <img src={props.imgsrc} alt='image'/>
            <h2 className='project-tittle'>{props.tittle}</h2>
           {/*  <div className='pro-details'>
                <p>{props.text}</p>
     
            </div> */}
        </div>
  )
}

export default PojectCard