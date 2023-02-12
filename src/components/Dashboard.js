import { Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import React from "react";
import { API } from "./General";
import StudentsMarks from "./Graphs/StudentsMarks";
import TeachersDomain from "./Graphs/TeachersDomain";
import TeachersTable from "./Teachers/TeachersTable";
import AssignmentData from "./AssignmentData";

const Datum = React.createContext();

export const useGlobalContext = () => {
  return useContext(Datum);
};

function Dashboard() {
  const [teachersData, setTeacherData] = useState([]);
  const [studentsData, setStudentData] = useState([]);

  useEffect(() => {
    fetch("https://63e4fb964474903105f66b27.mockapi.io/Teachers", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setTeacherData(result);
      });
    fetch(`${API}/students`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        setStudentData(result);
      });
  }, []);
  return (
    <div>
      {[1, 2, 3].map((index) => {
        return <br key={index} />;
      })}
      <Typography component='span'>
        <span className="fs-2">Welcome to Admin Dashboard</span>
        <Datum.Provider value={{ studentsData, teachersData }}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <StudentsMarks />
            <TeachersDomain />
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <TeachersTable />
            <AssignmentData />
          </div>
        </Datum.Provider>
      </Typography>
    </div>
  );
}

export default Dashboard;
