import React from 'react'
import "./Servicep.css"



const PojectCardser = (props) => {
  return (
   
      <div className='cardimgse'>
        <div className='imgbox'>
          <img src={props.imgsrc}/>
        </div>
        <div className='content'>
          <h2>{props.tittle}</h2>
          <p>{props.text}</p>
        </div>
      </div>
  )
}

export default PojectCardser



 {/* <div className='project-cardp'>
            <img src={props.imgsrc} alt='image'/>
            <h2 className='project-tittlep'>{props.tittle}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
     
            </div>
        </div> */}
      /*   <div class="card">
        <div class="imgbox">
          <img
            src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
  
        <div class="content">
          <h2>keep Smiling</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloribus vitae fugit enim repudiandae
          </p>
        </div>
      </div> */