import React from 'react';

const images = [
    'https://images.unsplash.com/photo-1537211366831-cf5f26762d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1593122444709-8f312cc22e88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1623578134934-d56d2989f597?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1622766438168-8d97e6db698d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=342&q=80',
    'https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
];

const OurResellers = () => (
    <div className="flex flex-col items-center pt-32 space-y-4 px-36">
        <span className="text-xs tracking-wide text-gray-500 uppercase">our resellers</span>

        <div className="flex flex-col gap-4">
            <span className="text-4xl tracking-wide">They Started Dreaming</span>
            <span className="bg-gradient-to-r from-white to-title-border h-0.5 w-48 mx-auto" />
        </div>

        <div className="pt-11 image-grid">
            {images.map((image) => (
                <div key={image}>
                    <img src={image} alt="" className="object-cover w-full h-full rounded-md" />
                </div>
            ))}
        </div>

        <button
            type="button"
            className="px-8 py-1 text-sm text-white rounded-2xl"
            style={{ backgroundColor: '#5c41dc' }}
        >
            See All
        </button>
    </div>
);

export default OurResellers;
