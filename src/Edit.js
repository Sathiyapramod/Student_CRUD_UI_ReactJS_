import React from "react";
import { API } from "./components/General";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, FormLabel } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Paper from "@mui/material/Paper";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`${API}/students/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      });
  }, [user, id]);
  const navigate = useNavigate();
  return (
    <div className="container-fluid d-flex flex-row justify-content-center align-items-center">
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
      {user ? <EditStudent user={user} /> : "Loading..."}
    </div>
  );
  function EditStudent({ user }) {
    const formvalidationSchema = yup.object({
      name: yup.string().required("Enter a valid name"),
      id: yup.string().min(1).max(1000).required("Enter valid ID"),
      place: yup.string().min(3).required("Enter valid Place !"),
      country: yup.string().required("enter valid country !"),
    });
    const formik = useFormik({
      initialValues: {
        name: user.name,
        place: user.place,
        country: user.country,
        id: user.id,
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        console.log(values);
        const editUser = {
          name: values.name,
          place: values.place,
          country: values.country,
          id: values.id,
        };
        fetch(`${API}/students/${values.id}`, {
          method: "PUT",
          body: JSON.stringify(editUser),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((data) => data.json())
          .then(() => {
            alert("DATA updated Successfully ! ");
            navigate("/students");
          });
      },
    });
    return (
      <div>
        <Paper elevation={3} sx={{ width: 600 }}>
          <form onSubmit={formik.handleSubmit}>
            <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
              <FormLabel color="primary">Name</FormLabel>
              <Input
                id="name"
                name="name"
                defaultValue={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
            </span>
            <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
              <FormLabel color="primary">Place</FormLabel>
              <Input
                id="place"
                name="place"
                defaultValue={formik.values.place}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.place && formik.errors.place
                ? formik.errors.place
                : ""}
            </span>
            <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
              <FormLabel color="primary">Country</FormLabel>
              <Input
                id="country"
                name="country"
                defaultValue={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.country && formik.errors.country
                ? formik.errors.country
                : ""}
            </span>
            <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
              <FormLabel color="primary">ID no</FormLabel>
              <Input
                id="id"
                name="id"
                defaultValue={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.id && formik.errors.id ? formik.errors.id : ""}
            </span>
            <Button type="submit" variant="contained" color="success">
              UPDATE
            </Button>
            <Button variant="contained" color="primary">
              Go Back
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default Edit;
