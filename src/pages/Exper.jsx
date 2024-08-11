const Exper = ({ children }) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row px-8 flex-grow justify-end lg:justify-between gap-x-10 pt-4 lg:pt-2 gap-y-4 lg:gap-y-8">
            <div className="flex flex-col gap-y-3">
                <div className="flex justify-center items-center font-bold text-4xl md:text-6xl lg:text-6xl mt-2 bg-ThemeBg bg-opacity-75 w-max p-2 rounded-xl -ml-2">
                    <div>Experience</div>
                </div>
                <div className="flex flex-col gap-y-1 font-extrabold text-md md:text-xl lg:text-xl mt-2 bg-ThemeBg bg-opacity-50 lg:max-w-[40rem] p-2 rounded-xl -ml-2 w-max">
                    Senior Software Developer
                    <div className="font-semibold text-sm">
                        Virtual Days- Full-time (Remote)
                    </div>
                    <div className="font-normal">Oct 2022 - Present</div>
                </div>
                <div className="flex flex-col gap-y-1 font-extrabold text-md md:text-xl lg:text-xl mt-2 bg-ThemeBg bg-opacity-50 lg:max-w-[40rem] p-2 rounded-xl -ml-2 w-max">
                    Software Engineer
                    <div className="font-semibold text-sm">
                        GenITeam Solutions- Full-time (On-Site)
                    </div>
                    <div className="font-normal">
                        May 2021 - Oct 2022 · 1 yr 6 mos
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 font-extrabold text-md md:text-xl lg:text-xl mt-2 bg-ThemeBg bg-opacity-50 lg:max-w-[40rem] p-2 rounded-xl -ml-2 w-max">
                    Intern
                    <div className="font-semibold text-sm">
                        FFC Limited - Full-time (On-Site)
                    </div>
                    <div className="font-normal">
                        Jul 2019 - Aug 2019 · 2 mos
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Exper;
