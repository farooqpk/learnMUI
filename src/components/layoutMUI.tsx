import { Box } from "@mui/material";

export const LayoutMUI = () => {
  return (
    <>
      {/* we can add semantic elements */}
      {/* we can specify custom css inside the sx prop */}
      <Box
        component={"section"}
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "20px",
          "&:hover": {
            backgroundColor: "info.light",
          },
        }}
      >
        hello
      </Box>
      <Box width="300px" height="300px" bgcolor="success.light" p-3 />
    </>
  );
};
