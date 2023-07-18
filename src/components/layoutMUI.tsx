import { Box, Stack, Divider, Paper } from "@mui/material";

export const LayoutMUI = () => {
  return (
    // by using paper we can make shadow using elovation also we can create card compo with paper
    <Paper elevation={4} sx={{backgroundColor:"lightcyan",p:'25px'}}>
    {/*  by default stack has flex column */}
    <Stack sx={{border:"1px solid"}} direction={'row'} justifyContent={'space-evenly'} divider={<Divider orientation="vertical" flexItem />}>
      {/* we can add semantic elements */}
      {/* we can specify custom css inside the sx prop */}
      <Box
        component={"section"}
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          height: "300px",
          width: "300px",
          "&:hover": {
            backgroundColor: "info.light",
          },
        }}
      >
        hello
      </Box>
      <Box width="300px" height="300px" bgcolor="success.light" p-3 />
    </Stack>
    </Paper>
  );
};
