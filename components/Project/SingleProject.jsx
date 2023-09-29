import Image from "next/image";

const SingleProject = ({project}) => {
    const {title, image, paragraph, client, tags, delay} = project;
    return (
        <>
            <div
                className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark h-full"
                data-wow-delay={delay} data-wow-duration="3s"
            >

                <div className="relative block h-[220px] w-full">
                  <span
                      className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
                    {tags[0]}
                  </span>
                    <Image src={image} alt="image" fill/>
                </div>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                    <h3 className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                        {title}
                    </h3>
                    <p className="mb-6  pb-6 text-base font-medium text-body-color">
                        {paragraph}
                    </p>
                    <div className="flex items-center absolute bottom-0 right-0 pb-5">
                        <div
                            className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                            <div className="mr-4">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image src={client.image} alt="author" fill/>
                                </div>
                            </div>
                            <div className="w-full">
                                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                                    {client.name}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject;