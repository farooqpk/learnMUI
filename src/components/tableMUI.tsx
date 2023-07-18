import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableHead,
} from "@mui/material";

const tableData = [
  {
    id: 1,
    first_name: "Neale",
    last_name: "Hayley",
    email: "nhayley0@devhub.com",
    gender: "Male",
    ip_address: "184.123.161.65",
  },
  {
    id: 2,
    first_name: "Delmore",
    last_name: "Noraway",
    email: "dnoraway1@europa.eu",
    gender: "Male",
    ip_address: "160.62.45.212",
  },
  {
    id: 3,
    first_name: "Cherianne",
    last_name: "Rainey",
    email: "crainey2@bbb.org",
    gender: "Female",
    ip_address: "247.21.177.82",
  },
  {
    id: 4,
    first_name: "Jennine",
    last_name: "Mapston",
    email: "jmapston3@usnews.com",
    gender: "Female",
    ip_address: "248.86.191.17",
  },
  {
    id: 5,
    first_name: "Milli",
    last_name: "Terron",
    email: "mterron4@fastcompany.com",
    gender: "Female",
    ip_address: "35.160.71.54",
  },
  {
    id: 6,
    first_name: "Ardeen",
    last_name: "Edgeson",
    email: "aedgeson5@reference.com",
    gender: "Female",
    ip_address: "210.214.85.151",
  },
];

export const TableMUI = () => {
  return (
    <TableContainer component={Paper} elevation={10} sx={{backgroundColor:"secondary.main",maxHeight:"300px"}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>first_name</TableCell>
            <TableCell>last_name</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>ip_address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => {
            return (
              <TableRow key={data.id}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.first_name}</TableCell>
                <TableCell>{data.last_name}</TableCell>
                <TableCell align="center">{data.email}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.ip_address}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
