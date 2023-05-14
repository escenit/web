import Image from "next/image";
import React from "react";

const SingleTechnology = ({tech}) => {
    const {img, name, description} = tech;
    return (
        <div data-wow-delay=".15s"
             className="wow fadeInUp cursor-default flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 group dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <div
                className=" h-[35px] w-[35px] min-w-[35px] min-h-[35px] relative">
                <Image src={img} alt={description} fill/>
            </div>
            <div className="flex flex-col">
                <span className="flex-1 ml-3 font-bold">{name}</span>
                <span className="flex-1 ml-3 ">{description}</span>
            </div>
        </div>
    );
};

export default SingleTechnology;
