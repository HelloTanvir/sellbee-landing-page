import Link from 'next/link';
import React from 'react';
import { FaRegPaperPlane, FaStumbleupon } from 'react-icons/fa';
import { GiFilmProjector } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';

const Features = () => {
    const cards = [
        {
            icon: FaStumbleupon,
            title: 'Products',
            content:
                'Worried about product supplier, quality, and stock money? You can always rely on us. Sell, then pay.',
        },
        {
            icon: GoDeviceDesktop,
            title: 'WebStore',
            content:
                'Sign up and setup a quick and easy webstore where you can list your products, get analytics and eveything. Easy to sell products.',
        },
        {
            icon: GiFilmProjector,
            title: 'Analysis Team',
            content:
                'Lost your sale? loosing visitors? Our analytics team is always ready to help you with your marketing strategy and analytics.',
        },
        {
            icon: FaRegPaperPlane,
            title: 'Delivery, Payment, Packaging',
            content:
                "You don't need to think about payment gateway, packaging or delivery. Just take order and get a sleep. We'll do rest.",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center gap-16 pt-32 lg:items-stretch lg:transform lg:-translate-y-1/2 lg:flex-row lg:pt-0 lg:pb-0">
            <div className="flex flex-col items-center -mb-5 space-y-4 lg:hidden">
                <span className="text-xs tracking-wide text-gray-500 uppercase">our services</span>

                <div className="flex flex-col gap-4">
                    <span className="text-4xl tracking-wide">Service we offer</span>
                    <span className="bg-gradient-to-r from-white to-title-border h-0.5 w-48 mx-auto" />
                </div>
            </div>

            {cards.map((card, index) => (
                <div
                    key={card.title}
                    className={`flex flex-col p-6 space-y-1 bg-white shadow-2xl ${
                        index > 2 ? 'lg:hidden' : ''
                    }`}
                    style={{ maxWidth: 268, borderRadius: 32 }}
                >
                    <span className="flex justify-center">
                        <card.icon className="text-3xl" />
                    </span>
                    <span className="text-lg antialiased font-bold tracking-wide text-center">
                        {card.title}
                    </span>
                    <span className="text-xs text-gray-400">{card.content}</span>
                </div>
            ))}

            <span className="self-end mr-8 text-xs text-gray-600 -mt-9 lg:hidden">+ Many More</span>

            <div className="lg:hidden">
                <Link href="/pre-registration">
                    <span className="flex justify-center p-4 tracking-wide text-white rounded-lg cursor-pointer bg-bg-service-btn hover:bg-bg-header-btn">
                        Start your dream now
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Features;
