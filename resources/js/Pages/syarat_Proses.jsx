import React from 'react';
import { Head } from '@inertiajs/react'; 

export default function syarat_Proses() {
    return (
        <div className="bg-white-100 min-h-screen">
          
            <Head title="Syarat & Proses " /> 
       

        {/* DONOR DARAH */}
        <div className="p-5">
           <h1 className="text-3xl font-extrabold text-gray-600 font-poppins mt-[70px] ml-5">
           DONOR DARAH
           </h1>
          <div className="donor-darah">
             <h5 className="text-3xl font-extrabold text-[#B63737] font-poppins">
             SYARAT
              </h5>
         <div className="flex  justify-center gap-4 mt-10">
           <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
             <img src="/Icon/Usia.png" alt="Gambar 1" className="w-[95px] h-[95px] object-contain mb-3"/>
             <span className="text-base font-extrabold text-[#B63737] text-center">Usia</span>
             <span className="text-base fontRegular text-[#B63737] text-center">17-65 tahun</span>
          </div>

          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/Berat Badan.png" alt="Gambar 2" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Aktivitas</span>
             <span className="text-base fontRegular text-[#B63737] text-center">minimal 45 kg</span>
          </div>

          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/Kesehatan.png" alt="Gambar 3" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Kesehatan</span>
             <span className="text-base fontRegular text-[#B63737] text-center">jasmani & rohani</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/Tekanan Darah.png" alt="Gambar 4" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Tekanan Darah</span>
            <span className="text-base fontRegular text-[#B63737] text-center"> Normal(120/80 mmHg)</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/obat.png" alt="Gambar 5" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Obat</span>
            <span className="text-base fontRegular text-[#B63737] text-center">tidak mengonsumsi obat terlarang</span>
         </div> 
        </div>

         <h5 className="text-3xl font-extrabold text-[#B63737] font-poppins mt-[60px]">
            PROSES
        </h5>
        <div className="flex  justify-center gap-4 mt-10">
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/registrasi.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Registrasi</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Isi formulir</span>
         </div> 
            <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/wawancara.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Wawancara</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Pemeriksaan fisik</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/donor.png" alt="Gambar 7" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Donor</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Proses donor</span>
         </div> 
            <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
                <img src="/Icon/registrasi selesai.png" alt="Gambar 8" className="w-[95px] h-[95px] object-contain mb-3"/>
                <span className="text-base font-extrabold text-[#B63737] text-center">Registrasi Selesai</span>
                <span className="text-base fontRegular text-[#B63737] text-center">Pemberian souvenir</span>
        </div>
        </div>
    </div>

    <div className="h-[2px] bg-[#363636] mt-[80px] mx-10"></div>


    {/* TIM RELAWAN */}
    <div>   
         <h1 className="text-3xl font-extrabold text-gray-600 font-poppins mt-[80px] ml-5 ">
           TIM RELAWAN
        </h1>
        <div className="tim-relawan">
         <h5 className="text-3xl font-extrabold text-[#B63737] font-poppins mt-[60px]">
            SYARAT
        </h5>
         <div className="flex  justify-center gap-4 mt-10">
            <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/Usia.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Usia</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Minimal 18 tahun</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/Komunikasi.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Keterampilan</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Komunikasi yang baik</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/sosial.png" alt="Gambar 7" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Sosial</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Siap Melayani Masyarakat</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/orientasi.png" alt="Gambar 8" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Orientasi</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Mengikuti Pelatihan Dasar</span>
         </div>

        </div>
         <h5 className="text-3xl font-extrabold text-[#B63737] font-poppins mt-[60px]">
            PROSES
        </h5>
        <div className="flex  justify-center gap-4 mt-10">
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/registrasi.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Registrasi</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Isi formulir</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/wawancara.png" alt="Gambar 6" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Wawancara & Seleksi Awal</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Validasi & tanya jawab</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/orientasi.png" alt="Gambar 7" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Orientasi</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Pelatihan Dasar Relawan</span>
         </div> 
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/peta.png" alt="Gambar 8" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Peta</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Pengenalan Lokasi & Tugas</span>
         </div>
          <div className="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="/Icon/Mentoring.png" alt="Gambar 8" className="w-[95px] h-[95px] object-contain mb-3"/>
            <span className="text-base font-extrabold text-[#B63737] text-center">Mentoring</span>
            <span className="text-base fontRegular text-[#B63737] text-center">Bimbingan & Dukungan</span>
         </div>
        </div>
        </div>
       
    </div>

    </div>

    </div>
    );
}