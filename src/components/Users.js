import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";

export function Users() {
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
    <div className="User-list container bg-lighter mt-3">
      <h1>Users Lists </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Place</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.place}</td>
                <td>{element.country}</td>
                <td>
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
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={5}>
              <Button onClick={() => navigate("/")}>Go Back</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
