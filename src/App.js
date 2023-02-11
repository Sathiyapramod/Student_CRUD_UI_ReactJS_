// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import BasicForm from "./components/BasicForm";
import { Home } from "./components/Home";
import { Students } from "./components/Students";
import { Edit } from "./Edit";
import Teachers from "./components/Teachers/Teachers";
import { PageNotFound } from "./components/PageNotFound";
import ViewTeachers from "./components/Teachers/ViewTeachers";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<ViewTeachers />} />
        <Route path="/students/edit/:id" element={<Edit />} />
        <Route path="/create" element={<BasicForm />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
