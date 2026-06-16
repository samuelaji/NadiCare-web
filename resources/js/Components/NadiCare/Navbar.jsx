import React from 'react';
import { Link } from '@inertiajs/react';
import logoNadiCare from '../../assets/logo.png';
import TombolDaftar from './TombolDaftar';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 py-2">

                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img
                                src={logoNadiCare}
                                alt="Logo NadiCare"
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-10 font-sans">

                        <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-[#B63737] tracking-wide transition duration-300">
                            BERANDA
                        </Link>
                        <Link href="/syarat" className="text-sm font-semibold text-gray-700 hover:text-[#B63737] tracking-wide transition duration-300">
                            SYARAT & PROSES
                        </Link>
                        <Link href="/tentang" className="text-sm font-semibold text-gray-700 hover:text-[#B63737] tracking-wide transition duration-300">
                            TENTANG KAMI
                        </Link>
                        <Link href="/daftar" className="text-sm font-semibold text-gray-700 hover:text-[#B63737] tracking-wide transition duration-300">
                            KONTAK & RELAWAN
                        </Link>
                    </div>

                    <div className="flex-shrink-0">
                        <TombolDaftar text="Daftar sekarang" href="/daftar" />
                    </div>
                </div>
            </div>
        </nav>
    );
}