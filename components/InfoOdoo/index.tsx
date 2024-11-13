"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleFeature from "./OdooSingleFeature";
import featuresData from "./OdoofeaturesData";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";

const InfoOdoo = () => {
  return (
    <section id="pricing" className=" bg-primary/[.15] py-16 md:pt-20 lg:px-28 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="Somos Partner de Odoo"
          center
          mb="20px"
          paragraph="Optimiza todos los aspectos de tu empresa con una Plataforma todo en uno que se adapta a tus necesidades"
        />

        <div className="mb-16 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInLeftBig relative m-auto mb-8"
              data-wow-delay=".3s"
            >
              <div className="relative h-[300px] w-full object-contain">
                <Image
                  alt="Transformación digital"
                  src="/images/odoo/erp-system-odoo.webp"
                  fill={true}
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px]">
                ¿Qué es Odoo?
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Odoo es un sistema{" "}
                <strong className="text-primary dark:text-white">
                  ERP (Enterprise Resource Planning)
                </strong>{" "}
                  de código abierto que ofrece una suite completa de aplicaciones empresariales integradas. Está dirigido y pensado para mejorar áreas clave como la gestión de ventas, el control de inventario, la contabilidad, el marketing digital, la gestión de proyectos, los recursos humanos y la productividad general de la empresa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <LinkScroll
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={750}
          onSetActive={() => {}}
          className="cursor-pointer rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          CONTACTAR
        </LinkScroll>
      </div>
    </section>
  );
};

export default InfoOdoo;
