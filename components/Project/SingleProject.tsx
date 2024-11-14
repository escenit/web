import Image from "next/image";
import { Project } from "@/types/project";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, image, paragraph, client, tags, delay } = project;
  return (
    <>
      <div
        className="wow fadeInUp relative h-full overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay={delay}
        data-wow-duration="3s"
      >
        <div className="relative block h-[220px] w-full">
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
            {title}
          </h3>
          <p className="mb-6  pb-6 text-base font-medium text-body-color dark:text-white/75">
            {paragraph}
          </p>
          <div className="absolute bottom-0 right-0 flex items-center pb-5">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={client.image} alt="author" fill />
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
