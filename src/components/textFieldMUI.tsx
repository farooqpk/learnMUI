import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

export const TextFieldMUI = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Stack display={"flex"} gap={3} alignItems={"center"}>
        <Stack spacing={2}>
          {/* textField is like input tag */}
          <TextField label={"outlined"} variant="outlined" />
          <TextField label={"filled"} variant="filled" />
          <TextField label={"standard"} variant="standard" />
        </Stack>

        <Stack spacing={2}>
          <TextField
            label={"small primary"}
            variant="outlined"
            size="small"
            color="primary"
          />
          <TextField
            label={"medium secondary"}
            variant="filled"
            size="medium"
            color="secondary"
          />
          <TextField label={"warning"} variant="standard" color="warning" />
        </Stack>

        <Stack spacing={2}>
          <TextField
            label={"form input required"}
            variant="outlined"
            required
          />
          <TextField
            label={"form input helper text"}
            variant="outlined"
            helperText={"do not share this"}
          />
          <TextField
            label={"input type password"}
            variant="outlined"
            type="password"
          />
          <TextField label={"disabled"} variant="outlined" disabled />
          <TextField
            label={"readonly"}
            variant="outlined"
            inputProps={{ readOnly: true }}
          />
          <TextField label={"error prop"} variant="outlined" error />
          <TextField
            label={"form validation"}
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={value && "do not share to anyone"}
          />
        </Stack>

        <Stack spacing={2} direction={"row"}>
          {/* to add prefixes or sufixes */}
          <TextField
            label={"Amount"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label={"Weight"}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};
