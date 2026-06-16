import React from 'react';
import { Head } from '@inertiajs/react';

import Navbar from '../Components/NadiCare/Navbar';
import Footer from '../Components/Footer';

export default function TentangKami() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
            <Navbar />
            <Head title="Tentang Kami" />
            
            <main className="flex-1 flex flex-col">
                <header className="w-full bg-gradient-to-b from-[#B63737] to-[#8a2626] flex flex-col justify-center items-center text-white text-center px-6 py-32 md:py-40">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
                        Menjembatani Kebaikan, <br />
                        Menyelamatkan Nyawa.
                    </h1>
                    <p className="text-red-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        NadiCare didirikan dengan satu tujuan sederhana: memastikan tidak ada pasien yang kehilangan nyawa hanya karena kekurangan pasokan darah di saat kritis.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row gap-12 items-start justify-between py-20 max-w-7xl mx-auto px-6 w-full">

                    <div className="w-full md:w-[55%] space-y-6">
                        <div className="text-xs font-bold tracking-widest uppercase block text-[#B63737]">
                            VISI & NILAI KAMI
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Membangun Ekosistem Donor <br className="hidden md:inline" /> yang Transparan & Modern
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Kami percaya kepedulian sosial harus didukung oleh teknologi yang memudahkan. NadiCare bukan sekadar 
                            platform informasi, melainkan jembatan komunikasi yang menghubungkan orang sehat dengan mereka yang berjuang di ranjang rumah sakit.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Melalui sistem manajemen relawan dan kemitraan dengan Palang Merah Indonesia serta berbagai rumah sakit daerah, 
                            kami memastikan setiap tetes darah Anda sampai ke tujuan dengan aman.
                        </p>
                    </div>

                    <div className="w-full md:w-[40%] text-white rounded-3xl p-8 space-y-8 shadow-xl bg-[#B63737]">

                        <div className="flex items-start space-x-4">
                            <div className="bg-white text-[#B63737] p-2 rounded-xl shadow-md flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-white">Empati Sebagai Dasar</h4>
                                <p className="text-sm text-red-100 leading-relaxed">Semua tindakan dan pelayanan kami didorong oleh rasa kemanusiaan dan kepedulian terhadap sesama.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white text-[#B63737] p-2 rounded-xl shadow-md flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-white">Transparansi Data</h4>
                                <p className="text-sm text-red-100 leading-relaxed">Kejelasan informasi jadwal dan ketersediaan stok darah agar masyarakat dapat merespons kebutuhan dengan cepat.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white text-[#B63737] p-2 rounded-xl shadow-md flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 2.96 5.73V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.27C17.81 13.47 19 11.38 19 9c0-3.86-3.14-7-7-7z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-white">Inovasi Layanan</h4>
                                <p className="text-sm text-red-100 leading-relaxed">Menggunakan platform digital untuk mempermudah pendaftaran dan pengingat waktu donor kembali.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}