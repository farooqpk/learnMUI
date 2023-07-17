import { Button, Stack } from "@mui/material";

export const ButtonMUI = () => {
  return (
    <Stack spacing={3} direction={"row"}>
      <Button variant="text" color="secondary">text variantBtn</Button>
      <Button variant="contained" href="https://google.com" >contained variantBtn with href</Button>
      <Button variant="outlined">outlined variant btn</Button>
    </Stack>
  );
};
