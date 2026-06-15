<!-- 
import React from 'react';
import navbar from '../components/navbar';
import Footer from '../components/footer'; -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syarat Proses</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @vite(['resources/css/app.css'])
</head>
<body class="bg-white-100">

   <!-- DONOR DARAH -->
    <div >
        <h1 class="text-3xl font-extrabold text-gray-600 font-poppins mt-[70px] ml-5">
            DONOR DARAH  </h1>
      <div class="donor-darah">
      
         <h5 class="text-3xl font-extrabold text-[#B63737] font-poppins">
           SYARAT
        </h5>
        <div class="flex  justify-center gap-4 mt-10">
        <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
             <img src="{{ asset('Icon/Usia.png') }}" alt="Gambar 1" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Usia</span>
            <span class="text-base fontRegular text-[#B63737] text-center">17-65 tahun</span>
        </div>
       <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/Berat Badan.png') }}" alt="Gambar 2" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Aktivitas</span>
             <span class="text-base fontRegular text-[#B63737] text-center">minimal 45 kg</span>
        </div>
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/Kesehatan.png') }}" alt="Gambar 3" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Kesehatan</span>
             <span class="text-base fontRegular text-[#B63737] text-center">jasmani & rohani</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/Tekanan Darah.png') }}" alt="Gambar 4" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Tekanan Darah</span>
            <span class="text-base fontRegular text-[#B63737] text-center"> Normal(120/80 mmHg)</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/obat.png') }}" alt="Gambar 5" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Obat</span>
            <span class="text-base fontRegular text-[#B63737] text-center">tidak mengonsumsi obat terlarang</span>
         </div> 
        </div>

         <h5 class="text-3xl font-extrabold text-[#B63737] font-poppins mt-[60px]">
            PROSES
        </h5>
        <div class="flex  justify-center gap-4 mt-10">
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/registrasi.png') }}" alt="Gambar 6" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Registrasi</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Isi formulir</span>
         </div> 
            <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/wawancara.png') }}" alt="Gambar 6" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Wawancara</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Pemeriksaan fisik</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/donor.png') }}" alt="Gambar 7" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Donor</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Proses donor</span>
         </div> 
            <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
                <img src="{{ asset('Icon/registrasi selesai.png') }}" alt="Gambar 8" class="w-[95px] h-[95px] object-contain mb-3">
                <span class="text-base font-extrabold text-[#B63737] text-center">Registrasi Selesai</span>
                <span class="text-base fontRegular text-[#B63737] text-center">Pemberian souvenir</span>
        </div>
        </div>
    </div>

    <div class="h-[2px] bg-[#363636] mt-[80px] mx-10"></div>


    <!-- TIM RELAWAN -->
    <div>   
         <h1 class="text-3xl font-extrabold text-gray-600 font-poppins mt-[80px] ml-5 ">
           TIM RELAWAN
        </h1>
        <div class="tim-relawan">
         <h5 class="text-3xl font-extrabold text-[#B63737] font-poppins mt-[60px]">
            SYARAT
        </h5>
         <div class="flex  justify-center gap-4 mt-10">
            <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/Usia.png') }}" alt="Gambar 6" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Usia</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Minimal 18 tahun</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/Komunikasi.png') }}" alt="Gambar 6" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Keterampilan</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Komunikasi yang baik</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/sosial.png') }}" alt="Gambar 7" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Sosial</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Siap Melayani Masyarakat</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/orientasi.png') }}" alt="Gambar 8" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Orientasi</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Mengikuti Pelatihan Dasar</span>
         </div>

        </div>
         <h5 class="text-3xl font-extrabold text-[#B63737] font-poppins mt-[60px]">
            PROSES
        </h5>
        <div class="flex  justify-center gap-4 mt-10">
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/registrasi.png') }}" alt="Gambar 6" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Registrasi</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Isi formulir</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/wawancara.png') }}" alt="Gambar 6" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Wawancara & Seleksi Awal</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Validasi & tanya jawab</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/orientasi.png') }}" alt="Gambar 7" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Orientasi</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Pelatihan Dasar Relawan</span>
         </div> 
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/peta.png') }}" alt="Gambar 8" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Peta</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Pengenalan Lokasi & Tugas</span>
         </div>
          <div class="w-[200px] h-[200px] shrink-0 bg-[#D9D9D9] rounded-lg shadow-xl/30 flex flex-col items-center justify-center p-4">
            <img src="{{ asset('Icon/Mentoring.png') }}" alt="Gambar 8" class="w-[95px] h-[95px] object-contain mb-3">
            <span class="text-base font-extrabold text-[#B63737] text-center">Mentoring</span>
            <span class="text-base fontRegular text-[#B63737] text-center">Bimbingan & Dukungan</span>
         </div>
        </div>
        </div>
       <button class="bg-[#B63737] text-white font-bold py-2 px-4 rounded mt-10">
    </div>

</body>
</html>