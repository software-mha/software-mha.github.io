import { useEffect, useRef, useState } from "react";

let timer = null;

const Home = ({ children }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            if(!copied) return;
            setCopied(false);
        },2000);
    }, [copied]);

    return (
        <div className="flex flex-col-reverse lg:flex-row px-8 flex-grow justify-end lg:justify-between gap-x-10 pt-4 lg:pt-2 gap-y-4 lg:gap-y-8">
            <div className="flex flex-col ">
                <div className="flex justify-center items-center font-bold text-4xl md:text-6xl lg:text-6xl mt-2 bg-ThemeBg bg-opacity-75 w-max p-2 rounded-xl -ml-2">
                    <div>Welcome.</div>
                </div>
                <div className="text-sm md:text-lg mt-2 bg-ThemeBg bg-opacity-50 lg:max-w-[40rem] p-2 rounded-xl -ml-2">
                    My name is Muhammad Hassan Ali, and I am a Software
                    Developer skilled in React, Next.js, PlayCanvas, Three.js,
                    and R3F. I create high-performance websites and games with
                    responsive UIs and advanced 3D elements, blending creativity
                    with technical expertise.
                </div>

                <div className="text-sm md:text-lg  mt-2 bg-ThemeBg bg-opacity-50 lg:max-w-[40rem] p-2 rounded-xl -ml-2">
                    I’m dedicated to turning complex ideas into engaging,
                    visually stunning digital experiences.
                </div>
                <div className="text-sm md:text-lg mt-6 bg-ThemeBg bg-opacity-50 lg:max-w-[40rem] p-2 rounded-xl -ml-2">
                    Email:{" "}
                    <button
                        onClick={async () => {
                            try {
                                await navigator.clipboard.writeText(
                                    "software.mha.ali@gmail.com"
                                );
                                console.log("Content copied to clipboard");
                                setCopied(true);
                            } catch (err) {
                                console.error("Failed to copy: ", err);
                            }
                        }}
                        className="ml-2 underline underline-offset-8 decoration-slate-50"
                    >
                        software.mha.ali@gmail.com
                    </button>
                    {copied && (
                        <span className="ml-5 text-sm md:text-base">
                            Copied.
                        </span>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
};

export default Home;
