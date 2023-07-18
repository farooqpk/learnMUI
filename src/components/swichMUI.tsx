import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export const SwichMUI = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={check}
            onChange={(e) => {
              setCheck(e.target.checked);
            }}
          />
        }
      />
    </Box>
  );
};
