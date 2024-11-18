"use client";
import React, { useState } from "react";
import SectionTitle from "@/components/Common/SectionTitle";

const Kits = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="text-gray-500 dark:text-gray-400 flex flex-wrap justify-center space-x-2 text-center text-sm font-medium ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`active tab my-3 inline-block cursor-pointer rounded-md py-4 px-5 font-semibold text-white ${
              tab.label === activeTab
                ? "tab-active animate__animated animate__fadeIn bg-primary"
                : "bg-body-color duration-300 ease-in-out hover:bg-primary/80"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {tabs.map((tab) =>
        tab.label === activeTab ? (
          <div key={tab.id + `_content`} className="md:p-4 text-center ">
            {tab.content}

            <div className="pt-10">
              <SectionTitle
                title="¿A qué tipo de empresas se dirige esta solución?"
                paragraph="Segmentos de beneficiarios – Importe subvención del «bono digital»"
                center
                mb="20px"
                width="100%"
              />
              <div className="flex flex-col items-center justify-center  sm:flex-row sm:space-x-4 ">
                {tab.target.map((target) => (
                  <div
                    key={target.title}
                    className="relative z-10 mb-10 rounded-md bg-primary bg-opacity-10 p-7 sm:flex-row sm:space-x-4 sm:space-y-0 md:p-8 lg:p-7 xl:p-8"
                  >
                    <div className="rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10 ">
                      <h3 className="py-4 px-8 text-lg font-semibold text-black dark:text-white">
                        {target.title}
                      </h3>
                    </div>
                    <div className="text-center text-base font-medium italic text-body-color dark:text-white/75">
                      <ul className="p-3 md:p-5 lg:p-4 xl:p-5">
                        <li className="p-2 md:p-4 lg:p-3 xl:p-4">
                          De{" "}
                          <strong className="text-primary dark:text-white">
                            {target.min} a&nbsp;
                            {target.max}
                          </strong>{" "}
                          empleados.
                        </li>
                        <li className="p-2 md:p-4 lg:p-3 xl:p-4">
                          Subvención:{" "}
                          <strong className="text-primary dark:text-white">
                            {target.eligible}
                          </strong>
                        </li>
                        {target.users ? (
                          <li className="p-2 md:p-4 lg:p-3 xl:p-4">
                            {target.users}&nbsp;(usuarios)
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Kits;
