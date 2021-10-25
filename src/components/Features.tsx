import React from 'react';
import { FaStumbleupon } from 'react-icons/fa';
import { GiFilmProjector } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';

const Features = () => {
    const cards = [
        {
            icon: FaStumbleupon,
            title: 'Products',
            content:
                'Worried about product supplier, quality, and stock money? You can always get your products from us, sell and pay after you got your profit.',
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
    ];
    return (
        <div className="flex justify-center gap-16 transform -translate-y-1/2">
            {cards.map((card) => (
                <div
                    key={card.title}
                    className="flex flex-col p-6 space-y-1 bg-white shadow-2xl"
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
        </div>
    );
};

export default Features;
