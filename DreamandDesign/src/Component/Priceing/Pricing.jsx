import React from 'react'
import { Link } from 'react-router-dom'
import "./Priceing.css"
const Priceing = () => {
    return (
        <div className='pricingpr'>
            <h1 className='project-heading'>Priceing</h1>
            <div className='card-containerpr'>
                <div className='cardpr'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 100</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btnpr'> PURCHASE NOW</Link>
                </div>
                <div className='cardpr'>
                    <h3>- Premium -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 200</p>
                    <p>- 2 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btnpr'> PURCHASE NOW</Link>
                </div>
                <div className='cardpr'>
                    <h3>- Business -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 300</p>
                    <p>- 5 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btnpr'> PURCHASE NOW</Link>
                </div>
            </div>
        </div>
    )
}

export default Priceing