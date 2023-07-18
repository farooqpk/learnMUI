import { Stack } from "@mui/material";
import { ButtonMUI } from "./components/buttonMUI";
import { TypographyMUI } from "./components/typographyMUI";
import { TextFieldMUI } from "./components/textFieldMUI";
import { SelectMUI } from "./components/selectMUI";
import { RadioMUI } from "./components/radioMUI";
import { CheckboxMUI } from "./components/checkboxMUI";
import { SwichMUI } from "./components/swichMUI";
import { RatingMUI } from "./components/ratingMUI";
import { AutoCompleteMUI } from "./components/autoCompleteMUI";
import { LayoutMUI } from "./components/layoutMUI";
import { CardMUI } from "./components/cardMUI";

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
        <SwichMUI />
        <RatingMUI />
        <AutoCompleteMUI />
        <LayoutMUI/>
        <CardMUI/>
      </Stack>
    </>
  );
}

export default App;
