import React from 'react';

// Perbaiki path: dari '../assets/' menjadi '../asset/'
// Perbaiki nama file: linkln.png (sesuai file yang ada)
import instagramLogo from '../asset/instagram.png';
import facebookLogo from '../asset/facebook.png';
import tiktokLogo from '../asset/tiktok.png';
import xLogo from '../asset/x.png';
import linkedinLogo from '../asset/linkIn.png';   
import youtubeLogo from '../asset/youtube.png';
import whatsappLogo from '../asset/whatsapp.png';
import kemenkesLogo from '../asset/Kemenkes.png'; 

const Footer = () => {
  return (
    // Background merah full lebar (sesuai perubahan sebelumnya)
    <footer className="bg-[#B63737] text-white w-full py-10 px-0 font-sans select-none">
      <div className="w-full px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8">
        
        {/* Sisi Kiri: Informasi Hak Cipta dan Organisasi */}
        <div className="flex flex-col justify-between flex-1 space-y-6 md:space-y-0">
          <div className="space-y-3 text-sm md:text-base font-light tracking-wide leading-relaxed">
            <p>Hari Donor Darah Sedunia Dibuat Oleh NadiCare</p>
            <p>Dipersembahkan Oleh Universitas Sanata Dharma</p>
            <p>Kementrian Kesehatan Republik Indonesia</p>
          </div>
          <div className="text-sm md:text-base font-light pt-4 md:pt-0">
            <p>@2026</p>
          </div>
        </div>

        {/* Garis Pembatas Vertikal Tengah */}
        <div className="hidden md:block w-[1px] bg-white/40 self-stretch mx-40"></div>

        {/* Sisi Kanan: Media Sosial dan Logo Instansi */}
        <div className="flex flex-col items-start md:items-start space-y-6 min-w-[260px]">
          <h4 className="text-lg font-medium tracking-wider">IKUTI KAMI :</h4>
          
          <div className="grid grid-cols-4 gap-3">
            <a href="https://www.instagram.com/nadicare24?igsh=MXh2c2ZicGtqam85YQ==" className="hover:opacity-80 transition-opacity">
              <img src={instagramLogo} alt="Instagram" className="w-10 h-10 object-contain" />
            </a>
            <a href="https://www.facebook.com/share/1CcPtnJs5Q/" className="hover:opacity-80 transition-opacity">
              <img src={facebookLogo} alt="Facebook" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={tiktokLogo} alt="Tiktok" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={xLogo} alt="X" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={youtubeLogo} alt="Youtube" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={whatsappLogo} alt="Whatsapp" className="w-10 h-10 object-contain" />
            </a>
          </div>

          <div className="w-full flex items-center justify-start md:justify-start gap-4 pt-4 border-t border-white/10 md:border-none">
            <div className="flex flex-col items-center justify-center text-[11px] font-semibold tracking-wider text-right text-white/90">
              <a 
                href="https://www.usd.ac.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:underline transition-all"
              >
                USD
              </a>
              <span className="mt-2 text-xs font-normal">NadiCare</span>
            </div>
            <div className="w-[1px] h-10 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <a href="https://www.kemkes.go.id/id/home" className="hover:opacity-80 transition-opacity">
                <img src={kemenkesLogo} alt="Kementerian Kesehatan RI" className="w-12 h-12 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;