import { TroubleshootOutlined } from "@mui/icons-material";
import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export const SelectMUI = () => {
    const [country,setCountry]=useState<string>("")

  // Box is like plain div
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box width="30%">
        <TextField label="Select country" select fullWidth value={country} onChange={(e)=>{setCountry(e.target.value)}} >
          <MenuItem value="india">India</MenuItem>
          <MenuItem value="usa">USA</MenuItem>
          <MenuItem value="uae">UAE</MenuItem>
          <MenuItem value="uk">UK</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};
