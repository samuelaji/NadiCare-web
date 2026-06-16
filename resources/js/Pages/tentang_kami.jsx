import React from 'react';
import {Head} from '@inertiajs/react';
// import navbar from '../components/navbar';
// import Footer from '../components/footer';



export default function tentang_kami() {
    return (
        <div className="tentang-kami-min-h-screen bg-gray-50 text-gray-800 font-poppins">
          
            
            <header className="text-white py-20 text-center px-1 bg-gradient-to-b from-[#B93F3F] to-[#531C1C]">
               
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
                    Menjembatani Kebaikan, <br />
                    Menyelamatkan Nyawa.
                </h1>
                <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    NadiCare didirikan dengan satu tujuan sederhana: memastikan tidak ada pasien yang kehilangan nyawa hanya karena kekurangan pasokan darah disaat kritis.
                </p>
            </header>

           
           
            <div className="flex flex-col md:flex-row gap-12 items-start justify-between py-20 max-w-7xl mx-auto px-6">
                
               
                <div className="w-full md:w-[55%] space-y-6">
                    <div className="text-xs font-bold tracking-widest uppercase block text-[#A61C2E]">
                        VISI & NILAI KAMI
                    </div>
                    <h2 className="text-3xl font-bold text-black leading-tight">
                        Membangun Ekosistem Donor <br className="hidden md:inline" />  yang Transparan & Modern
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Kami percaya kepedulian sosial harus didukung oleh teknologi yang memudahkan. NadiCare bukan sekedar platform informasi, melainkan komunikasi yang menghubungkan orang sehat dengan mereka yang berjuang di ranjang rumah sakit.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Melalui sistem manajemen relawan dan kemitraan dengan Palang Merah Indonesia, serta sebagai rumah sakit daerah, kami memastikan setiap tetes darah anda sampai ke tujuan dengan aman.
                    </p>
                </div>

                        {/*untuk begorund-merah-dikanan-bawah*/}

                         <div className=" w-full md:w-[38%] text-white rounded-3xl p-8 space-y-8 shadow-lg bg-[#A61C2E]">
                    
                    
                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-2 rounded-xl shadow flex-shrink-0 w-12 h-12 flex items-center justify-center">
                            <img src="/images/ikonhati.png" alt="ikon" className="w-6 h-6 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-bold text-base mb-1 text-white">Empati Sebagai Dasar</h4>
                            <p className="text-xs text-red-100 leading-relaxed">Semua tindakan dan pelayanan kami didorong oleh rasa kemanusiaan dan kepedulian terhadap sesama.</p>
                        </div>
                    </div>
                    
                    
                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-2 rounded-xl shadow flex-shrink-0 w-12 h-12 flex items-center justify-center">
                            <img src="/images/perisai.png" alt="ikon" className="w-6 h-6 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-bold text-base mb-1 text-white">Transparansi Data</h4>
                            <p className="text-xs text-red-100 leading-relaxed">Kejelasan informasi jadwal dan ketersediaan stok darah agar masyarakat dapat merespons kebutuhan dengan cepat.</p>
                        </div>
                    </div>


                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-2 rounded-xl shadow flex-shrink-0 w-12 h-12 flex items-center justify-center">
                            <img src="/images/kepalaa.png" alt="ikon" className="w-6 h-6 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-bold text-base mb-1 text-white">Inovasi Layanan</h4>
                            <p className="text-xs text-red-100 leading-relaxed">Menggunakan platform digital untuk mempermudah pendaftaran dan pengingat waktu donor kembali.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}