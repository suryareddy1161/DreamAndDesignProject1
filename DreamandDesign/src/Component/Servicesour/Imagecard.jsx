import React from 'react'
import "./ProjectCard.css"
const Imagecard = (props) => {
  return (
    <div>
<div class="container">
  <img src={props.imgsrc}  class="image"/>
  <div class="overlay">
    <div class="text">{props.tittle}</div>
  </div>
</div>
    </div>
  )
}

export default Imagecard
