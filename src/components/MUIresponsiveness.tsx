import { Box, Stack, Typography } from "@mui/material";

export const MUIresponsiveness = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={{ sm: "space-around", md: "center" }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            height: "300px",
            width: {
              xs: 100, // apply when view port above 0 (mobile)
              sm: 200, // 600
              md: 300, // 900
              lg: 400, // 1200
              xl: 500, // 1536
            },
          }}
        ></Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 4 }}
        >
          <Typography>item1</Typography>
          <Typography>item2</Typography>
          <Typography>item3</Typography>
          <Typography>item4</Typography>
        </Stack>
      </Box>
    </>
  );
};
