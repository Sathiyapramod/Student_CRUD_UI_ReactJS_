import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

export function Students() {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const getData = () => {
    fetch(`https://63cf7c7f1098240437808ea0.mockapi.io/students`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setArr(result));
  };
  useEffect(() => getData(), []);
  return (
    <div className="container mt-3">
      <h1>Users Lists </h1>
      <TableContainer component={Paper} className="p-3">
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              {["#", "Name", "Place", "Country", "Actions"].map(
                (element, index) => {
                  return <TableCell key={index}>{element}</TableCell>;
                }
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((element, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{element.id}</TableCell>
                  <TableCell>{element.name}</TableCell>
                  <TableCell>{element.place}</TableCell>
                  <TableCell>{element.country}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        navigate(`/students/edit/${element.id}`);
                      }}
                    >
                      <ModeEditOutlineRoundedIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        alert("Are you Sure want to delete ???");
                        fetch(
                          `https://63cf7c7f1098240437808ea0.mockapi.io/students/${element.id}`,
                          { method: "DELETE" }
                        ).then(() => getData());
                      }}
                    >
                      <DeleteForeverRoundedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableCell colSpan={5} align="center">
              <Button variant="outlined" onClick={() => navigate("/dashboard")}>
                Go back
              </Button>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
