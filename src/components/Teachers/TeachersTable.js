import React from "react";
import { useGlobalContext } from "../Dashboard";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Button from "@mui/material/Button";

function TeachersTable() {
  const teachers = useGlobalContext().teachersData;
  return (

      <Paper
        sx={{ width: 850, height: 750, padding: 10, margin: 2 }}
        elevation={6}
      >
        <span className="fs-4">NEW MENTORS</span>
        <TableContainer>
          <Table size="large" sx={{ fontSize: 45 }}>
            <TableHead size="large">
              <TableRow>
                {["#", "Name", "Portfolio", "Rating", "Status"].map(
                  (element, index) => {
                    return <TableCell key={index} sx={{fontSize:20}}>{element}</TableCell>;
                  }
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map((element, index) => {
                return (
                  <TableRow key={index} hover>
                    <TableCell sx={{fontSize:20}}>{element.id}</TableCell>
                    <TableCell sx={{fontSize:20}}>{element.name}</TableCell>
                    <TableCell sx={{fontSize:20}}>{element.Subject}</TableCell>
                    <TableCell sx={{fontSize:20}}>{element.Rating}</TableCell>
                    <TableCell>
                      {element.status === "approved" ? (
                        <Button variant="contained" color="success">
                          APPROVED
                        </Button>
                      ) : (
                        <Button variant="contained" color="primary">
                          AWAITING
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
  );
}

export default TeachersTable;
