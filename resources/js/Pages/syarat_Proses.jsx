import React from 'react';
import { Head } from '@inertiajs/react'; 

import Navbar from'../Components/NadiCare/Navbar';
import Footer from '../Components/Footer';


export default function syarat_Proses() {

    return (
        <div className="bg-white-100 min-h-screen">
          <Navbar />

            <Head title="Syarat & Proses " /> 
       

        {/* DONOR DARAH */}
        <div className="p-5">
           <h1 className="text-3xl font-extrabold text-gray-600 font-poppins mt-[60px] ml-5">
           DONOR DARAH
           </h1>
          <div className="donor-darah">
             <h5 className="text-3xl font-extrabold text-red-700 font-poppins">
             SYARAT
              </h5>
         <div className="flex  justify-center gap-4 mt-10">
           <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
             <img src="/Icon/Usia.png" alt="Gambar 1" className="w-[95px] h-[95px] object-contain mb-3"/>
             <span className="text-base font-extrabold text-red-700 text-center font-poppins">Usia</span>
             <span className="text-base fontRegular text-red-700 text-center font-poppins">17-65 tahun</span>
          </div>

          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/Berat Badan.png" alt="Gambar 2" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Aktivitas</span>
             <span className="text-base fontRegular text-red-700 text-center font-poppins">minimal 45 kg</span>
          </div>

          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/Kesehatan.png" alt="Gambar 3" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Kesehatan</span>
             <span className="text-base fontRegular text-red-700 text-center font-poppins">jasmani & rohani</span>
         </div> 

          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/Tekanan Darah.png" alt="Gambar 4" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Tekanan Darah</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins"> Normal(120/80 mmHg)</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/obat.png" alt="Gambar 5" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Obat</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">tidak mengonsumsi obat terlarang</span>
         </div> 
        </div>

         <h5 className="text-3xl font-extrabold text-red-700 font-poppins mt-[60px]">
            PROSES
        </h5>
        <div className="flex  justify-center gap-4 mt-10">
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/registrasi.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Registrasi</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Isi formulir</span>
         </div> 
            <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/wawancara.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Wawancara</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Pemeriksaan fisik</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/donor.png" alt="Gambar 7" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Donor</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Proses donor</span>
         </div> 
            <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
                <img src="/Icon/registrasi selesai.png" alt="Gambar 8" className="w-[95px] h-[95px] object-contain mb-3"/>
                <span className="text-base font-extrabold text-red-700 text-center font-poppins">Registrasi Selesai</span>
                <span className="text-base fontRegular text-red-700 text-center font-poppins">Pemberian souvenir</span>
        </div>
        </div>
    </div>

    <div className="h-[2px] bg-zinc-800 mt-[80px] mx-10"></div>


    {/* TIM RELAWAN */}
    <div>   
         <h1 className="text-3xl font-extrabold text-gray-600 font-poppins mt-[60px] ml-5 ">
           TIM RELAWAN
        </h1>
        <div className="tim-relawan">
         <h5 className="text-3xl font-extrabold text-red-700 font-poppins mt-[60px]">
            SYARAT
        </h5>
         <div className="flex  justify-center gap-4 mt-10">
            <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/Usia.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Usia</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Minimal 18 tahun</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300  rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/Komunikasi.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Keterampilan</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Komunikasi yang baik</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/sosial.png" alt="Gambar 7" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Sosial</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Siap Melayani Masyarakat</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/orientasi.png" alt="Gambar 8" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Orientasi</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Mengikuti Pelatihan Dasar</span>
         </div>

        </div>
         <h5 className="text-3xl font-extrabold text-red-700 font-poppins mt-[60px]">
            PROSES
        </h5>
        <div className="flex  justify-center gap-4 mt-10">
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/registrasi.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Registrasi</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Isi formulir</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/wawancara.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Wawancara & Seleksi Awal</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Validasi & tanya jawab</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <img src="/Icon/orientasi.png" alt="Gambar 7" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Orientasi</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Pelatihan Dasar Relawan</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl  flex flex-col items-center justify-center p-4">
            <img src="/Icon/peta.png" alt="Gambar 8" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Peta</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Pengenalan Lokasi & Tugas</span>
         </div>
          <div className="w-[200px] h-[200px] shrink-0 bg-gray-300 rounded-lg shadow-xl  flex flex-col items-center justify-center p-4">
            <img src="/Icon/Mentoring.png" alt="Gambar 8" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-red-700 text-center font-poppins">Mentoring</span>
            <span className="text-base fontRegular text-red-700 text-center font-poppins">Bimbingan & Dukungan</span>
         </div>
        </div>
        </div>
       
    </div>

    </div>
    <Footer />

    </div>
    );
}