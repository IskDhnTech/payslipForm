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
import axios from "axios";

function AddvSettlement() {
    let Departement = ['kitchen', 'Deity', 'Flower', 'maintainenace'];
    let costcenter = ['IIT Dhanbad', 'BIT Sindri', 'ISKCON DHANBAD'];
    let payslipType = ['Billed', 'Advance', 'Advance settlement'];

    const [slipParticular, setSlipParticular] = useState([]);
    const [showParticular, setShowParticular] = useState(false);
    const [showDetails,setShowDetails] =useState(false)
    const [val,setVal]=useState({
        payslip_id:"",
        name:"",
        email_id:"",
        phone:"",
        department:"",
        amount:"",
        cost_center:"",
        type:"",
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

    const fetchAdvSettlement =async()=>{
        const fetchAdvSettlement=await axios.get(`http://localhost:8800/api/payslip/fetch_payslip/${val.payslip_id}`)
        if(fetchAdvSettlement.data){
            let advSetlData=fetchAdvSettlement.data.data
            setVal({
                name:advSetlData?.name,
                email_id:advSetlData?.email_id,
                phone:advSetlData?.phone,
                department:advSetlData?.department,
                amount:advSetlData?.amount,
                cost_center:advSetlData?.cost_center,
                type:advSetlData?.type,
                details:advSetlData?.details
                
            })
        }
        console.log("in fetchAdvSettlement")
        setShowDetails(true)
    }

    const updatedvSettlement =async()=>{
        const updatedvSettlement=await axios.post(`http://localhost:8800/api/payslip/update_payslip/${val.payslip_id}`,{
            amount:val.amount,
            details:val.details
        })
        if(updatedvSettlement.data){
            window.location.replace("/submitted")
           console.log("updated")
        }    
    }

    const handleChange=(event)=>{       
        setVal({
            ...val,
            [event.target.name]:event.target.value
        })
    }

    const handleSendingData=(e)=>{
        e.preventDefault()
        updatedvSettlement()
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
                    <Form.Control placeholder="Enter your payslip no."  onChange={handleChange} value={val.payslip_id} name="payslip_id" />
                </Form.Group>
                
                { showDetails ?
                <>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Name</Form.Label>
                    <Form.Control placeholder="Enter your Name" readOnly value={val.name}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ float: 'left' }} > Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" readOnly value={val.email_id}/>

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Phone Number</Form.Label>
                    <Form.Control placeholder="Enter your mobile number" readOnly value={val.phone}/>

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Select Departement</Form.Label>
                    <Form.Control
                        as="select" readOnly value={val.department}
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
                        as="select" readOnly value={val.cost_center}
                    >
                        {costcenter.map((el) => <option value={el} key={el}>{el}</option>)}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label style={{ float: 'left' }} > Payslip Type</Form.Label>
                    <Form.Control
                        as="select" readOnly value={val.type}
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