import "../App.css";
import Home from "../pages/Home";
import Register from "../pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
// import { useState, useEffect } from "react"

function RoutesMain() {

//   const [ auth, setAuth ] =  useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("@KenzieHub: token");

//     if (token) {
//         return setAuth(true);
//     }
// }, []);

  return (
    <div className="App">
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
