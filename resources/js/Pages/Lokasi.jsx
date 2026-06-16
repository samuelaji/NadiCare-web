import React from 'react';
import { Head } from '@inertiajs/react'; 
import Navbar from '../Components/NadiCare/Navbar';
import Footer from '../Components/Footer';

export default function Lokasi() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
            <Head title="Live Lokasi Stok Darah" /> 
            
            <Navbar />
      
            <main className="flex-1 w-full flex flex-col items-center">

                <div className="p-5 w-full max-w-7xl">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-center text-[#B63737] mt-10 mb-2">
                        Live Persebaran Stok Darah
                    </h1>
                    <p className="text-center text-gray-500 mb-8">Pantau ketersediaan stok darah di berbagai titik lokasi secara real-time.</p>
                </div>

                <div className="w-full px-6 mb-10 max-w-7xl">
                    <div className="h-[500px] md:h-[650px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                        <iframe 
                            title="Google Maps Lokasi Pusat"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9744634208477!2d110.3762412!3d-7.7925927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5786b51bf12f%3A0xc3cb7cf500858e72!2sYogyakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
          
                {/* KETERANGAN INDIKATOR */}
                <div className="w-full px-6 mb-20 max-w-7xl">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-t-8 border-[#B63737]">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Keterangan Indikator :</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex-shrink-0 shadow-lg shadow-red-200 animate-pulse"></div>
                                <div>
                                    <p className="text-gray-800 font-bold text-lg">Kritis</p>
                                    <p className="text-gray-500">Sangat membutuhkan donor darah segera untuk memenuhi kebutuhan pasien.</p>
                                </div>
                            </div>
                    
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex-shrink-0 shadow-lg shadow-yellow-100"></div>
                                <div>
                                    <p className="text-gray-800 font-bold text-lg">Waspada</p>
                                    <p className="text-gray-500">Persediaan darah menipis, cukup untuk beberapa hari ke depan saja.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex-shrink-0 shadow-lg shadow-emerald-100"></div>
                                <div>
                                    <p className="text-gray-800 font-bold text-lg">Aman</p>
                                    <p className="text-gray-500">Jumlah kantong darah tersedia melimpah dan mampu meng-cover permintaan rutin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}