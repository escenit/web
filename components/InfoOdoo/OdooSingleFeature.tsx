const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="m-auto mb-5 flex flex-row text-left xl:flex-col ">
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary xl:mb-6 xl:h-[70px] xl:w-[70px]">
            {icon}
          </div>
          <h3 className="m-auto ml-5 align-middle text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:ml-0 xl:text-2xl">
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
