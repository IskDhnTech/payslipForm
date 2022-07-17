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

// import Particulars from "./particulars"
import ReactDOM from "react-dom";
import Particulars from "./particulars";


import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

function MainForm() {
    let Departement = ['kitchen', 'Deity', 'Flower', 'maintainenace'];
    let costcenter = ['IIT Dhanbad', 'BIT Sindri', 'ISKCON DHANBAD'];
    let payslipType = ['Billed', 'Advance'];
    // const [key,setKey]=useState(1)
   
    const [val,setVal]=useState({
        name:"",
        email_id:"",
        phone:"",
        department:"",
        amount:"",
        cost_center:"",
        content:"",
        type:"",
        details:"",
        detailContent:[]
    })
    
    const [particulars,setParticulars]=useState([])

    const [particularVal,setParticularVal]=useState({
        key:particulars.length==0 ?1: particulars[particulars?.length-1]?.key+1,
        itemName:"",
        quantity:"",
        amount:"",
    })

  

    const handleChange=(event)=>{       
        setVal({
            ...val,
            [event.target.name]:event.target.value
        })
    }

    const handleChangeParticulars=(event)=>{
        setParticularVal({
            ...particularVal,
            [event.target.name]:event.target.value
        })
    }

    const addParticulars=()=>{
        let tempObj={
            ...particularVal,
            key:particulars.length==0 ?1: particulars[particulars?.length-1]?.key+1,
        }
        let  tempAr=[...particulars,tempObj]
        setParticulars(tempAr)
        setParticularVal({
            itemName:"",
            quantity:"",
            amount:"",
        })
    }

 const deleteHandler=(keyVal)=>{
    setParticulars(prev=>{
        const updatedAr=prev.filter(el=>el.key!==keyVal )
        return updatedAr
    })
 }

    const handleSendingData=async(event)=>{
        event.preventDefault()
        let oneString="";
        particulars.map(el=>{
            oneString+= ""+el.key+". "+el.itemName+"  "+el.quantity+"  "+el.amount+" ,  "
        })
        setVal({
            ...val,
            details:oneString,
            detailContent:particulars
        })
        console.log("send the data")
        const sendData=await axios.post("http://localhost:8800/api/payslip/new_payslip",{...val,status:"pending"}, 
        {headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
          }})
        if(sendData.data){
          
            
            const sendMail = await axios.post("http://localhost:8800/api/payslip/payslip_mail_send",sendData.data.payslip_save,
            {headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
              }})
              const sendMail_hod = await axios.post("http://localhost:8800/api/payslip/payslip_mail_send_hod",sendData.data.payslip_save,
            {headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
              }})
              

              if(!sendMail.data ){
                alert("mail not sent")
              }else if(!sendMail_hod.data){
                alert("mail to Hod has not sent")
              }else{
                window.location.replace("/submitted")
                // alert("mail sent")
              }
        }
    }

    // const fileHandler=()=>{
    //     const fileLink=await axios.post("http://localhost:8800/api/googleDrive/generatelink",{
    //         payslip_id:setVal.pa
    //     })
    // }

    
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

                {/* <Form.Group className="mb-3" >
                
                </Form.Group> */}

                <Form.Group className="mb-3" >
                    
                    <Form.Label style={{ float: 'left' }} >Slip Particular </Form.Label>  
                    {/* <Container>   
                        <Row >                           */}
                            <Form.Control style={{marginBottom:"5px"}} as="textarea" rows={3} placeholder="Enter details" name="itemName" value={particularVal.itemName} onChange={ handleChangeParticulars} />
                        {/* </Row> */}
                        {/* <Container>  */}
                        <Row>
                           <Col style={{paddingRight:"0px" ,marginRight:"5px"}}>
                            <Form.Control style={{marginBottom:"5px"}} placeholder="Quantity"  name="quantity" value={particularVal.quantity} onChange={ handleChangeParticulars} /></Col>
                            <Col style={{padding:"0px" ,marginRight:"5px"}}> <Form.Control style={{marginBottom:"5px"}} placeholder="Amount (in rupees)"  name="amount" value={particularVal.amount} onChange={ handleChangeParticulars} /></Col>
                            <Col xs lg="2" style={{paddingLeft:"0px"}}> <Button variant="primary" style={{width:"100%"}} onClick={addParticulars}>
                                Add 
                            </Button>
                            </Col>
                        </Row>
                        {/* </Container>   */}
                        { particulars?.map((el)=> <Particulars key={el.key} partiVal={el} deleteHandler={deleteHandler}/>)}
                    </Form.Group>
               
                  
                <Form.Group className="mb-3" >
                        {/* <Form.Label style={{ float: 'left' }} > Add File</Form.Label>
                  <Button  variant="secondary" style={{color:"white", marginRight:"20px"}} onClick={fileHandler}>{' '}
                       Add File
                    </Button> */}
                    <Button variant="primary" type="submit" >
                        Submit Request
                    </Button>
                </Form.Group>
            </Form>
        </div >
    )

}
export default MainForm;