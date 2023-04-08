import React from 'react'
import "./Servicep.css"
import ProjectCardser from './ProjectCardser'
import ProjectCardData from '../Servicesour/Servicesdata'
const Servicesp = () => {
  return (
    <><h1 className='project-headingp'>Services</h1>
    <div className='work-containerp'>
        
        <div className='project-containerp'>
        {ProjectCardData.map((val,ind)=>{
            return(
                <ProjectCardser
                key={ind}
                imgsrc={val.imgsrc}
                tittle={val.tittle}
                 text={val.text} 
               
                />
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Servicesp
