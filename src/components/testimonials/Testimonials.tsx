import React from 'react';

const Testimonials = () => (
    <div className="flex flex-col items-center pt-32 space-y-4 px-36">
        <span className="text-xs tracking-wide text-gray-500 uppercase">TESTIMONIALS</span>

        <div className="flex flex-col gap-4">
            <span className="text-4xl tracking-wide">What People Says About Us</span>
            <span className="bg-gradient-to-r from-white to-title-border h-0.5 w-48 mx-auto" />
        </div>

        <div className="flex pt-11 space-x-7">
            {[
                {
                    image: 'https://images.unsplash.com/photo-1623578134934-d56d2989f597?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque adipisci eius aliquam iste! Corporis reprehenderit dolore neque dicta odit!',
                    name: 'Tanvir Hossain',
                    web: 'http://www.google.com',
                },
                {
                    image: 'https://images.unsplash.com/photo-1623578134934-d56d2989f597?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque adipisci eius aliquam iste! Corporis reprehenderit dolore neque dicta odit!',
                    name: 'Tanvir Hossain',
                    web: 'http://www.google.com',
                },
                {
                    image: 'https://images.unsplash.com/photo-1623578134934-d56d2989f597?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque adipisci eius aliquam iste! Corporis reprehenderit dolore neque dicta odit!',
                    name: 'Tanvir Hossain',
                    web: 'http://www.google.com',
                },
            ].map((item) => (
                <div
                    key={item.image}
                    className="relative flex flex-col py-12 border-t-4 border-blue-700 rounded-lg shadow-xl px-11"
                >
                    <img
                        src={item.image}
                        alt=""
                        className="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
                        style={{ borderRadius: '50%' }}
                    />

                    <span className="text-xs text-gray-400">{item.review}</span>

                    <span className="pt-5 pb-1 text-lg tracking-wide">{item.name}</span>

                    <a
                        href={item.web}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs tracking-wide text-gray-300"
                    >
                        {item.web}
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default Testimonials;
