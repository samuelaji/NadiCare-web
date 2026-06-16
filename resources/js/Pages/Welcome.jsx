import React from 'react';
import Navbar from '../Components/NadiCare/Navbar';
import TombolDaftar from '../Components/NadiCare/TombolDaftar';

export default function Beranda() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Memanggil komponen Navbar untuk dites */}
            <Navbar />
        </div>
    );
}