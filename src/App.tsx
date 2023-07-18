import { Stack } from "@mui/material";
import { ButtonMUI } from "./components/buttonMUI";
import { TypographyMUI } from "./components/typographyMUI";
import { TextFieldMUI } from "./components/textFieldMUI";
import { SelectMUI } from "./components/selectMUI";
import { RadioMUI } from "./components/radioMUI";
import { CheckboxMUI } from "./components/checkboxMUI";

function App() {
  return (
    <>
      <Stack gap={7}>
        <TypographyMUI />
        <ButtonMUI />
        <TextFieldMUI />
        <SelectMUI />
        <RadioMUI />
        <CheckboxMUI />
      </Stack>
    </>
  );
}

export default App;
