import React, { useState } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault();
    
       
        if(email === "saisrinuaddanki8@gmail.com" && password === "123456"){
            navigate("/");
        }
        else{
            alert('afhekw')
        }
        
        setEmail("");
        setPassword("");
      };
    return (
        <div>
            <div className="flex justify-center items-center login-page">
                <div className="login-card">
                    <div>
                        <h1 className="text-center text-3xl font-semibold">USER LOGIN FORM</h1>
                    </div>
                    <div>
                        <form onSubmit={loginSubmit}>
                            <div>
                                <label htmlFor="loginEmail" className="text-2xl block">Email</label>
                                <input 
                                type="email" 
                                className="border border-1 w-full ps-4 login-email text-2xl" 
                                name="" 
                                id="" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="enter your email"
                                />
                            </div>
                            <div>
                            <label htmlFor="loginPassword" className="text-2xl block">Password</label>
                                <input 
                                type="password" 
                                className="border border-1 w-full ps-4 login-password text-2xl" 
                                name="" 
                                id=""  
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="enter your password"
                                />
                            </div>
                            <div className="float-right">
                            <button type="submit" className="btn register-form-btn text-2xl">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;