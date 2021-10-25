import Link from 'next/link';
import React from 'react';
import { GrMail } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => (
    <div
        className="flex flex-col items-center gap-12 pt-12 mt-32 pb-9"
        style={{ backgroundColor: '#493548' }}
    >
        <div className="flex gap-32">
            <div className="mr-8">
                <Link href="/">
                    <img
                        src="/logo-light.svg"
                        alt="logo"
                        className="w-full h-full cursor-pointer"
                    />
                </Link>
            </div>

            <div className="flex flex-col gap-3">
                <span className="mb-1 text-base font-medium tracking-wide text-white">
                    QUICK LINK
                </span>
                {['Company', 'Our Services', 'Portfolio', 'Contact Us'].map((item) => (
                    <a
                        key={item}
                        href="/"
                        // target="_blank"
                        rel="noreferrer"
                        className="text-sm font-light text-gray-100 hover:underline hover:text-gray-400 w-max"
                    >
                        {item}
                    </a>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <span className="mb-1 text-base font-medium tracking-wide text-white">
                    CONNECT WITH US
                </span>
                {[
                    {
                        icon: TiSocialFacebook,
                        name: 'facebook',
                        link: 'https://www.facebook.com/SellBeeOfficial',
                    },
                    // { icon: IoLogoTwitter, name: 'Twitter' },
                    // { icon: AiFillYoutube, name: 'Youtube' },
                    // { icon: AiFillInstagram, name: 'Instagram' },
                ].map((item) => (
                    <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 hover:underline hover:text-gray-400 w-max"
                    >
                        <item.icon style={{ marginTop: 2 }} />
                        <span className="text-sm font-light text-gray-100 hover:text-gray-400">
                            {item.name}
                        </span>
                    </a>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <span className="mb-1 text-base font-medium tracking-wide text-white">
                    CONTACT INFO
                </span>
                {[
                    {
                        icon: MdLocationOn,
                        name: 'Road No: 11/A, House No:94, Dhanmondi, Dhaka 1209',
                    },
                    // { icon: MdPhone, name: '+880 17 1234 5678' },
                    { icon: GrMail, name: 'info@sellbeez.com' },
                ].map((item) => (
                    <span key={item.name} className="flex items-center gap-2">
                        <item.icon className="mt-1" />
                        <span className="text-sm font-light text-gray-100">{item.name}</span>
                    </span>
                ))}
            </div>
        </div>

        <span className="text-sm text-gray-300">Copyright &copy; 2021. All rights reserved</span>
    </div>
);

export default Footer;
