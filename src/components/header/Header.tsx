import Link from 'next/link';
import React from 'react';
import LgHeaderRight from './Lg-header-right';
import SmHeaderRight from './Sm-header-right';

const Header = () => (
    <div className="sticky top-0 z-10 flex flex-row-reverse h-16 text-right text-white border-b border-gray-300 lg:flex-row bg-gradient-to-r from-bg-banner-left to-bg-banner-right">
        <div className="flex items-center pr-8 lg:pl-8 lg:pr-0">
            <Link href="/">
                <img src="/logo-dark.svg" alt="logo" className="h-12 cursor-pointer" />
            </Link>
        </div>

        {/* shown when screen is large */}
        <LgHeaderRight />

        {/* shown when screen is small */}
        <SmHeaderRight />
    </div>
);

export default Header;
