import Image from "next/image";
import React from "react";

const SingleTechnology = ({ tech }) => {
  const { img, name, description } = tech;
  return (
    <div
      data-wow-delay=".15s"
      className="wow fadeInUp text-gray-900 bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 group flex cursor-default items-center rounded-lg p-3 text-base dark:text-white"
    >
      <div className=" relative h-[35px] min-h-[35px] w-[35px] min-w-[35px]">
        <Image src={img} alt={description} fill />
      </div>
      <div className="flex flex-col">
        <span className="ml-3 flex-1 font-bold">{name}</span>
        <span className="ml-3 flex-1 ">{description}</span>
      </div>
    </div>
  );
};

export default SingleTechnology;
