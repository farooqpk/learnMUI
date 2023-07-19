import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Pagination,
} from "@mui/material";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface DataType {
  name: string;
  url: string;
}

export const PaginationMUI = () => {

  const [pageNo, setPageNo] = useState(1);

  // react query loginc
  const { data, isLoading, isError } = useQuery(
    ["paginationData", pageNo],
    async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pageNo}`
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
    {
      keepPreviousData:true
    }
  );

  const getPokemonId = (url: string) => {
    const regex = /\/pokemon\/(\d+)\//;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    return "";
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNo((prevPageNo) => (value > prevPageNo ? value : prevPageNo - 1));
  };

  if (isLoading) {
    return <Typography variant="h1">Loading....</Typography>;
  }
  if (isError) {
    return <Typography variant="h1">Error...</Typography>;
  }

  return (
    <Stack alignItems={"center"} justifyContent={"space-evenly"} gap={4}>
      <Box
        display={"flex"}
        gap={5}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        width={"80%"}
      >
        {data.results.map((items: DataType) => {
          return (
            <Card sx={{ width: "30%" }} key={items.name}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  width='100%'
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
                    items.url
                  )}.png`}
                  alt="image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {items.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>

      <Box padding={4}>
        <Pagination
          count={6}
          page={pageNo}
          color="primary"
          size="large"
          onChange={handleChangePage}
        />
      </Box>
    </Stack>
  );
};
