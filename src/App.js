// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import BasicForm from "./components/BasicForm";
import { Home } from "./components/Home";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create" element={<BasicForm />} />
      </Routes>
    </div>
  );
}

export default App;
