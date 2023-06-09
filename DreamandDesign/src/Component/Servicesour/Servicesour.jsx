import React from 'react'
import Imagecard from './Imagecard'
import "./ProjectCard.css"
import ProjectCard from './Servicescard'
import ProjectCardData from './Servicesdata'
const Servicesour = () => {
  return (
    <><h1 className='project-heading'>Services</h1>
    <div className='work-container'>
        
        <div className='project-container'>
        {ProjectCardData.map((val,ind)=>{
            return(
                <Imagecard 
                key={ind}
                imgsrc={val.imgsrc}
                tittle={val.tittle}
                /* text={val.text} */
               
                />
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Servicesour
