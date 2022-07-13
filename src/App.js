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

import './App.css';
import Payslip from "./pages/payslip"

import SuccessAlert from "./component/SuccessAlert";

function App() {

  const [tabValue, setTabValue] = React.useState('one');

  
  return (
    <div className="App">

   
      <Router>       
        <Routes>
          <Route>
                <Route path="/" element={<Payslip/>} />
                <Route path="/submitted" element={<SuccessAlert/>} />
          </Route>
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
