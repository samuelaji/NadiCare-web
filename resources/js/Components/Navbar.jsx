import React from 'react';
import logoNadiCare from '../assets/logo.png';
import TombolDaftar from './TombolDaftar';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0">
                        <span className="text-2xl font-extrabold text-red-600 tracking-wider">
                            <img src={logoNadiCare} alt="Logo" className="h-20 w-20 object-contain" />
                        </span>
                    </div>


                    <div className="hidden md:flex space-x-20">
                        <a href="/" className="text-gray-700 hover:text-red-600 font-medium transition duration-300">
                            BERANDA
                        </a>
                        <a href="/syarat" className="text-gray-700 hover:text-red-600 font-medium transition duration-300">
                            SYARAT & PROSES
                        </a>
                        <a href="/tentang" className="text-gray-700 hover:text-red-600 font-medium transition duration-300">
                            TENTANG KAMI
                        </a>
                        <a href="/tentang" className="text-gray-700 hover:text-red-600 font-medium transition duration-300">
                            KONTAK & RELAWAN
                        </a>
                        <a href="/tentang" className="text-gray-700 hover:text-red-600 font-medium transition duration-300">
                            DAFTAR SEKARANG
                        </a>
                    </div>

                    <div classname="flex-shrink-0">
                        <TombolDaftar text="DAFTAR SEKARANG"></TombolDaftar>
                    </div>

                </div>
            </div>
        </nav>
    );
}