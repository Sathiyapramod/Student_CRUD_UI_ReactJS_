// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route,Navigate } from "react-router-dom";
import BasicForm from "./components/BasicForm";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { Edit } from "./Edit";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/students/edit/:id" element={<Edit />} />
        <Route path="/create" element={<BasicForm />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404"/>} />
      </Routes>
    </div>
  );
}

export default App;
