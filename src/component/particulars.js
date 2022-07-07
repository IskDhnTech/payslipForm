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

const Particulars = ({ payslip_particulars, particular_func }) => {
    const payslipType = ['Billed', 'Advance', 'Advance settlement'];
    const [particularVal1, setParticularVal1] = useState({
        billed: "Billed",
        text: "Please enter text here!",
        amount: "please enter amount here"
    })

    const handleParticularBilled = (val) => {
        setParticularVal1({
            ...particularVal1,
            billed: val
        })

    }

    const handleParticularText = (val) => {
        setParticularVal1({
            ...particularVal1,
            text: val
        })
    }

    const handleParticularAmount = (val) => {
        setParticularVal1({
            ...particularVal1,
            amount: val
        })
    }
    useEffect(() => {
        particular_func(setParticularVal1)

    }, [setParticularVal1])

    return (
        <Row >
            <Form.Label style={{ float: 'left' }} > Particular </Form.Label>
            <Form.Control
                as="select"
                onChange={(val) => handleParticularBilled(val)}

            >  <option value={payslip_particulars.billedOpt}>{payslip_particulars.billedOpt}</option>
            </Form.Control>

            <Form.Control as="textarea" rows={3} placeholder="Enter Particular Details" value={payslip_particulars.text} onChange={(val) => handleParticularText(val)} />

            <Form.Control placeholder="Total Amount" value={payslip_particulars.amount} onChange={(val) => handleParticularAmount(val)} />

        </Row >
    )
}

export default Particulars;


