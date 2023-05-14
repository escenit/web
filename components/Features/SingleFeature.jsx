const SingleFeature = ({feature}) => {
    const {icon, title, paragraph} = feature;
    return (
        <div className="w-full">
            <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="flex m-auto flex-row xl:flex-col m-auto text-left mb-5 ">
                    <div
                        className="xl:mb-6 flex h-[35px] w-[35px] xl:h-[70px] xl:w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        {icon}
                    </div>
                    <h3 className="m-auto align-middle text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl ml-5 xl:ml-0">
                        {title}
                    </h3>
                </div>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    {paragraph}
                </p>
            </div>
        </div>
    );
};

export default SingleFeature;
