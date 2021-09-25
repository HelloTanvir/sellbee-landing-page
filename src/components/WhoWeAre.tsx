import React from 'react';
import { FaBomb, FaRegPaperPlane } from 'react-icons/fa';
import { GiFilmProjector } from 'react-icons/gi';
import { GoPrimitiveDot } from 'react-icons/go';

const WhoWeAre = () => (
    <div className="flex items-center justify-between gap-10 pt-32 px-36" style={{ marginTop: 40 }}>
        <div className="flex flex-col flex-1 space-y-4">
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
        </div>

        <div className="grid grid-cols-2" style={{ width: '60%', height: 450 }}>
            {[
                {
                    icon: FaBomb,
                    title: 'B2B eCommerce',
                    content:
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsum suscipit cumque omnis corporis quibusdam tenetur ad illo blanditiis alias.',
                },
                {
                    icon: FaBomb,
                    title: 'Unlimited Products',
                    content:
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsum suscipit cumque omnis corporis quibusdam tenetur ad illo blanditiis alias.',
                },
                {
                    icon: GiFilmProjector,
                    title: 'Visual Profit',
                    content:
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsum suscipit cumque omnis corporis quibusdam tenetur ad illo blanditiis alias.',
                },
                {
                    icon: FaRegPaperPlane,
                    title: 'Social Campaign',
                    content:
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ipsum suscipit cumque omnis corporis quibusdam tenetur ad illo blanditiis alias.',
                },
            ].map((item, index) => (
                <div
                    key={item.title}
                    className={`flex flex-col space-y-4 justify-center px-11 rounded-lg bg-gradient-to-br ${
                        index === 0 && 'from-bg-banner-left to-bg-banner-right'
                    } ${index === 3 && 'from-mid-box-grad-bot-tr to-mid-box-grad-bot-br'}`}
                    style={
                        index === 0 ? { borderBottomRightRadius: 0 } : { borderTopLeftRadius: 0 }
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
    </div>
);

export default WhoWeAre;
