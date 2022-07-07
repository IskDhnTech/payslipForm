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

function UserDashboard() {
    let Departement = ['kitchen', 'Deity', 'Flower', 'maintainenace'];
    let costcenter = ['IIT Dhanbad', 'BIT Sindri', 'ISKCON DHANBAD'];
    let payslipType = ['Billed', 'Advance', 'Advance settlement'];

    const [slipParticular, setSlipParticular] = useState([]);
    const [showParticular, setShowParticular] = useState(false);


    let addParticular = (e) => {
        e.preventDefault()
        if (!showParticular)
            setShowParticular(true)
    };

    const particular_func = (val) => {
        setSlipParticular([...slipParticular, val])
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


    let Hod = ['Hg Naam Prem Prabhu'];
    return (
        <div id="Home" style={{ 'width': '40%', 'marginLeft': 'auto', 'marginRight': 'auto' }}>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Name</Form.Label>
                    <Form.Control placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ float: 'left' }} > Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Phone Number</Form.Label>
                    <Form.Control placeholder="Enter your mobile number" />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Select Departement</Form.Label>
                    <Form.Control
                        as="select"


                    >

                        {Departement.map((el) => { return <option value={el} key={el}>{el}</option> })}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Select HOD</Form.Label>
                    <Form.Control
                        as="select"


                    >

                        {Hod.map((el) => { return <option value={el} key={el}>{el}</option> })}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Amount</Form.Label>
                    <Form.Control placeholder="Enter Amount which , you want to get sanctioned" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Cost Center</Form.Label>
                    <Form.Control
                        as="select"
                    >
                        {costcenter.map((el) => <option value={el} key={el}>{el}</option>)}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Payslip Type</Form.Label>
                    <Form.Control
                        as="select"
                    >
                        {payslipType.map((el) => { return <option value={el} key={el}>{el}</option> })}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >

                    <Form.Label style={{ float: 'left' }} >Slip Particular </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Particular Details" />

                    <Form.Control placeholder="Total Amount" />

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
export default UserDashboard;