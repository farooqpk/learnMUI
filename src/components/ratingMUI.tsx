import { Rating, Stack } from "@mui/material";
import { FavoriteBorder, FavoriteBorderOutlined } from "@mui/icons-material";
import { useState } from "react";

export const RatingMUI = () => {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Stack spacing={2} alignItems={"center"}>
      <Rating
        sx={{ color: "green" }}
        value={value}
        onChange={handleChange}
        size="large"
      />
      <Rating
        sx={{
          color: "green",
          "@media (min-width:600px)": {
            color: "blue",
          },
        }}
      />
      <Rating precision={0.5} />
      <Rating
        icon={<FavoriteBorder fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderOutlined fontSize="inherit" />}
      />
      <Rating readOnly defaultValue={3} />
      <Rating highlightSelectedOnly />
    </Stack>
  );
};
