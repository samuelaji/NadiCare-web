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