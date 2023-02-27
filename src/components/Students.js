import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "./General";
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
  //GET method to obtain the relevant data from API
  const getData = () => {
    fetch(`${API}/students`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setArr(result));
  };
  useEffect(() => getData(), []);
  return (
    <div className="d-flex flex-row justify-content-center">
      <Paper elevation={3} sx={{ width: 540 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {["#", "Name", "Place", "Action"].map((element, index) => {
                  return (
                    <TableCell key={index} sx={{ fontSize: 20 }} align="center">
                      {element}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {arr.map((element, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell sx={{ fontSize: 20 }}>{element.id}</TableCell>
                    <TableCell sx={{ fontSize: 20 }}>{element.name}</TableCell>
                    <TableCell sx={{ fontSize: 20 }}>{element.place}</TableCell>
                    <TableCell sx={{ fontSize: 20 }}>
                      <Button
                        onClick={() => navigate(`/students/edit/${element.id}`)}
                      >
                        <ModeEditOutlineRoundedIcon />
                      </Button>
                      <Button
                        onClick={() => {
                          alert("Are you Sure want to Delete ? ");
                          fetch(`${API}/students/${element.id}`, {
                            method: "DELETE",
                          }).then(() => getData());
                        }}
                      >
                        <DeleteForeverRoundedIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
