import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./components/General";
import { useNavigate } from "react-router-dom";

const formValidationScheme = yup.object({
  name: yup
    .string()
    .min(5, "Enter valid name only !!!")
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

export function Edit() {
  const { id } = useParams();
  const [arr, setUser] = useState(null);
  useEffect(() => {
    fetch(`${API}/students/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      });
  }, [id]);
  return arr ? <EditUser arr={arr} /> : "Loading... ";
}
function EditUser({ arr }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: arr.name,
      id: arr.id,
      place: arr.place,
      country: arr.country,
    },
    validationSchema: formValidationScheme,
    onSubmit: (data) => {
      const newUser = {
        id: data.id,
        name: data.name,
        place: data.place,
        country: data.country,
      };
      console.log(newUser);
      fetch(`${API}/students/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(newUser),
        headers: {
          "Context-type": "application/json",
        },
      })
        .then((data) => data.json())
        .then(() => {
          alert("Data Saved Successfully !");
          navigate("/dashboard");
        });
    },
  });
  return (
    <div className="justify-content-center mt-3">
    {Array(3).fill("null").map(()=> {
        return (
            <br />
        )
    })}
    <h1>Edit User Details </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column gap-4 align-items-center"
      >
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
          {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
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
            />
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
