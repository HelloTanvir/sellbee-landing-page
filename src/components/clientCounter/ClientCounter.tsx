import React from 'react';
import CountUp from 'react-countup';

const ClientCounter = () => (
    <div className="flex flex-col items-center pt-32 space-y-4">
        <span className="text-xs tracking-wide text-gray-500 uppercase">Early Bees</span>

        <div className="flex flex-col gap-4">
            <span className="text-2xl tracking-wide capitalize lg:text-4xl">
                people who registered early
            </span>
            <span className="bg-gradient-to-r from-white to-title-border h-0.5 w-48 mx-auto" />
        </div>

        <div
            className="px-20 text-5xl text-white bg-black rounded-md lg:text-6xl py-7"
            style={{ marginTop: 44 }}
        >
            <CountUp end={78} duration={0.2} />
        </div>
    </div>
);
export default ClientCounter;
