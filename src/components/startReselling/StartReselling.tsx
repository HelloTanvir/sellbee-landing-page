import React from 'react';

const StartReselling = () => (
    <div className="relative flex flex-col items-center gap-8 mt-32 py-9 bg-gradient-to-r from-bg-reseller-grad-left to-bg-reseller-grad-right">
        <div
            className="absolute w-4/5 h-full transform -translate-x-1/2 rounded-xl left-1/2 top-16"
            style={{ backgroundColor: '#D8D8D8', zIndex: -1 }}
        />

        <span className="text-3xl font-light tracking-wider text-white">Start Your Dream</span>

        <span
            className="tracking-wider text-center text-gray-300 font-extralight"
            style={{ maxWidth: 200, fontSize: 10 }}
        >
            Lets get started to fulfill your dream by our shob by our products
        </span>

        <button
            type="button"
            className="px-5 py-3 text-sm bg-white rounded-md"
            style={{ color: '#5D46C5' }}
        >
            Start Reselling
        </button>
    </div>
);

export default StartReselling;
