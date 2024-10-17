export const TailwindClassesGenerator = () => {

    //!!!!!!!!!
    //this component is used to generate tailwind classes that are not present in the code, but can appear there suddenly
    //they are located here:
    // - global/CONSTS.ts
    //!!!!!!!!!


    return (
        <div className="w-[63px] w-[95px] w-[255px] ml-64 ml-24 hidden ml-[96px] 
        md:ml-[96px] md:ml-64
          text-green-500 text-cyan-500 text-gray-500
        ">
            <p>
                TailwindClassesGenerator
            </p>
            <div className="bg-green-500"></div>
            <div className="bg-cyan-500"></div>
            <div className="bg-gray-500"></div>
        </div>
    );
}