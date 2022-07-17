import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import"./style.css"

import {
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,
    Row,
    Col,
    Container, Form, Button
} from "react-bootstrap";


const Particulars = ({deleteHandler,partiVal }) => {
    const payslipType = ['Billed', 'Advance', 'Advance settlement'];
    // const [particularVal1, setParticularVal1] = useState({
    //     billed: "Billed",
    //     text: "Please enter text here!",
    //     amount: "please enter amount here"
    // })

  

    return (
        
             <span className='goal-item' >
                
                <Row >
                 <Col style={{flex:"10%"}}>
                <span >{partiVal.key}.</span>
                </Col>
                 <Col style={{flex:"50%",overflowX:"scroll"}} > 
                 <span >{partiVal.itemName}</span> 
                 </Col>
                 <Col style={{flex:"20%"}}> 
                 <span >{partiVal.quantity}</span> 
                 </Col>
                 <Col style={{flex:"10%"}}>
                 <span > {partiVal.amount}</span>
                 </Col>
                 <Col style={{flex:"10%"}}>
                 <Button variant="outline-danger" onClick={()=>deleteHandler(partiVal.key)}>Del</Button>{' '}
                 </Col>
                </Row>
            </span>
      
    )
}

export default Particulars;


