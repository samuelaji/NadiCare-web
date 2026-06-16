import React from 'react';

const HeartbeatIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-7 h-7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

export default function PrimaryButton(props) {
    return (

        <button
            className="flex items-center justify-center space-x-2.5 bg-red-600 text-white px-3 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition duration-300"
        >
            {HeartbeatIcon}

            <span className="text-l font-bold">
                {props.text || "Daftar sekarang"}
            </span>
        </button>
    );
}