import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    fetch(`https://63e4fb964474903105f66b27.mockapi.io/Teachers`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setArr(result);
      });
  };

  useEffect(() => getData(), []);

  return (
    <div className="container mx-auto">
      {[1, 2, 3].map((index) => {
        return <br key={index} />;
      })}
      <div>
        <Typography variant="h4">Teachers Lists</Typography>
        <Paper elevation={3}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {["#", "Faculty Name", "Role", "Age", "Rating", "Action"].map(
                    (element, index) => {
                      return <TableCell key={index} sx={{fontSize:20}}>{element}</TableCell>;
                    }
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {arr.map((element, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell sx={{fontSize:20}}>{element.id}</TableCell>
                      <TableCell sx={{fontSize:20}}>{element.name}</TableCell>
                      <TableCell sx={{fontSize:20}}>{element.Subject}</TableCell>
                      <TableCell sx={{fontSize:20}}>{element.Age}</TableCell>
                      <TableCell sx={{fontSize:20}}>{element.Rating}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          startIcon={<VisibilityOutlinedIcon />}
                          onClick={() => {
                            navigate(`/teachers/${element.id}`);
                          }}
                        >View Details</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}

export default Teachers;
