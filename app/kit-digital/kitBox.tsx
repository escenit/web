import React, { ReactNode } from "react";

const KitBox = (props: {
  packageName?: string;
  priceMin: string;
  priceMax: string;
  eligible: string;
  title: string;
  subtitle: string;
  slogan?: string;
  children: ReactNode;
}) => {
  const { priceMin, priceMax, eligible, title, subtitle, children, slogan } =
    props;

  const childBasic = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).props.type === "basic"
  );

  const childExtra = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === "extra"
  );

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp relative z-10  px-8 py-10 dark:bg-[#1D2144]"
        data-wow-delay=".1s"
      >
        <div className="relative flex flex-col sm:flex-row lg:flex-row">
          <div className="relative mb-10 flex-1 pb-7 text-left md:pb-8 lg:pb-7 xl:pb-8">
            <div className="pb-8">
              <h2 className="mb-8 text-3xl font-bold text-purple-500 dark:text-purple-100  md:text-[35px]">
                {title}
              </h2>
            </div>
            <div className="m-auto w-11/12">{childBasic}</div>
            <div className="relative bottom-0 w-full text-center lg:absolute">
              <div className="pt-8 text-sm text-primary dark:text-white">
                {slogan ? slogan : ""}
              </div>
              <div className="m-auto w-11/12 rounded-md border-2 border-primary border-opacity-5 dark:border-white">
                <h3 className=" price mb-2 pt-4 text-black dark:text-white">
                  Precio entre <span className="amount">{priceMin}</span> y{" "}
                  <span className="amount">{priceMax}</span>
                </h3>
                <h3 className="price mb-2 text-black dark:text-white">
                  {eligible}
                </h3>
                <p className="mb-7 px-8 pb-4 text-sm text-body-color">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-left">
            <div className="z-10 mb-10 rounded-md bg-primary bg-opacity-10 p-7 md:p-8 lg:p-7 xl:p-8">
              <h3 className="mr-3 mb-4 text-base font-bold  text-purple-500 dark:text-white">
                ¿Qué incluye la solución?
              </h3>
              {childExtra}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitBox;
