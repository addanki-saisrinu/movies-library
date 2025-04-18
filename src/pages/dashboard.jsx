import "../App.css"
import React, { useState } from "react"
import Navbar from "../components/navbar"
import { NavLink, Routes, Route } from "react-router-dom"
import Jwelery from "./jwelery"
import Electronics from "./electronics"
import Men from "./men"
import Women from "./women"
import AllProducts from "./allProducts"

export function Dashboard() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="grid grid-cols-1 sm:grid-cols-[2fr_10fr] text-2xl">
                
                <div className={`bg-gray-700 h-[calc(100vh_-_53px)] sticky top-[53px] text-white text-3xl z-50 sm:block transition-transform duration-300 ease-in-out
                    ${menuOpen ? "block" : "hidden"} sm:block`}>
                    <ul className="tracking-wider">
                        <li className="hover:bg-gray-400 hover:text-black">
                            <NavLink to="/dashboard/jwelery" className="w-full block px-6 py-4" onClick={() => setMenuOpen(false)}>Jewelery</NavLink>
                        </li>
                        <li className="hover:bg-gray-400 hover:text-black">
                            <NavLink to="/dashboard/electronics" className="w-full block px-6 py-4" onClick={() => setMenuOpen(false)}>Electronics</NavLink>
                        </li>
                        <li className="hover:bg-gray-400 hover:text-black">
                            <NavLink to="/dashboard/men" className="w-full block px-6 py-4" onClick={() => setMenuOpen(false)}>Men</NavLink>
                        </li>
                        <li className="hover:bg-gray-400 hover:text-black">
                            <NavLink to="/dashboard/women" className="w-full block px-6 py-4" onClick={() => setMenuOpen(false)}>Women</NavLink>
                        </li>
                        <li className="hover:bg-gray-400 hover:text-black">
                            <NavLink to="/dashboard/allProducts" className="w-full block px-6 py-4" onClick={() => setMenuOpen(false)}>AllProducts</NavLink>
                        </li>
                    </ul>
                </div>

               
                <div className="p-4">
                    <Routes>
                        <Route path="jwelery" element={<Jwelery />} />
                        <Route path="electronics" element={<Electronics />} />
                        <Route path="men" element={<Men />} />
                        <Route path="women" element={<Women />} />
                        <Route path="allProducts" element={<AllProducts />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}