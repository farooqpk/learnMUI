import { Stack } from "@mui/material";
import { ButtonMUI } from "./components/buttonMUI";
import { TypographyMUI } from "./components/typographyMUI";

function App() {
  return (
    <>
      <Stack alignItems={"center"} spacing={10} direction={'column'}>

        <TypographyMUI/>
        <ButtonMUI />

      </Stack>
    </>
  );
}

export default App;
