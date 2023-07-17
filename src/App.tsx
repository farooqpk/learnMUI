import { Stack } from "@mui/material";
import { ButtonMUI } from "./components/buttonMUI";
import { TypographyMUI } from "./components/typographyMUI";

function App() {
  return (
    <>
      <Stack gap={7}>
        <TypographyMUI />
        <ButtonMUI />
      </Stack>
    </>
  );
}

export default App;
