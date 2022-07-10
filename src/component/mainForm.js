import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

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

import Particulars from "./particulars"
import ReactDOM from "react-dom";


import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

function MainForm() {
    let Departement = ['kitchen', 'Deity', 'Flower', 'maintainenace'];
    let costcenter = ['IIT Dhanbad', 'BIT Sindri', 'ISKCON DHANBAD'];
    let payslipType = ['Billed', 'Advance'];

    const [slipParticular, setSlipParticular] = useState([]);
    const [showParticular, setShowParticular] = useState(false);
    const [val,setVal]=useState({
        name:"",
        email_id:"",
        phone:"",
        department:"",
        amount:"",
        cost_center:"",
        type:"",
        details:""
    })

    const handleChange=(event)=>{       
        setVal({
            ...val,
            [event.target.name]:event.target.value
        })
    }

    let addParticular = (e) => {
        e.preventDefault()
        if (!showParticular)
            setShowParticular(true)
    };

    const particular_func = (val) => {
        setSlipParticular([...slipParticular, val])
    }

    const handleSendingData=async(event)=>{
        event.preventDefault()
        console.log("send the data")
        const sendData=await axios.post("http://localhost:8800/api/payslip/new_payslip",val, 
        {headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
          }})
        if(sendData.data){
            alert("data sent")
        }
    }
    // useEffect(() => {
    //     setSlipParticular([<Row ><Form.Label style={{ float: 'left' }} > Particular </Form.Label>
    //         <Form.Control
    //             as="select"


    //         > {payslipType.map((el) => { return <option value={el}>{el}</option> })}
    //         </Form.Control>

    //         <Form.Control as="textarea" rows={3} placeholder="Enter Particular Details" />

    //         <Form.Control placeholder="Total Amount" />

    //     </Row >]);
    // }, []);


    // let Hod = ['Hg Naam Prem Prabhu'];
    return (
        <div id="Home" style={{ 'width': '40%', 'marginLeft': 'auto', 'marginRight': 'auto' }}>
            <Form onSubmit={handleSendingData}>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Name</Form.Label>
                    <Form.Control placeholder="Enter your Name" value={val.name} onChange={handleChange} name="name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ float: 'left' }} > Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={val.email_id} onChange={handleChange} name="email_id" />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Phone Number</Form.Label>
                    <Form.Control placeholder="Enter your mobile number" value={val.phone} onChange={handleChange} name="phone"/>

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Select Departement</Form.Label>
                    <Form.Control
                        as="select" value={val.department} onChange={handleChange} name="department"
                    >

                        {Departement.map((el) => { return <option value={el} key={el}>{el}</option> })}
                    </Form.Control>
                </Form.Group>

                {/* <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Select HOD</Form.Label>
                    <Form.Control
                        as="select"


                    >

                        {Hod.map((el) => { return <option value={el} key={el}>{el}</option> })}
                    </Form.Control>
                </Form.Group> */}

                {/* <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Amount</Form.Label>
                    <Form.Control placeholder="Enter Amount which , you want to get sanctioned" value={val.amount} onChange={handleChange} name="amount"/>
                </Form.Group> */}

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Cost Center</Form.Label>
                    <Form.Control
                        as="select" value={val.cost_center} onChange={handleChange} name="cost_center"
                    >
                        {costcenter.map((el) => <option value={el} key={el}>{el}</option>)}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Payslip Type</Form.Label>
                    <Form.Control
                        as="select" value={val.type} onChange={handleChange} name="type"

                    >
                        {payslipType.map((el) => { return <option value={el} key={el}>{el}</option> })}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >

                    <Form.Label style={{ float: 'left' }} >Slip Particular </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Particular Details" value={val.details} onChange={handleChange} name="details"/>

                    <Form.Control placeholder="Total Amount" value={val.amount} onChange={handleChange} name="amount" />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Button variant="primary" type="submit" >
                        Submit Request
                    </Button>
                </Form.Group>
            </Form>
        </div >
    )

}
export default MainForm;