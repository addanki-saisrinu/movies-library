import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css"
const Signin = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");

        setUsername("")
        setEmail("");
        setPassword("");
    };
    return (
        <div>
            <div className="flex justify-center items-center signin-h-secreen signin">
                <div className="sign-card">
                    <h1 className="text-center font-semibold">USER REGISTER FORM</h1>
                    <div className="user-details-1">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <label htmlFor="username" className="block">Username:</label>
                                    <input 
                                        type="text"
                                        name=""
                                        id=""
                                        className="w-full border border-1 text-2xl p-2"
                                        placeholder="enter username"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="block">Email:</label>
                                    <input  
                                        type="email"
                                        name=""
                                        id=""
                                        className="w-full border border-1 p-2"
                                        placeholder="enter eamil"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="block">Password:</label>
                                    <input 
                                    type="password"
                                        name=""
                                        id=""
                                        className="w-full border border-1 p-2"
                                        placeholder="enter eamil"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <div className="float-right">
                                        <button className="btn register-form-btn" type="submit">Register</button>
                                    </div>
                                </div>
                                <div className="text-center mt-4 already-account-link">
                                    <Link to="/login" className="text-1xl">AlreadyAccount <span className="text-blue-500 underline">click here</span></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;