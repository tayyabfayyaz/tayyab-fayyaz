'use client'

import Link from "next/link";
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMenu, MdClose } from "react-icons/md";



function Header(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <main>
            <nav className="bg-gray-900 text-white w-full h-16 flex justify-between items-center px-6 lg:px-16 py-4 lg:py-5">
                <div className="logo-box text-2xl lg:text-3xl font-bold text-gray-400 cursor-pointer">
                   Tayyab Fayyaz...
                </div>

                 <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <MdClose size={28} /> : <MdOutlineMenu size={28} /> }
                    </button>
                </div>

                <div className="hidden lg:flex items-center gap-16">
                    
                    <ul className="flex text-xl font-semibold gap-10">
                        <li className="hover:text-yellow-400 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-yellow-400 hover:transition hover:duration-300 hover:ease-in-out "><Link href="./">Home</Link></li>
                        <li className="hover:text-yellow-400 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-yellow-400 hover:transition hover:duration-300 hover:ease-in-out "><Link href="./about">About</Link></li>
                        <li className="hover:text-yellow-400 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-yellow-400 hover:transition hover:duration-300 hover:ease-in-out "><Link href="./contact">Contact</Link></li>
                    </ul>

                    <ul className="flex text-xl font-semibold gap-10">
                        <li className="hover:text-white/75"><Link href="/"><FaLinkedin /></Link></li>
                        <li className="hover:text-white/75"><Link href="/"><FaGithub /></Link></li>
                        <li className="hover:text-white/75"><Link href="/"><FaFacebook /></Link></li>
                        <li className="hover:text-white/75"><Link href="/"><FaInstagram /></Link></li>
                    </ul>
                </div>
            </nav>

                <div className={` lg:hidden items-center gap-16 w-full bg-gray-900 text-white ${isOpen ? 'block' : 'hidden'}`}>
                    
                    <ul className="flex flex-col text-lg space-y-4 py-6 px-8">
                        <li className="hover:text-yellow-400"><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li className="hover:text-yellow-400"><Link href="./about" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li className="hover:text-yellow-400"><Link href="./contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>

                    <ul className="flex justify-center text-2xl font-semibold gap-8 py-6">
                        <li className="hover:text-white/75"><Link href="/"><FaLinkedin /></Link></li>
                        <li className="hover:text-white/75"><Link href="/"><FaGithub /></Link></li>
                        <li className="hover:text-white/75"><Link href="/"><FaFacebook /></Link></li>
                        <li className="hover:text-white/75"><Link href="/"><FaInstagram /></Link></li>
                    </ul>
                </div>
        </main>
    );
};

export default Header;