import List from "@/components/Common/List";
import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <div className="w-full lg:flex">
      <div
        className="wow fadeInUp h-64 flex-none bg-cover text-center lg:h-auto lg:w-1/3 "
        title="Sobre nosotros"
        data-wow-delay=".15s"
      >
        <div className="relative h-full w-full object-contain">
          <Image alt="Mountains" src="/images/about/hero_1.jpg" fill />
        </div>
      </div>
      <div
        className="wow fadeInUp flex w-full flex-col justify-between p-12 leading-normal lg:w-2/3"
        data-wow-delay=".15s"
      >
        <p className="mx-auto text-center text-lg font-medium text-body-color xl:text-left">
          Ofrecemos a nuestros clientes una solución tecnológica a medida para
          adaptar su negocio al futuro.
        </p>
        <div className="flex items-center">
          <div className=" mx-auto mt-8 w-full">
            <div className="flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2 lg:w-1/2 xl:w-1/2">
                <List text="Innovación tecnológica" />
                <List text="Soluciones integrales" />
                <List text="Metodología Ágil" />
                <List text="Entregas en plazo" />
                <List text="Proactivos" />
                <List text="Asesoramiento" />
              </div>

              <div className="w-full px-3 sm:w-1/2 lg:w-1/2 xl:w-1/2">
                <List text="Somos Partner Odoo" />
                <List text="Kit Digital" />
                <List text="Kit Consulting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionOne;
