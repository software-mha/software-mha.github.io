const Home = ({children}) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row px-8 flex-grow justify-end lg:justify-between gap-x-10 pt-4 lg:pt-2 gap-y-4 lg:gap-y-8">
        <div className="flex flex-col ">
          <div className="flex justify-center items-center font-bold text-4xl md:text-6xl lg:text-6xl mt-2 bg-ThemeBg bg-opacity-75 w-max p-2 rounded-xl -ml-2">
                <div>Welcome.</div>
            </div>
            <div className="text-md md:text-xl lg:text-xl mt-2 bg-ThemeBg bg-opacity-50 lg:max-w-[40rem] p-2 rounded-xl -ml-2">
                Software Developer with expertise in React, Next.js, PlayCanvas,
                Three.js, and R3F. Adept at creating high-performance websites
                and immersive experiences. Specializes in developing responsive
                UIs and seamlessly integrating advanced 3D elements.
                </div>
                </div>
              {children}
        </div>
    );
};

export default Home;
