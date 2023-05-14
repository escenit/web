import Image from "next/image";
import {useState} from "react";
import aboutData from "@/components/About/aboutData";


const AboutSectionTwo = () => {

    const [activeData, setActiveData] = useState(aboutData[0].id);
    const maxData = aboutData.length;

    return (
        <div className="mx-auto mt-8 ">
            {aboutData.map((data) =>
                data.id === activeData ? (
                    <div key={data.id}
                         className="wow fadeInUp relative rounded-lg block lg:flex items-center shadow-xl min-h-[19rem]"
                         data-wow-delay=".15s">
                        <div
                            className="relative w-full lg:w-2/5 h-full overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none min-h-[19rem]">
                            <Image src={data.image} alt="about" fill sizes='100vw'/>
                            <div className="absolute inset-0 w-full h-full  "></div>
                            <div
                                className="absolute inset-0 w-full h-1/4 bg-primary dark:bg-dark opacity-80 my-auto flex items-center justify-center fill-current text-white font-bold text-2xl ">
                                {data.title}
                            </div>
                        </div>
                        <div
                            className="w-full lg:w-3/5 h-full flex items-center bg-gray-100 dark:bg-dark min-h-[15rem] lg:min-h-[19rem] text-base font-medium leading-relaxed text-body-color">
                            <div className="p-12 lg:pr-24 lg:pl-16 lg:py-12">
                                <p className="text-gray-600 text-justify">{data.paragraph}</p>

                            </div>
                            <svg
                                className="hidden lg:block absolute inset-y-0 h-full w-24 fill-white dark:fill-dark text-gray-100 -ml-12"
                                viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polygon points="50,0 100,0 50,100 0,100"/>
                            </svg>
                        </div>
                        <button
                            onClick={() => setActiveData(activeData === 1 ? maxData : activeData + -1)}
                            className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-primary-600 hover:text-primary-400 focus:text-primary-400 -ml-6 focus:outline-none focus:shadow-outline">
                            <span className="block rotate-180 text-primary">&#x279c;</span>
                        </button>
                        <button
                            onClick={() => setActiveData(activeData === maxData ? 1 : activeData + 1)}
                            className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-primary-600 hover:text-primary-400 focus:text-primary-400 -mr-6 focus:outline-none focus:shadow-outline">
                            <span className="block text-primary">&#x279c;</span>
                        </button>
                    </div>
                ) : null
            )}
        </div>
    );
}


export default AboutSectionTwo;
