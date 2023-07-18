import { BookmarkBorderRounded } from "@mui/icons-material";
import { Box, FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import { pink } from "@mui/material/colors";

export const CheckboxMUI = () => {
  return (
    <Box display="flex" alignItems={"center"} flexDirection={"column"}>
      <Box display={"flex"} flexDirection={"row"}>
        <FormControlLabel
          label="accept the terms and conditions"
          control={<Checkbox color="secondary" />}
          defaultChecked
        />
        <FormControlLabel
          label="accept the terms and conditions"
          control={<Checkbox color="success" />}
        />
      </Box>

      <Box>
        <Checkbox icon={<BookmarkBorderRounded />} />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Required"
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </Box>
    </Box>
  );
};
