import React from "react";
import '../index.css'
import "../App.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="sticky top-0">
            <div className="flex justify-between bg-blue-900 items-center navbar sticky top-0 text-white">
                <div>
                    <h1 className="">
                        Logo
                    </h1>
                </div>
                <div className="">
                    <ul className="flex gap-4">
                        <li>
                            <Link className="btn login-btn" to="../login">Login</Link>
                        </li>
                        <li>
                            <Link className="btn register-btn" to="../register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;