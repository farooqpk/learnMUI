import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const CardMUI = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Card sx={{ width: "50%", backgroundColor: "lightgray" }}>
          <CardMedia
            component={"img"}
            height="140"
            image="https://source.unsplash.com/random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae illum ab perspiciatis totam suscipit accusamus labore
              adipisci in voluptatum iure debitis fuga incidunt veniam
              aspernatur similique, asperiores id, ipsum architecto.
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Buy</Button>
            <Button>Add to cart</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
