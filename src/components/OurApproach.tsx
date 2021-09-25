import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

const image =
    'https://images.unsplash.com/photo-1573166364902-982ae58a27ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const OurApproach = () => (
    <div className="flex items-center justify-between px-32 pt-12">
        <div className="relative">
            <div
                className="absolute w-4/5 h-full bg-red-500 top-10 -left-10 bg-gradient-to-r from-bg-banner-left to-bg-banner-right "
                style={{ zIndex: -1 }}
            />
            <img src={image} alt="" className="h-96" />
        </div>

        <div className="flex flex-col max-w-xl space-y-3">
            <span className="text-xs tracking-wide text-gray-500 uppercase">Our Approach</span>

            <span className="text-4xl tracking-wide">Enabling Small Businesses via Technology</span>

            <span className="text-sm text-gray-600">
                We help you build, manage and publish your business. At ShopUp, we dream big, work
                hard, play hard and at the same time help you grow your business to the way
                you&lsquo;ve always dreamed
            </span>

            <AiFillPlayCircle style={{ color: '#5C41DC' }} className="text-5xl cursor-pointer" />
        </div>
    </div>
);

export default OurApproach;
