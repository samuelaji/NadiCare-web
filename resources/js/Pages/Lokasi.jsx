import React from 'react';
import { Head } from '@inertiajs/react'; 
import Navbar from '../Components/NadiCare/Navbar';
import Footer from '../Components/Footer';

export default function Lokasi() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
            <Head title="Live Lokasi" /> 
            
            <Navbar />
            <main className="flex-1 w-full flex flex-col items-center">
                
                <div className="p-5 w-full max-w-7xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#B63737] mt-8 mb-4">
                        Live Persebaran Stok Darah
                    </h1>
                </div>
            
                <div className="w-full px-6 mb-8 max-w-7xl">
                    <div className="h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center border border-gray-200">
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
          
                <div className="w-full px-6 mb-16 max-w-7xl">
                    <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#B63737]">
                        
                        <div className="flex items-center gap-5 mb-5">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex-shrink-0 shadow-sm shadow-red-200"></div>
                            <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                                Sangat membutuhkan donor pengganti.
                            </p>
                        </div>
                   
                        <div className="flex items-center gap-5 mb-5">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex-shrink-0 shadow-sm shadow-yellow-200"></div>
                            <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                                Persediaan darah masih ada untuk beberapa hari ke depan.
                            </p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex-shrink-0 shadow-sm shadow-emerald-200"></div>
                            <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                                Jumlah kantong darah yang tersedia & mampu meng-cover permintaan rutin.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}