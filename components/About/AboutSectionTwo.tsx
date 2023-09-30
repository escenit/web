import Image from "next/image";
import { useState } from "react";
import aboutData from '@/components/About/AboutData';

const AboutSectionTwo = () => {
  const [activeData, setActiveData] = useState(aboutData[0].id);
  const maxData = aboutData.length;

  return (
    <div className="mx-auto mt-8 ">
      {aboutData.map((data) =>
        data.id === activeData ? (
          <div
            key={data.id}
            className="wow fadeInUp relative block min-h-[19rem] items-center rounded-lg shadow-xl lg:flex"
            data-wow-delay=".15s"
          >
            <div className="relative h-full min-h-[19rem] w-full overflow-hidden rounded-t-lg lg:w-2/5 lg:rounded-l-lg lg:rounded-tr-none">
              <Image src={data.image} alt="about" fill sizes="100vw" />
              <div className="absolute inset-0 h-full w-full  "></div>
              <div className="absolute inset-0 my-auto flex h-1/4 w-full items-center justify-center bg-primary fill-current text-2xl font-bold text-white opacity-80 dark:bg-dark ">
                {data.title}
              </div>
            </div>
            <div className="bg-gray-100 flex h-full min-h-[15rem] w-full items-center text-base font-medium leading-relaxed text-body-color dark:bg-dark lg:min-h-[19rem] lg:w-3/5">
              <div className="p-12 lg:py-12 lg:pr-24 lg:pl-16">
                <p className="text-gray-600 text-justify">{data.paragraph}</p>
              </div>
              <svg
                className="text-gray-100 absolute inset-y-0 -ml-12 hidden h-full w-24 fill-white dark:fill-dark lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
            <button
              onClick={() =>
                setActiveData(activeData === 1 ? maxData : activeData + -1)
              }
              className="text-primary-600 hover:text-primary-400 focus:text-primary-400 focus:shadow-outline absolute top-0 left-0 mt-32 -ml-6 h-12 w-12 rounded-full bg-white text-2xl shadow-md focus:outline-none"
            >
              <span className="block rotate-180 text-primary">&#x279c;</span>
            </button>
            <button
              onClick={() =>
                setActiveData(activeData === maxData ? 1 : activeData + 1)
              }
              className="text-primary-600 hover:text-primary-400 focus:text-primary-400 focus:shadow-outline absolute top-0 right-0 mt-32 -mr-6 h-12 w-12 rounded-full bg-white text-2xl shadow-md focus:outline-none"
            >
              <span className="block text-primary">&#x279c;</span>
            </button>
          </div>
        ) : null
      )}
    </div>
  );
};

export default AboutSectionTwo;
