import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const ButtonMUI = () => {
  const [formats, setFormats] = useState<string[]>([]);

  const handleFormats = (
    event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    console.log(updatedFormats);
    setFormats(updatedFormats);
  };

  return (
    <Stack
      spacing={4}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">text variantBtn</Button>
        <Button variant="contained" href="https://google.com">
          contained variantBtn with href
        </Button>
        <Button variant="outlined">outlined variant btn</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secndary
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="contained" color="inherit">
          inherit
        </Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          {/* disableRipple to remove ripple */}
          without ripple
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          {/* disableElevation is used to remove shadow */}
          without shadow
        </Button>
        <IconButton aria-label="send" color="secondary" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup
          variant="outlined"
          color="success"
          size="large"
          aria-label="button group"
          orientation="vertical"
        >
          <Button onClick={() => alert("left")}>left</Button>
          <Button onClick={() => alert("center")}>center</Button>
          <Button onClick={() => alert("right")}>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        {/* toggle btn has state unlike normal btn*/}
        {/* if we pass exclusive={true} prop to ToggleButtonGroup then we can only select one button at a time */}
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          color="primary"
          onChange={handleFormats}
          orientation="vertical"
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underline"} aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

    </Stack>
  );
};
