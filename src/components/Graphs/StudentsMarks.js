import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Paper from "@mui/material/Paper";
import React from "react";
import { useGlobalContext } from "../Dashboard";

function StudentsMarks() {
  const students = useGlobalContext().studentsData;
  return (
      <Paper
        sx={{
          width: 920,
          height: 620,
          padding: 10,
          margin: 5,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        elevation={6}
      >
        <LineChart width={860} height={500} data={students}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[35, 100]} label="Marks" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="marks.javascript"
            stroke="#1a53ff"
            activeDot={{ r: 5 }}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="marks.HTML"
            stroke="#bd7ebe"
            strokeWidth={2}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="marks.ReactJS"
            stroke="#ffb55a"
            strokeWidth={2}
            activeDot={{ r: 3 }}
          />
        </LineChart>
      </Paper>

  );
}

export default StudentsMarks;
