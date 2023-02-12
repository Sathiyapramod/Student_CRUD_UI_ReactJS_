import React from "react";
import { Paper, Typography } from "@mui/material";
import { useGlobalContext } from "./Dashboard";
import Button from "@mui/material/Button";

function AssignmentData() {
  const students = useGlobalContext().studentsData;
  return (
    <div>
      <Paper sx={{ width: 650, height:750,padding: 10 }} elevation={6}>
        <Typography align="left" className="pb-4" component='span'>
          <span className="fs-4">STUDENTS DATA</span>
        </Typography>
        <Typography align="left" sx={{ width: 450 }}>
          <span className="fs-6">
            {students.map((element, index) => {
              return (
                <span className="d-flex flex-row justify-content-between align-items-center" key={index}>
                  <span key={index} className="d-flex row mb-4">
                    <span className="fs-5 text-bolder">{element.name}</span>
                    <br />
                    <span className="fs-6 text-body-tertiary">
                      {element.place}
                    </span>
                    <br />
                  </span>
                  <span>
                    {element.status === "submitted" ? (
                      <Button color="success" size='large'>{element.status}</Button>
                    ) : (
                      <Button color="error" size='large'>{element.status}</Button>
                    )}
                  </span>
                </span>
              );
            })}
          </span>
        </Typography>
      </Paper>
    </div>
  );
}

export default AssignmentData;
