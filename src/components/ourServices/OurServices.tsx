import Link from 'next/link';
import React from 'react';
import { FaRegPaperPlane, FaStumbleupon } from 'react-icons/fa';
import { GiFilmProjector } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';

const OurServices = () => {
    const services = [
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
        {
            icon: FaRegPaperPlane,
            title: 'Payment Gateway',
            content:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsum suscipit cumque omnis corporis quibusdam tenetur ad illo blanditiis alias.',
        },
        {
            icon: FaRegPaperPlane,
            title: 'Call Centre Support',
            content:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsum suscipit cumque omnis corporis quibusdam tenetur ad illo blanditiis alias.',
        },
    ];

    return (
        // <div className="flex flex-col items-center pt-32 space-y-4 px-36" style={{ marginTop: 40 }}>
        <div
            className="flex flex-col items-center pt-12 mx-auto space-y-4"
            style={{ width: '70%' }}
        >
            <span className="text-xs tracking-wide text-gray-500 uppercase">our services</span>

            <div className="flex flex-col gap-4">
                <span className="text-4xl tracking-wide">Service we offer</span>
                <span className="bg-gradient-to-r from-white to-title-border h-0.5 w-48 mx-auto" />
            </div>
            {/* <div className="flex flex-col flex-1 space-y-4">
        <span className="text-4xl tracking-wide">Who We Are?</span>

        <span className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam ducimus
            cupiditate repellat pariatur numquam minus eveniet.
        </span>

        <span className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum?
        </span>

        <div className="grid grid-cols-2 py-4">
            {[
                'Experienced Professionals',
                'Super Creative Team',
                'World Class Agency',
                'Award Winning Agency',
                'Client Focused Approach',
                'Money Back Guarantee',
            ].map((item) => (
                <div key={item} className="flex items-center space-x-1">
                    <GoPrimitiveDot className="text-xs" />
                    <span className="text-xs tracking-wide text-gray-500">{item}</span>
                </div>
            ))}
        </div>

        <button
            type="button"
            className="w-1/2 p-4 tracking-wide text-white rounded-lg"
            style={{ backgroundColor: '#5C41DC' }}
        >
            Start your dream
        </button>
    </div> */}

            <div className="grid grid-cols-2 pt-11" style={{ height: 500 }}>
                {/* <div className="flex flex-col gap-3 pt-11" style={{ width: '50%' }}> */}
                {services.map((item, index) => (
                    <div
                        key={item.title}
                        className={`flex flex-col space-y-4 justify-center px-11 rounded-lg bg-gradient-to-br ${
                            index === 0 && 'from-bg-banner-left to-bg-banner-right'
                        } ${index === 3 && 'from-mid-box-grad-bot-tr to-mid-box-grad-bot-br'}`}
                        style={
                            index === 0
                                ? { borderBottomRightRadius: 0 }
                                : { borderTopLeftRadius: 0 }
                        }
                    >
                        <item.icon className="text-3xl" />

                        <span
                            className={`text-lg tracking-wide ${
                                (index === 0 || index === 3) && 'text-white'
                            }`}
                        >
                            {item.title}
                        </span>

                        <span
                            className={`text-xs ${
                                index === 0 || index === 3 ? 'text-gray-100' : 'text-gray-400'
                            }`}
                        >
                            {item.content}
                        </span>
                    </div>
                ))}
            </div>

            <span className="self-end pt-3 text-xs text-gray-600">+ Many More</span>

            {/* <button
                type="button"
                className="flex items-center self-end gap-3 py-3 tracking-wide text-white rounded-lg px-7 hover:bg-bg-header-btn bg-bg-banner-left"
                // style={{ backgroundColor: '#5C41DC' }}
            >
                <span>and many more</span>
            </button> */}

            <Link href="/pre-registration">
                <span
                    className="flex justify-center w-1/2 p-4 mt-5 tracking-wide text-white rounded-lg cursor-pointer bg-bg-service-btn hover:bg-bg-header-btn"
                    style={{ marginTop: 40 }}
                >
                    Start your dream now
                </span>
            </Link>
        </div>
    );
};

export default OurServices;
