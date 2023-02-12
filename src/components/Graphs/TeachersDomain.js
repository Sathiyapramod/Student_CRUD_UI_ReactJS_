import React from "react";
import { Paper } from "@mui/material";
import { useGlobalContext } from "../Dashboard";
import {
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  Tooltip,
  YAxis,
  Bar,
} from "recharts";

function TeachersDomain() {
  const teachers = useGlobalContext().teachersData;
  return (
    <div>
      <Paper sx={{ width: 850, height: 620, padding: 10,margin:5, }} elevation={6}>
        <BarChart width={740} height={500} data={teachers}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[2, 5]} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Rating"
            fill="#8884d8"
            barSize={50}
            width="10"
            barCategoryGap="20%"
          />
        </BarChart>
      </Paper>
    </div>
  );
}

export default TeachersDomain;
