import Home from "../pages/Home";
import Register from "../pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function RoutesMain() {


  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
    </div>
  );
}

export default RoutesMain;
