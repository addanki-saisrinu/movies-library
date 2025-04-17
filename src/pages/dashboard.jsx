import { Link, Route, Routes } from "react-router-dom"
import "../App.css"
import About from "./about"
import Home from "./Home"
import Account from "./account"
import Contact from "./contact"
import Settings from "./settings"

export function Dashboard() {
    return (
        <div>
            <div className="dashboard-container">
                <div className="dashboard-side-section">
                    <ul>
                        <li className="user-li">
                            <Link className="user-details" to="./home">Home</Link>
                        </li>
                        <li className="user-li">
                            <Link to="./about" className="user-details">About</Link>
                        </li>
                        <li className="user-li">
                            <Link to="./account" className="user-details">Account</Link>
                        </li>
                        <li className="user-li">
                            <Link to="./contact" className="user-details">Contact</Link>
                        </li>
                        <li className="user-li">
                            <Link to="./settings" className="user-details">Settings</Link>
                        </li>
                    </ul>
                </div>
                <div className="dashboard-main-section">
                    <Routes>
                        <Route path="/home" element={ <Home />} />
                        <Route path="/about" element={ <About />} />
                        <Route path="/account" element={ <Account />} />
                        <Route path="/contact" element={ <Contact />} />
                        <Route path="/settings" element={ <Settings />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}