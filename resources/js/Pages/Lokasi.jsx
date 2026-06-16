import React from 'react';
import { Head } from '@inertiajs/react'; 

export default function Lokasi() {
    return (
        <div className="bg-white-100 min-h-screen">
          
            <Head title="Live Lokasi" /> 
      

       <div  className="p-5">
           <h1 className="text-4xl font-extrabold text-center text-[#B63737] font-poppins mt-[60px] ml-5">
          Live Persebaran Stok Darah
           </h1>
        </div>
        
    <div className="w-full px-6 mb-6">
                <div className="max-w-7xl mx-auto bg-gray-200 rounded-lg p-8 shadow-sm text-center">
                    <div className="h-[450px] w-full rounded-lg overflow-hidden shadow-md bg-white flex items-center justify-center">
                        
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
            </div>
      
<div class="w-full px-6 mt-[60px]">
    
    <div class="max-w-7xl mx-auto bg-gray-200 rounded-lg p-8 shadow-sm ">

        <div className="flex items-center gap-4 mb-4">
       <div className="w-10 h-10 bg-red-500 rounded-full flax-shrink-0"></div>
       <p class= "text-gray-500 font-medium text-lg leading-relaxed">Sangat membutuhkan donor pengganti.</p>
           </div>
       
       <div className="flex items-center gap-4 mb-4">
       <div className="w-10 h-10 bg-yellow-400 rounded-full lax-shrink-0"></div>
        <p class= "text-gray-500 font-medium text-lg leading-relaxed">Persediaan darah masih ada untuk beberapa hari ke depan.</p>
     </div>

       <div className="flex items-center gap-4 mb-4">
       <div className="w-10 h-10 bg-emerald-500 rounded-full lax-shrink-0"></div>
        <p class= "text-gray-500 font-medium text-lg leading-relaxed">Jumlah kantong darah yang tersedia & mampu meng-cover permintaan rutin.</p>
           
       </div>
        
        
    </div>
</div>
</div>

    );
}