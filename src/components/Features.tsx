import React from 'react';
import { FaBomb, FaStumbleupon } from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';

const Features = () => {
    const cards = [
        {
            icon: FaStumbleupon,
            title: 'Unlimited Products',
            content:
                'save time and energy with our in-house products so you can focus on what matters on your business',
        },
        {
            icon: GoDeviceDesktop,
            title: 'Get a Free Website',
            content: 'Get a free website from us and sell our products there. Easy earning',
        },
        {
            icon: FaBomb,
            title: 'Get Free Promotions',
            content:
                'Get free featured promotions and make a huge amount of profit by selling our products',
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
