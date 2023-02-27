import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { API } from "./General";

const formValidationScheme = yup.object({
  name: yup
    .string()
    .min(6, "Enter valid name only !!!")
    .required("Name is Mandatory "),
  id: yup
    .number()
    .min(3, "Enter valid ID Number")
    .required("Mandatory to enter ID"),
  place: yup
    .string()
    .min(3, "Enter valid Place")
    .required("Mandatory Place ! "),
  country: yup
    .string()
    .min(3, "Enter valid Country")
    .required("Mandatory to enter Country !! "),
});

function BasicForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: "", id: "", place: "", country: "" },
    validationSchema: formValidationScheme,
    onSubmit: (data) => {
      const newUser = {
        id: data.id,
        name: data.name,
        place: data.place,
        country: data.country,
      };
      console.log(newUser);
      fetch(`${API}/students`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Context-type": "application/json",
        },
      })
        .then((data) => data.json())
        .then(() => {
          alert("User Added Successfully !");
          navigate("/students");
        });
    },
  });
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-3">
      <Paper elevation={6} sx={{ width:'50%'}}>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 align-items-center"
        >
          <span className="fs-2">Create a New Student </span>
          <div className="d-flex flex-row align-items-center">
            <div className="col-6">
              <label htmlFor="name" className="form-label">
                First Name
              </label>
            </div>
            <div className="col-6">
              <input
                id="name"
                type="text"
                className="form-control"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <br />
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </div>
          <div className="d-flex flex-row align-items-center">
            <div className="col-6">
              <label htmlFor="name">ID number</label>
            </div>
            <div className="col-6">
              <input
                id="id"
                type="text"
                className="form-control"
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />{" "}
            </div>
            <br />
            {formik.touched.id && formik.errors.id ? formik.errors.id : ""}
          </div>
          <div className="d-flex flex-row align-items-center">
            <div className="col-6">
              <label htmlFor="place" className="form-label">
                Place
              </label>
            </div>
            <div className="col-6">
              <input
                id="place"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.place}
                onBlur={formik.handleBlur}
              />
            </div>
            <br />
            {formik.touched.place && formik.errors.place
              ? formik.errors.place
              : ""}
          </div>
          <div className="d-flex flex-row align-items-center">
            <div className="col-6">
              <label htmlFor="country"> Country </label>
            </div>
            <div className="col-6">
              <input
                id="country"
                type="text"
                className="form-control"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <br />
            {formik.touched.country && formik.errors.country
              ? formik.errors.country
              : ""}
          </div>
          <div className="col-7">
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default BasicForm;
