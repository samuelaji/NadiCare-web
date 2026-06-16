import React from 'react';

// Import gambar
import fotoUtama from '../images/fotoutama.png';
import fotoDonorDarah from '../images/fotodonordarah.jpeg';
import fotoTimRelawan from '../images/fototimrelawan.jpeg';
import fotoSebarkanKepedulian from '../images/fotosebarkankepedulian.jpeg';
import fotoHariDonor from '../images/haridonordarahsedunia.png';
import iconKalender from '../images/iconkalender.png';
import iconLokasi from '../images/iconlokasi.png';

const Home = () => {
  return (
    <div className="w-full font-sans select-none">

      {/* ===== HERO (Frame 1) ===== */}
    {/* ===== HERO (Frame 1) ===== */}
<section className="relative w-full min-h-[100vh] overflow-hidden">
  {/* Background MERAH dengan clip-path miring */}
  <div
    className="absolute inset-0 w-full h-full bg-[#B83D3D]"
    style={{ clipPath: 'polygon(0 0, 80% 0, 60% 100%, 0 100%)' }}
  ></div>
  
  {/* Background PUTIH */}
  <div
    className="absolute inset-0 w-full h-full bg-white"
    style={{ clipPath: 'polygon(80% 0, 100% 0, 100% 100%, 60% 100%)' }}
  ></div>

  {/* Konten di atas background */}
  <div className="relative z-10 w-full min-h-[100vh] flex items-center px-6 md:px-16">
    <div className="w-full">
      <h1 className="text-white leading-[1.2]">
        <span className="font-['Sansita_One'] font-bold text-[80px] inline-block">
          Darahmu Berharga.
        </span>
        <br />
        <span className="font-['Sansita_One'] text-[80px] font-bold inline-block">
          Donasi Sekarang!
        </span>
      </h1>

      <p className="font-['Trocchi'] font-normal text-[20px] text-white/90 mt-3 leading-relaxed max-w-2xl">
        Setiap detik, seseorang membutuhkan transfusi darah. 
        Mari jadikan diri Anda sebagai pahlawan kemanusiaan hari ini. 
        Donor aman, cepat, dan menyelamatkan nyawa.
      </p>

      <div className="flex flex-wrap gap-4 mt-5">
        <a href="#" className="font-['Poppins'] font-bold bg-white text-[#B83D3D] px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition inline-block">
          Cari Lokasi Donor
        </a>
        <a href="#" className="font-['Poppins'] font-bold border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition inline-block">
          Pelajari Syarat
        </a>
      </div>
    </div>

    {/* Gambar hero di sisi kanan */}
<div className="hidden md:block absolute right-0 bottom-0 w-[53%] h-full">
  <img 
    src={fotoUtama} 
    alt="Hero" 
    className="w-full h-full object-contain object-bottom mix-blend-multiply" 
  />
</div>
  </div>
</section>

      {/* ===== FRAME 2: TIGA KOLOM LAYANAN ===== */}
      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Kolom 1: Donor Darah */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100">
            <img src={fotoDonorDarah} alt="Donor Darah" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#B83D3D] mb-3">Donor Darah</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Donor darah adalah cara nyata untuk menolong sesama, karena satu kantong
                darah yang Anda donasikan dapat membantu menyelamatkan banyak nyawa.
              </p>
              <a 
                href="#" 
                className="bg-[#B83D3D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md inline-block"
              >
                Pelajari Lebih Lanjut →
              </a>
            </div>
          </div>

          {/* Kolom 2: Tim Relawan */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100">
            <img src={fotoTimRelawan} alt="Tim Relawan" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#B83D3D] mb-3">Tim Relawan</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yuk, bantu kami di balik layar! Mulai dari mengelola event, edukasi warga,
                hingga bantuan administrasi. Tenaga dan semangatmu sangat kami butuhkan.
              </p>
              <a 
                href="#" 
                className="bg-[#B83D3D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md inline-block"
              >
                Daftar Relawan →
              </a>
            </div>
          </div>

          {/* Kolom 3: Sebarkan Kepedulian */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100">
            <img src={fotoSebarkanKepedulian} alt="Sebarkan Kepedulian" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#B83D3D] mb-3">Sebarkan Kepedulian</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bantu sebarkan informasi donor darah dan ajak keluarga serta teman untuk
                berani mendonorkan melalui media sosial.
              </p>
              <a 
                href="#" 
                className="bg-[#B83D3D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md inline-block"
              >
                Sebarkan Campaign →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ===== FRAME 3: EVENT DONOR DARAH SEDUNIA ===== */}
      <section className="w-full bg-[white] text-black py-16 px-6 md:px-16">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">

          <div className="flex-1 flex justify-center md:justify-start">
            <img src={fotoHariDonor} alt="Hari Donor Darah Sedunia" className="w-full max-w-2xl h-auto object-contain rounded-xl" />
          </div>

          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#B83D3D]">
        Hari Donor Darah Sedunia
      </h2>
            <p className="text-base md:text-3xl font-light mb-6 opacity-90">
              Setiap tanggal 14 Juni, seluruh dunia memperingati Hari Donor Darah.
              Ini adalah pengingat bahwa kebutuhan akan darah yang aman tidak pernah
              berhenti. Mari ambil bagian, jadikan momen ini sebagai langkah nyata
              kepedulian Anda.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <img src={iconKalender} alt="Kalender" className="w-6 h-6" />
              <span className="text-base md:text-2xl font-medium">Tanggal: 14 Juni 2026</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <img src={iconLokasi} alt="Lokasi" className="w-6 h-6" />
              <span className="text-base md:text-2xl font-medium">Lokasi: Seluruh Mitra PMI & Puskesmas</span>
            </div>
            <a 
              href="#" 
              className="bg-[#B83D3D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md inline-block"
            >
              Ikuti Event Terdekat →
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;