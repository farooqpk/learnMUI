import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export const RadioMUI = () => {
  const [value, setValue] = useState<string>("");
  console.log(value);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <FormControl error>
        <FormLabel id="job experiance group">Years of experiance</FormLabel>
        <RadioGroup
          name="job experiance group"
          aria-labelledby="job-experiance group"
          value={value}
          row
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-4" value="3-4" />
          <FormControlLabel control={<Radio />} label="5-6" value="5-6" />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
