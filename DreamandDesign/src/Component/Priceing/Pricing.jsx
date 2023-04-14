import React from 'react'
import ser6 from "../../assets/price.jpg"
import { Link } from 'react-router-dom'
import "./Priceing.css"
const Priceing = () => {
    return (
        <div className='pricingpr'>
            <h1 className='priceing-heading'>Choose Your Plans</h1>
            <div className='card-containerpr'>
                <div className='cardpr'>
                     <h3>Basic plan</h3>
                    <span className='bar'></span>
                   {/*  <p className='btc'>₹ 4400/-</p> */}
                    <p>Monthly 10 Posts</p>
                    <p>1 AD will be Campaige</p>
                    <p>Basic Changes</p>
                    <p>6 Days AD's Will Be Run</p> 
          {/*           <Link to="/contact" className='btnpr'> PURCHASE NOW</Link> */} 
                  {/*   <img src={ser6}/> */}
                  <div className='rupee'>
                    <p>Monthly</p>
                    <h1>₹ 4400/-</h1>
                    <p>Terms and conditions apply</p>
                  </div>
                </div>
                <div className='cardpr'>
                
                   <h3>Silver Plan</h3>
                    <span className='bar'></span>
                    {/* <p className='btc'>₹ 7000/-</p> */}
                    <p>Monthly 15 Posts</p>
                    <p>2 AD'S Campaige</p>
                    <p>Basic Changes</p>
                    <p>12 Days AD's will Be Run</p>
                  
                    {/* <Link to="/contact" className='btnpr'> PURCHASE NOW</Link>  */}
                    <div className='rupee'>
                    <p>Monthly</p>
                    <h1>₹ 7000/-</h1>
                    <p>Terms and conditions apply</p>
                  </div>
               </div>
                <div className='cardpr'>
            
                     <h3>Gold Plan</h3>
                    <span className='bar'></span>
                   {/*  <p className='btc'>₹ 10200/-</p> */}
                    <p>Monthly 20 Posts</p>
                    <p>4 AD'S Campaige</p>
                    <p>Basic Changes</p>
                    <p>24 Days Ad's Will Be Run</p>
                    {/* <Link to="/contact" className='btnpr'> PURCHASE NOW</Link>  */}
                    <div className='rupee'>
                    <p>Monthly</p>
                    <h1>₹ 10200/-</h1>
                    <p>Terms and conditions apply</p>
                  </div>
                </div>
                <div className='cardpr'>
             
                    <h3>Premium</h3>
                    <span className='bar'></span>
                    {/* <p className='btc'>₹ 13500/-</p> */}
                    <p>Monthly 25 Posts</p>
                    <p>5 AD'S will be Campaige</p>
                    <p>Basic Changes</p>
                    
                    <p>30 Days AD Will Be Run</p> 
                   {/*  <Link to="/contact" className='btnpr'> PURCHASE NOW</Link>  */}
                    <div className='rupee'>
                    <p>Monthly</p>
                    <h1>₹ 13500/-</h1>
                    <p>Terms and conditions apply</p>
                  </div>
                 </div> 
            </div>
        </div>
    )
}

export default Priceing