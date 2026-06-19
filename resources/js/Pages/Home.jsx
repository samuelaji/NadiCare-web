import React from 'react';
import { Head, Link } from '@inertiajs/react';

import Navbar from '../Components/NadiCare/Navbar';
import Footer from '../Components/Footer';

import fotoUtama from '../assets/fotoutama.png';
import fotoDonorDarah from '../assets/fotodonordarah.jpeg';
import fotoTimRelawan from '../assets/fototimrelawan.jpeg';
import fotoSebarkanKepedulian from '../assets/fotosebarkankepedulian.jpeg';
import fotoHariDonor from '../assets/haridonordarahsedunia.png';
import iconKalender from '../assets/iconkalender.png';
import iconLokasi from '../assets/iconlokasi.png';
import iconCariLokasi from '../assets/fotocarilokasi.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans select-none bg-gray-50">
      <Head title="Beranda" />

      <Navbar />

      <main className="flex-1 flex flex-col">
        <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-[#B63737]"
            style={{ clipPath: 'polygon(0 0, 80% 0, 60% 100%, 0 100%)' }}
          ></div>

          <div
            className="absolute inset-0 w-full h-full bg-white"
            style={{ clipPath: 'polygon(80% 0, 100% 0, 100% 100%, 60% 100%)' }}
          ></div>

          <div className="relative z-10 w-full min-h-[calc(100vh-80px)] flex items-center px-6 md:px-16">
            <div className="w-full md:w-1/2">
              <h1 className="text-white leading-[1.2]">
                <span className="font-['Sansita_One'] font-bold text-[50px] md:text-[80px] inline-block">
                  Darahmu Berharga.
                </span>
                <br />
                <span className="font-['Sansita_One'] text-[50px] md:text-[80px] font-bold inline-block">
                  Donasi Sekarang!
                </span>
              </h1>

              <p className="font-['Trocchi'] font-normal text-lg md:text-[20px] text-white/90 mt-5 leading-relaxed max-w-2xl">
                Setiap detik, seseorang membutuhkan transfusi darah.
                Mari jadikan diri Anda sebagai pahlawan kemanusiaan hari ini.
                Donor aman, cepat, dan menyelamatkan nyawa.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-10 mt-10 md:mt-14">
                <Link
                  href="/lokasi"
                  className="font-bold bg-white text-[#B63737] px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition inline-flex items-center gap-2"
                >
                  <img src={iconCariLokasi} alt="Cari Lokasi" className="w-5 h-5 object-contain" />
                  Cari Lokasi Donor
                </Link>

                <Link
                  href="/syarat"
                  className="font-bold border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition inline-block"
                >
                  Pelajari Syarat
                </Link>
              </div>
            </div>

            <div className="hidden md:block absolute right-0 bottom-0 w-[45%] h-full">
              <img
                src={fotoUtama}
                alt="Hero"
                className="w-full h-full object-contain object-bottom mix-blend-multiply"
              />
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-20 px-6 md:px-16">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col">
              <img src={fotoDonorDarah} alt="Donor Darah" className="w-full h-56 object-cover" />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#B63737] mb-3">Donor Darah</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  Donor darah adalah cara nyata untuk menolong sesama, karena satu kantong
                  darah yang Anda donasikan dapat membantu menyelamatkan banyak nyawa.
                </p>
                <Link
                  href="/syarat"
                  className="bg-[#B63737] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#912b2b] transition-all shadow-md text-center"
                >
                  Pelajari Lebih Lanjut &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col">
              <img src={fotoTimRelawan} alt="Tim Relawan" className="w-full h-56 object-cover" />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#B63737] mb-3">Tim Relawan</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  Yuk, bantu kami di balik layar! Mulai dari mengelola event, edukasi warga,
                  hingga bantuan administrasi. Tenaga dan semangatmu sangat kami butuhkan.
                </p>
                <Link
                  href="/daftar"
                  className="bg-[#B63737] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#912b2b] transition-all shadow-md text-center"
                >
                  Daftar Relawan &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col">
              <img src={fotoSebarkanKepedulian} alt="Sebarkan Kepedulian" className="w-full h-56 object-cover" />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#B63737] mb-3">Sebarkan Kepedulian</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  Bantu sebarkan informasi donor darah dan ajak keluarga serta teman untuk
                  berani mendonorkan melalui media sosial.
                </p>
                <Link
                  href="/tentang"
                  className="bg-[#B63737] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#912b2b] transition-all shadow-md text-center"
                >
                  Tentang Kami &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

        <section className="w-full bg-gray-50 text-black py-20 px-6 md:px-16 border-t border-gray-200">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

            <div className="flex-1 flex justify-center">
              <img src={fotoHariDonor} alt="Hari Donor Darah Sedunia" className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-xl" />
            </div>

            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#B63737] leading-tight">
                Hari Donor Darah Sedunia
              </h2>
              <p className="text-lg font-normal mb-8 text-gray-700 leading-relaxed">
                Setiap tanggal 14 Juni, seluruh dunia memperingati Hari Donor Darah.
                Ini adalah pengingat bahwa kebutuhan akan darah yang aman tidak pernah
                berhenti. Mari ambil bagian, jadikan momen ini sebagai langkah nyata
                kepedulian Anda.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <img src={iconKalender} alt="Kalender" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">14 Juni 2026</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <img src={iconLokasi} alt="Lokasi" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Seluruh Mitra PMI & Puskesmas</span>
                </div>
              </div>

              <Link
                href="/lokasi"
                className="mt-8 bg-[#B63737] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#912b2b] transition-all shadow-lg inline-block"
              >
                Ikuti Event Terdekat &rarr;
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}