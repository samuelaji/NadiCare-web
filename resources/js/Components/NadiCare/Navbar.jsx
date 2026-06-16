// resources/js/Components/Navbar.jsx
import React from 'react';
import logoNadiCare from '../../assets/logo.png';
import TombolDaftar from './TombolDaftar';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 py-2">

                    {/* BAGIAN LOGO — span dihapus, langsung pakai img */}
                    <div className="flex-shrink-0">
                        <img
                            src={logoNadiCare}
                            alt="Logo NadiCare"
                            className="h-16 w-auto object-contain"
                        />
                    </div>

                    {/* BAGIAN MENU — font-sans untuk override serif */}
                    <div className="hidden md:flex items-center space-x-10 font-sans">
                        <a href="/" className="text-sm font-semibold text-gray-700 hover:text-red-600 tracking-wide transition duration-300">
                            BERANDA
                        </a>
                        <a href="/syarat" className="text-sm font-semibold text-gray-700 hover:text-red-600 tracking-wide transition duration-300">
                            SYARAT & PROSES
                        </a>
                        <a href="/tentang" className="text-sm font-semibold text-gray-700 hover:text-red-600 tracking-wide transition duration-300">
                            TENTANG KAMI
                        </a>
                        <a href="/kontak" className="text-sm font-semibold text-gray-700 hover:text-red-600 tracking-wide transition duration-300">
                            KONTAK & RELAWAN
                        </a>
                    </div>

                    {/* BAGIAN TOMBOL */}
                    <div className="flex-shrink-0">
                        <TombolDaftar text="Daftar sekarang" />
                    </div>
                </div>
            </div>
        </nav>
    );
}