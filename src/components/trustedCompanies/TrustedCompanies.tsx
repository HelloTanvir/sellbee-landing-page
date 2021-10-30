import React from 'react';

const TrustedCompanies = () => (
    <div className="flex flex-col items-center gap-8 pt-32 mt-16">
        <div className="flex flex-col gap-4">
            <span className="text-lg font-light tracking-wide">Trusted by big companies</span>
            <span className="bg-gradient-to-r from-white to-title-border h-0.5 w-36 mx-auto" />
        </div>

        <div className="flex gap-14">
            <div>logo 1</div>
            <div>logo 2</div>
            <div>logo 3</div>
            <div>logo 4</div>
            <div>logo 5</div>
        </div>
    </div>
);

export default TrustedCompanies;
