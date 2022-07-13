import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Mainform from "../component/mainForm";
import AddvSettlement from "../component/addvSettlement"

const Payslip = () => {
    const [tabValue, setTabValue] = React.useState('one');
    
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
      };
    
  return (
    <div>
      <Box sx={{ width: "100%", marginBottom: "20px" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          centered
        >
          <Tab value="one" label="Submit Payslip" />
          <Tab value="two" label="Advance Settlement" />
          {/* <Tab value="three" label="Item Three" /> */}
        </Tabs>
      </Box>

      {tabValue === "one" ? <Mainform /> : <AddvSettlement />}
    </div>
  );
};

export default Payslip;
