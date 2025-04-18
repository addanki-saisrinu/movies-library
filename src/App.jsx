import React from "react";
import Login from "./pages/login";
import { Routes,Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import Signin from "./pages/sign-in";

export const BASE_URL = "https://fakestoreapi.com/products";
const App = () =>{
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Signin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="dashboard/*" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App;
