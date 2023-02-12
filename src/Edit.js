import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://63cf7c7f1098240437808ea0.mockapi.io/students/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
        console.log(result);
      });
  }, []);
  return (
    <div className="container-fluid">
      <Card elevation={3} sx={{ width: 300 }}>
        <CardContent>
          <Typography align="left" variant="h6">
            STUDENT DETAILS
          </Typography>
          <div>
            <Typography align="left">
              <Typography variant="overline" display="block">
                PERSONAL DETAILS
              </Typography>
              <span className="d-flex flex-row justify-content-between align-items-center">
                <span>
                  <span className="d-flex flex-row align-items-start gap-2 p-2">
                    <AccountCircleOutlinedIcon />
                    <span>{user.name}</span>
                  </span>
                  <span className="d-flex flex-row align-items-start gap-2 p-2">
                    <NearMeRoundedIcon />
                    <span>{user.place}</span>
                  </span>
                  <span className="d-flex flex-row align-items-start gap-2 p-2">
                    <OutlinedFlagOutlinedIcon />
                    <span>{user.country}</span>
                  </span>
                  <span className="d-flex flex-row align-items-start gap-2 p-2">
                    <FingerprintIcon />
                    <span>{user.id}</span>
                  </span>
                </span>
              </span>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Edit;
