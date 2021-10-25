import React from 'react';

const image =
    'https://images.unsplash.com/photo-1573496130488-f3bd89d03653?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const Banner = () => (
    <div
        className="flex bg-gradient-to-r from-bg-banner-left to-bg-banner-right pl-60"
        style={{ height: 542 }}
    >
        <div className="flex flex-col justify-center flex-1">
            <span className="font-bold tracking-wide text-white uppercase text-7xl">
                lets grow together <br /> with sellbee
            </span>

            <span className="mt-2 text-xs text-gray-50 w-80">
                Sell our products at your own shop
            </span>
        </div>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="398.555"
            height="485.93"
            viewBox="0 0 398.555 468.931"
        >
            <defs>
                <clipPath id="curvedImg">
                    <path
                        id="Subtraction_1"
                        data-name="Subtraction 1"
                        d="M-7257.974,2563.539h0l-1.183-.082c-15.778-1.1-32.094-2.232-53.984-7.826-3.058-.782-6.3-1.617-9.163-2.353l-.015,0c-17.722-4.562-36.046-9.28-45.838-10.817-8.283-1.3-23.1-8.377-33.922-13.545-6.484-3.1-11.6-5.541-13.342-5.825a26.639,26.639,0,0,1-9.377-2.894,73.093,73.093,0,0,0-7.67-3.306c-15.687-5.823-33.276-14.114-52.281-24.642-8.9-4.933-18.049-10.326-27.182-16.03-8.9-5.561-17.829-11.436-26.526-17.463a575.045,575.045,0,0,1-47.036-36.114c-6.9-5.945-13.114-11.7-18.484-17.093a170.209,170.209,0,0,1-13.78-15.413,195.7,195.7,0,0,1-20.042-31.636,178.173,178.173,0,0,1-13.1-34.254,166.506,166.506,0,0,1-5.5-36.091,164.2,164.2,0,0,1,2.751-37.149,168.634,168.634,0,0,1,26.314-63.382,186.786,186.786,0,0,1,21.971-26.67,204.83,204.83,0,0,1,26.887-22.763,223.9,223.9,0,0,1,31.084-18.436,241.1,241.1,0,0,1,34.563-13.688,258.8,258.8,0,0,1,76.687-11.454,273.281,273.281,0,0,1,44.1,3.61c11.3,1.853,22.563,4.085,33.475,6.633,12.291,2.87,24.152,6.147,35.255,9.741,26.1,8.448,48.082,18.63,65.341,30.263Z"
                        transform="translate(7656.529 -2094.608)"
                        fill="url(#linear-gradient)"
                    />
                </clipPath>
            </defs>
            <image xlinkHref={image} clipPath="url(#curvedImg)" />
        </svg>
    </div>
);

export default Banner;
