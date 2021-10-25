import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const ClientCounter = () => {
    const nodeRef = useRef<HTMLDivElement>();

    const startNumber = 0;
    const endNumber = 28;

    useEffect(() => {
        const node = nodeRef.current;

        const controls = animate(startNumber, endNumber, {
            duration: 2,
            onUpdate(value) {
                if (node) {
                    // eslint-disable-next-line radix
                    node.textContent = `${parseInt(`${value}`)}`;
                }
            },
        });

        return () => controls.stop();
    }, []);

    return (
        <div className="flex flex-col items-center pt-32 space-y-4">
            <span className="text-xs tracking-wide text-gray-500 uppercase">Early Bees</span>

            <div className="flex flex-col gap-4">
                <span className="text-4xl tracking-wide capitalize">
                    people who registered early
                </span>
                <span className="bg-gradient-to-r from-white to-title-border h-0.5 w-48 mx-auto" />
            </div>

            <div
                className="px-20 text-6xl text-white bg-black rounded-md py-7"
                ref={nodeRef}
                style={{ marginTop: 44 }}
            />

            {/* <div
            className="px-20 text-6xl text-white bg-black rounded-md py-7"
            style={{ marginTop: 44 }}
        >
            28
        </div> */}
        </div>
    );
};
export default ClientCounter;
