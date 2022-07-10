import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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

function AddvSettlement() {
    let Departement = ['kitchen', 'Deity', 'Flower', 'maintainenace'];
    let costcenter = ['IIT Dhanbad', 'BIT Sindri', 'ISKCON DHANBAD'];
    let payslipType = ['Billed', 'Advance', 'Advance settlement'];

    const [slipParticular, setSlipParticular] = useState([]);
    const [showParticular, setShowParticular] = useState(false);
    const [showDetails,setShowDetails] =useState(false)
    const [val,setVal]=useState({
        amount:"",
        details:""
    })

    let addParticular = (e) => {
        e.preventDefault()
        if (!showParticular)
            setShowParticular(true)
    };

    const particular_func = (val) => {
        setSlipParticular([...slipParticular, val])
    }

    const fetchAdvSettlement =()=>{
        console.log("in fetchAdvSettlement")
        setShowDetails(true)
    }

    const handleChange=(event)=>{       
        setVal({
            ...val,
            [event.target.name]:event.target.value
        })
    }

    const handleSendingData=()=>{
        console.log("send the data")
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
                    <Form.Label style={{ float: 'left' }}> Payslip No</Form.Label>
                    <Form.Control placeholder="Enter your payslip no." />
                </Form.Group>
                
                { showDetails ?
                <>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Name</Form.Label>
                    <Form.Control placeholder="Enter your Name" readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ float: 'left' }} > Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" readOnly />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Phone Number</Form.Label>
                    <Form.Control placeholder="Enter your mobile number" readOnly />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Select Departement</Form.Label>
                    <Form.Control
                        as="select" readOnly
                    >

                        {Departement.map((el) => { return <option value={el} key={el}>{el}</option> })}
                    </Form.Control>
                </Form.Group>

                {/* <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Amount</Form.Label>
                    <Form.Control placeholder="Enter Amount which , you want to get sanctioned" readOnly />
                </Form.Group> */}

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Cost Center</Form.Label>
                    <Form.Control
                        as="select" readOnly
                    >
                        {costcenter.map((el) => <option value={el} key={el}>{el}</option>)}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Payslip Type</Form.Label>
                    <Form.Control
                        as="select" readOnly
                    >
                        {payslipType.map((el) => { return <option value={el} key={el}>{el}</option> })}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >

                    <Form.Label style={{ float: 'left' }} >Slip Particular </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Particular Details" onChange={handleChange} value={val.details} name="details"/>

                    <Form.Control placeholder="Total Amount" onChange={handleChange} value={val.amount} name="amount" />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Button variant="primary" type="submit" >
                        Submit Request
                    </Button>
                </Form.Group>
                </>
                :
                <Form.Group className="mb-3" >
                    <Button variant="primary" onClick={fetchAdvSettlement} >
                        Add
                    </Button>
                </Form.Group>
                }
            </Form>
        </div >
    )

}
export default AddvSettlement;