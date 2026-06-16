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
        
     
      
<div class="w-full px-6">
    
    <div class="max-w-7xl mx-auto bg-gray-200 rounded-lg p-8 shadow-sm text-center">
       <div className="w-10 h-10 bg-red-500 rounded-full"></div>
       
       <div className="w-10 h-10 bg-red-500 rounded-full"></div>
       <div className="w-10 h-10 bg-red-500 rounded-full"></div>
        
        <p class="text-red-500 text-sm">minimal 45 kg</p>
    </div>
</div>






        </div>

    );
}