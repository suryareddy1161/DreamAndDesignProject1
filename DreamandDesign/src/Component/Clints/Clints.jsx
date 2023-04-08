import React from 'react'
import './Clints.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from './Clintdata';
import Product from './Clintcard';

const Clints = () => {

    const product = productData.map((item,id) => (
        <Product
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
          key={id}
        />
      ));
   
  return (
    <div className="Clints-container"  >
    <h1 className='project-heading'>Our Clints</h1>
    <Carousel showDots={true} responsive={responsive}>
      {product}
    </Carousel>
  </div>
  )
}

export default Clints
