import Link from "next/link";

const WorkWithUs = () => {
  return (
    <div
      className="wow fadeInUp mb-12 mt-8 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mt-0 lg:mb-5 lg:px-8 xl:p-[55px] "
      data-wow-delay=".15s"
    >
      <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
        ¡Únete al equipo!
      </h2>
      <p className="mb-12 text-base font-medium text-body-color">
        Si buscas un nuevo desafio y formar parte de nuestra empresa no dudes en
        revisar nuestras ofertas.
      </p>
      <div className="w-full px-4 text-center">
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/escenitech/jobs/"
        >
          <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            VER OFERTAS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorkWithUs;
