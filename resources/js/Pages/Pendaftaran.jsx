import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Pendaftaran() {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        email: '',
        phone_number: '',
        intention: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/daftar');
    };

    return (
        <div className="min-h-screen flex font-sans">

            <div className="w-2/5 bg-red-600 text-white p-12 flex flex-col justify-center relative overflow-hidden">
                <span className="absolute top-6 right-8 text-red-400 text-4xl opacity-50">🩸</span>
                <span className="absolute bottom-20 left-6 text-red-400 text-3xl opacity-40">🩸</span>
                <h1 className="text-5xl font-extrabold leading-tight mb-6">Mari<br />Berkolaborasi</h1>
                <p className="text-sm leading-relaxed mb-10 text-red-100">
                    Punya pertanyaan, ingin mengadakan event donor darah di instansi Anda,
                    atau ingin mendaftar sebagai relawan operasional? Hubungi kami sekarang.
                </p>
                <div className="space-y-5">
                    <div className="flex items-start gap-4">
                        <div className="bg-white rounded-full p-2 mt-1">
                            <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-sm">Kantor Pusat NadiCare</p>
                            <p className="text-xs text-red-100">Jl. Kaliurang Km 5, Sleman, Yogyakarta</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white rounded-full p-2 mt-1">
                            <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-sm">Email Resmi</p>
                            <p className="text-xs text-red-100">halo@nadicare.id</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white rounded-full p-2 mt-1">
                            <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-sm">Telephone/WhatsApp</p>
                            <p className="text-xs text-red-100">(+62) 812-1234-1234</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-3/5 bg-white p-12 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Formulir Registrasi</h2>
                <p className="text-sm text-gray-500 mb-8">Isi data di bawah ini dan tim kami akan segera menghubungi Anda.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Nama Lengkap</label>
                            <input
                                type="text"
                                placeholder="Contoh: Budi Santoso"
                                value={data.full_name}
                                onChange={e => setData('full_name', e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                            {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Contoh: Budi@gmail.com"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">No. WhatsApp/HP</label>
                            <input
                                type="text"
                                placeholder="Contoh: 0812xxx"
                                value={data.phone_number}
                                onChange={e => setData('phone_number', e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                            {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Tujuan Menghubungi</label>
                            <select
                                value={data.intention}
                                onChange={e => setData('intention', e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-500"
                            >
                                <option value="">Pilih Tujuan</option>
                                <option value="relawan">Daftar Relawan</option>
                                <option value="event">Event Donor Darah</option>
                                <option value="informasi">Informasi Umum</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                            {errors.intention && <p className="text-red-500 text-xs mt-1">{errors.intention}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Keterangan</label>
                        <textarea
                            placeholder="Tulis keterangan anda di sini..."
                            value={data.message}
                            onChange={e => setData('message', e.target.value)}
                            rows={5}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                    >
                        {processing ? 'Mengirim...' : 'Kirim'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}