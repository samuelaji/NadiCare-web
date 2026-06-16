import React from 'react';
import { Head } from '@inertiajs/react'; 

import Navbar from '../Components/NadiCare/Navbar';
import Footer from '../Components/Footer';

export default function SyaratProses() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <Head title="Syarat & Proses" /> 
            
            <Navbar />

            <header className="bg-[#B63737] py-16 px-6 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Informasi Donor & Relawan</h1>
                <p className="text-red-100 max-w-2xl mx-auto text-lg">
                    Pelajari persyaratan dan langkah-langkah untuk menjadi bagian dari pahlawan kemanusiaan NadiCare.
                </p>
            </header>

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">

                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10 border-b-2 border-gray-200 pb-4">
                        <span className="bg-[#B63737] text-white px-4 py-1 rounded-full text-sm font-bold">01</span>
                        <h2 className="text-3xl font-extrabold text-gray-800">DONOR DARAH</h2>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-[#B63737] mb-8 flex items-center gap-2">
                             SYARAT MUTLAK
                        </h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            {[
                                { title: "Usia", desc: "17-65 Tahun", img: "/Icon/Usia.png" },
                                { title: "Berat Badan", desc: "Minimal 45 Kg", img: "/Icon/Berat Badan.png" },
                                { title: "Kesehatan", desc: "Jasmani & Rohani", img: "/Icon/Kesehatan.png" },
                                { title: "Tekanan Darah", desc: "120/80 mmHg", img: "/Icon/Tekanan Darah.png" },
                                { title: "Obat-obatan", desc: "Bebas Narkoba", img: "/Icon/obat.png" },
                            ].map((item, index) => (
                                <div key={index} className="w-[180px] md:w-[210px] bg-white rounded-2xl shadow-md border-t-4 border-[#B63737] p-6 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
                                    <img src={item.img} alt={item.title} className="w-20 h-20 object-contain mb-4" />
                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">{item.title}</span>
                                    <span className="text-sm font-normal text-gray-600">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-[#B63737] mb-8">ALUR PROSES</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            {[
                                { title: "Registrasi", desc: "Isi Formulir", img: "/Icon/registrasi.png" },
                                { title: "Wawancara", desc: "Cek Fisik & HB", img: "/Icon/wawancara.png" },
                                { title: "Proses Donor", desc: "Pengambilan Darah", img: "/Icon/donor.png" },
                                { title: "Selesai", desc: "Souvenir & Snack", img: "/Icon/registrasi selesai.png" },
                            ].map((item, index) => (
                                <div key={index} className="w-[180px] md:w-[210px] bg-white rounded-2xl shadow-md border-t-4 border-[#B63737] p-6 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
                                    <img src={item.img} alt={item.title} className="w-20 h-20 object-contain mb-4" />
                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">{item.title}</span>
                                    <span className="text-sm font-normal text-gray-600">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="border-t-2 border-dashed border-gray-300 my-16"></div>

                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10 border-b-2 border-gray-200 pb-4">
                        <span className="bg-[#B63737] text-white px-4 py-1 rounded-full text-sm font-bold">02</span>
                        <h2 className="text-3xl font-extrabold text-gray-800">TIM RELAWAN</h2>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-[#B63737] mb-8">SYARAT GABUNG</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            {[
                                { title: "Usia", desc: "Minimal 18 Tahun", img: "/Icon/Usia.png" },
                                { title: "Keterampilan", desc: "Komunikasi Baik", img: "/Icon/Komunikasi.png" },
                                { title: "Jiwa Sosial", desc: "Siap Melayani", img: "/Icon/sosial.png" },
                                { title: "Pelatihan", desc: "Wajib Orientasi", img: "/Icon/orientasi.png" },
                            ].map((item, index) => (
                                <div key={index} className="w-[180px] md:w-[210px] bg-white rounded-2xl shadow-md border-t-4 border-[#B63737] p-6 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
                                    <img src={item.img} alt={item.title} className="w-20 h-20 object-contain mb-4" />
                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">{item.title}</span>
                                    <span className="text-sm font-normal text-gray-600">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-[#B63737] mb-8">ALUR PENDAFTARAN</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            {[
                                { title: "Registrasi", desc: "Online/Offline", img: "/Icon/registrasi.png" },
                                { title: "Wawancara", desc: "Validasi Data", img: "/Icon/wawancara.png" },
                                { title: "Orientasi", desc: "Pelatihan Dasar", img: "/Icon/orientasi.png" },
                                { title: "Peta Tugas", desc: "Penempatan Lokasi", img: "/Icon/peta.png" },
                                { title: "Mentoring", desc: "Bimbingan Senior", img: "/Icon/Mentoring.png" },
                            ].map((item, index) => (
                                <div key={index} className="w-[180px] md:w-[210px] bg-white rounded-2xl shadow-md border-t-4 border-[#B63737] p-6 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
                                    <img src={item.img} alt={item.title} className="w-20 h-20 object-contain mb-4" />
                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">{item.title}</span>
                                    <span className="text-sm font-normal text-gray-600">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}