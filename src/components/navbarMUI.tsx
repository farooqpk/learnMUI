import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";

export const NavbarMUI = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <CatchingPokemon />
        </IconButton>
        <Typography
          variant="h6"
          component={"div"}
          sx={{ flex: 1, fontSize: { xs: "18px", md: "25px" } }}
        >
          POKEMON
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">About</Button>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Cart</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
