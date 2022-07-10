import logo from './logo.svg';
import * as React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom"

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

import ReactDOM from "react-dom";
import Mainform from './component/mainForm';
import AddvSettlement from "./component/addvSettlement"
import './App.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function App() {

  const [tabValue, setTabValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="App">

    <Box sx={{ width: '100%',marginBottom:"20px" }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        centered
      >
        <Tab
          value="one"
          label="Submit Payslip"
          
        />
        <Tab value="two" label="Advance Settlement" />
        {/* <Tab value="three" label="Item Three" /> */}
      </Tabs>
    </Box>

      {tabValue==="one"?<Mainform/>:<AddvSettlement/>}
      {/* <Router>       
        <Routes>
          <Route>
                <Route path="/" element={<Mainform/>} />
                <Route path="/addv_settlement" element={<AddvSettlement/>} />
          </Route>
        </Routes>

        
      </Router> */}
    </div>
  );
}

export default App;
