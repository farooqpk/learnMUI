import { Stack, colors, createTheme, ThemeProvider } from "@mui/material";
// import { ButtonMUI } from "./components/buttonMUI";
// import { TypographyMUI } from "./components/typographyMUI";
// import { TextFieldMUI } from "./components/textFieldMUI";
// import { SelectMUI } from "./components/selectMUI";
// import { RadioMUI } from "./components/radioMUI";
// import { CheckboxMUI } from "./components/checkboxMUI";
// import { SwichMUI } from "./components/swichMUI";
// import { RatingMUI } from "./components/ratingMUI";
// import { AutoCompleteMUI } from "./components/autoCompleteMUI";
// import { LayoutMUI } from "./components/layoutMUI";
// import { CardMUI } from "./components/cardMUI";
// import { AccordianMUI } from "./components/accordianMUI";
// import { MUIresponsiveness } from "./components/MUIresponsiveness";
// import { NavbarMUI } from "./components/navbarMUI";
// import { TableMUI } from "./components/tableMUI";
// import { ListMUI } from "./components/listMUI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaginationMUI } from "./components/paginationMUI";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.deepOrange[500],
    },
    secondary: {
      main: colors.cyan[500],
    },
  },
});

function App() {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          
          <Stack>
            <PaginationMUI />
          </Stack>

          {/* <Stack gap={7}>
            <NavbarMUI />
            <TypographyMUI />
            <ButtonMUI />
            <TextFieldMUI />
            <SelectMUI />
            <RadioMUI />
            <CheckboxMUI />
            <SwichMUI />
            <RatingMUI />
            <AutoCompleteMUI />
            <LayoutMUI />
            <CardMUI />
            <AccordianMUI />
            <MUIresponsiveness />
            <TableMUI />
            <ListMUI />
          </Stack> */}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
