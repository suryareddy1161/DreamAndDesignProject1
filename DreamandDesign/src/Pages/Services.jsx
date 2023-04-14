import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Component/Navbar/Navbar'
import Servicesp from '../Component/Servicesp/Servicesp';
import Footer from '../Component/Footer/Footer';
import {Helmet } from 'react-helmet'
 const Services = () => {
 
  return (
    <div>
       <Helmet>
        <meta charSet='utf-8' />
        <title>dream and design</title>
        <meta name='keywords' content='marketing'/>
        <meta name="description" content='portfolio'/>
      </Helmet>
      <Navbar/>
      <Servicesp/>
      <Footer/>
    </div>
  )
}

export default Services 
/* import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Services = () =>{
  return ( */
    {/* <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
     /*  </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
     {/*    <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */
     /*  </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body> */
        /* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */
   /*    </Card>
    </CardGroup>  */
  
/*   );
}

export default Services; */