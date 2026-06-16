import React from 'react';
import { Link } from '@inertiajs/react';

export default function TombolDaftar({ text, href = "/daftar" }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-full transition duration-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {text}
        </Link>
    );
}