import { CardContent, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

const formvalidationSchema = yup.object({
  id: yup.string().required("Enter your Id"),
  name: yup.string().required("Enter your Name !"),
  Subject: yup.string().required("Enter Subjects, Mandatory !"),
  Age: yup.string().required("Age is Mandatory"),
  Gender: yup.string().required("You've missed to enter this 🖐🏼"),
  Rating: yup.number().required("Select Rating out of 10").min(3).max(5),
  Remarks: yup.string().required("Enter valid Remarks"),
});

function ViewTeachers() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://63e4fb964474903105f66b27.mockapi.io/Teachers/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
        console.log(result);
      });
  }, [id]);

  return (
    <div className="container-fluid">
      <Typography variant="h4">Teachers Details</Typography>
      <Divider />
      <div className="d-flex flex-row justify-content-center align-items-center gap-3">
        <EditUser user={user} />
        <Card sx={{ width: 300 }}>
          <CardContent>
            <Typography align="left" variant="h6">
              FACULTY DETAILS
            </Typography>
            <div>
              <Typography align="left">
                <Typography variant="overline" display="block">
                  PERSONAL DETAILS
                </Typography>
                <span className="d-flex flex-row align-items-start gap-2 p-3">
                  <PermIdentityIcon />
                  <span>{user.id}</span>
                </span>
                <span className="d-flex flex-row align-items-start gap-2 p-3 ">
                  <ManageAccountsIcon />
                  <span>{user.name}</span>
                </span>
                <span className="d-flex flex-row align-items-start gap-2 p-3 ">
                  <LibraryBooksIcon />
                  <span>{user.Subject}</span>
                </span>
                <span className="d-flex flex-row align-items-start gap-2 p-3 ">
                  <DateRangeIcon />
                  <span>{user.Age}</span>
                </span>
                <span className="d-flex flex-row align-items-start gap-2 p-3 ">
                  {user.Gender === "Male" ? <ManIcon /> : <WomanIcon />}
                  <span>{user.Gender}</span>
                </span>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  function EditUser({ user }) {
    const formik = useFormik({
      initialValues: {
        id: user.id,
        name: user.name,
        Subject: user.Subject,
        Age: user.Age,
        Gender: user.Gender,
        Rating: user.Rating,
        Remarks: user.Remarks,
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
    const navigate = useNavigate();
    return (
      <Paper sx={{ width: 600 }} className="p-3 d-flex flex-row gap-3">
        <form onSubmit={formik.handleSubmit}>
          <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
            <label>Id:</label>
            <Input
              id="id"
              name="id"
              defaultValue={formik.values.id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.id && formik.errors.id ? formik.errors.id : ""}
            <br />
          </span>
          <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
            <label>Name:</label>
            <Input
              id="name"
              name="name"
              defaultValue={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </span>

          <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
            <label>Subject:</label>
            <Input
              id="Subject"
              name="Subject"
              defaultValue={formik.values.Subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Subject && formik.errors.Subject
              ? formik.errors.Subject
              : ""}
          </span>
          <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
            <label>Age:</label>
            <Input
              id="Age"
              name="Age"
              defaultValue={formik.values.Age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Age && formik.errors.Age ? formik.errors.Age : ""}
          </span>
          <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
            <label>Gender:</label>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={formik.values.Gender}
              name="radio-buttons-group"
            >
              <span>
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
              </span>
            </RadioGroup>
            {formik.touched.Gender && formik.errors.Gender
              ? formik.errors.Gender
              : ""}
          </span>
          <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
            <label>Rating(in terms of 0.5):</label>
            <Rating
              id="Rating"
              name="Rating"
              defaultValue={formik.values.Rating}
              precision={0.5}
            />
            {formik.touched.Rating && formik.errors.Rating
              ? formik.errors.Rating
              : ""}
          </span>
          <span className="d-flex flex-row justify-content-start gap-3 align-items-center">
            <label>Remarks:</label>
            <Input
              id="name"
              name="name"
              defaultValue={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Remarks && formik.errors.Remarks
              ? formik.errors.Remarks
              : ""}
          </span>
          <br />
          <span className="d-flex flex-row justify-content-between gap-5">
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                alert("Data updated Successfully");
                navigate("/teachers");
              }}
            >
              Update Data
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/teachers");
              }}
            >
              Go Back without Saving{" "}
            </Button>
          </span>
        </form>
      </Paper>
    );
  }
}

export default ViewTeachers;
