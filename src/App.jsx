import Navbar from "./componrnts/navbar";
import React from "react";
import Login from "./pages/login";
import Signin from "./pages/sign-in";
import { Routes,Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";


const App = () =>{
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Signin />}/>
            </Routes>
        </div>
    )
}

export default App;