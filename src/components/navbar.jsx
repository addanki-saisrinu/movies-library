import React from "react";
import '../index.css'
import "../App.css"
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className="sticky top-0">
            <div className="flex justify-between bg-blue-900 items-center navbar sticky top-0 text-white p-5 sm:p-2 md:p-3 lg:p-4">
                <div>
                    <h1 className="hidden sm:block">
                        Logo
                    </h1>
                    <div className="md:hidden">
                {menuOpen ? (
                    <XMarkIcon className="h-8 w-8" onClick={() => setMenuOpen(false)} />
                ) : (
                    <Bars3Icon className="h-8 w-8" onClick={() => setMenuOpen(true)} />
                )}
            </div>
                </div>
                <div className="">
                    <Link>
                        <div className="border border-1 p-3 rounded rounded-full">
                        <FaUser />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;