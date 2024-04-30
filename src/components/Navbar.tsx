
"use client"
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./MenuIcon";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
   
    function getMenuClasses() {
        let menuClasses = [];
        if (isOpen) {
            menuClasses = [
                "flex",
                "absolute",
                "top-[60px]",
                "left-0",
                "bg-gray-800",
                "w-full",
                "p-4",
                "gap-10",
                "flex-col",
                "z-50",
            ];
        } else {
            menuClasses.push("hidden", "md:flex");
            menuClasses.push("z-0");
        } 
        return menuClasses.join(" ");
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    
    return (
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between">
            <div className="flex justify-between items-center w-full xl:mx-48">
                <a href="/" className="text-2xl font-bold">
                    Stantechs
                </a>
                <div className={getMenuClasses()}>
                    <Link className="mx-2 hover:text-gray-300" href="/" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link className="mx-2 hover:text-gray-300" href="/services" onClick={closeMenu}>
                        Services
                    </Link>
                    <Link className="mx-2 hover:text-gray-300" href="/training" onClick={closeMenu}>
                        Training
                    </Link>
                    <Link className="mx-2 hover:text-gray-300" href="/contact" onClick={closeMenu}>
                        Contact
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <MenuIcon className="w-6 h-6 text-white"/>
                    </button>
                </div>
            </div>
        </nav>
    );
};



