import React from "react";

const KitBox = (props) => {
    const {priceMin, priceMax, eligible, title, subtitle, children, slogan} = props;

    const childBasic = React.Children.toArray(children).filter(
        (child) => {
            return child.props.type === 'basic';
        }
    );

    const childExtra = React.Children.toArray(children).filter(
        (child) => child.props.type === 'extra'
    );

    return (
        <div className="w-full">
            <div
                className="wow fadeInUp relative z-10  px-8 py-10 dark:bg-[#1D2144]"
                data-wow-delay=".1s"
            >
                <div className="flex flex-col lg:flex-row relative sm:flex-row">
                    <div
                        className="text-left relative flex-1 mb-10 pb-7 md:pb-8 lg:pb-7 xl:pb-8">

                        <div className="pb-8">
                            <h2 className="text-purple-500 font-bold mb-8 dark:text-purple-100 text-3xl  md:text-[35px]">
                                {title}
                            </h2>
                        </div>
                        <div className="w-11/12 m-auto">{childBasic}</div>
                        <div className="bottom-0 relative lg:absolute text-center w-full">
                            <div className="pt-8 text-sm text-primary dark:text-white">
                                {slogan ? slogan : ''}
                            </div>
                            <div
                                className="rounded-md border-2 border-primary border-opacity-5 dark:border-white w-11/12 m-auto">

                                <h3 className=" pt-4 price mb-2 text-black dark:text-white">
                                    Precio entre <span className="amount">{priceMin}</span> y <span
                                    className="amount">{priceMax}</span>
                                </h3>
                                <h3 className="price mb-2 text-black dark:text-white">
                                    {eligible}
                                </h3>
                                <p className="pb-4 mb-7 px-8 text-sm text-body-color">{subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-left flex-1">
                        <div
                            className="z-10 mb-10 rounded-md bg-primary bg-opacity-10 p-7 md:p-8 lg:p-7 xl:p-8">
                            <h3 className="text-base mr-3 font-bold text-purple-500  mb-4 dark:text-white">¿Qué
                                incluye la
                                solución?</h3>
                            {childExtra}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KitBox;
