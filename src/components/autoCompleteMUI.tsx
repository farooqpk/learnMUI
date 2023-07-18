import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const AutoCompleteMUI = () => {

    const [value,setValue]=useState<string | null>(null)

  const skills = ["html", "css", "javascript"];
  return (
    <Stack spacing={2} alignItems={'center'}>
      <Autocomplete
      fullWidth
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(e:any,newValue:string | null)=>{setValue(newValue)}}
      />
    </Stack>
  );
};
