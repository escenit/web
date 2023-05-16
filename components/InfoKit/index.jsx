"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";
import infoKitData from "@/components/InfoKit/infoKitData";
import Image from "next/image";

const InfoKit = () => {

    return (
        <section id="pricing" className="pt-16 md:pt-20 lg:pt-28 lg:px-28">
            <div className="container">
                <SectionTitle
                    title="Kit Digital"
                    center
                    mb='20px'
                    paragraph="Acelera o consolida la digitalización de tu negocio con el plan de ayudas kit digital"
                />

                <div className="mb-16 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInLeftBig relative m-auto mb-8"
                            data-wow-delay=".3s"
                        >
                            <div className="relative w-full h-[300px] object-contain">
                                <Image
                                    alt='Transformación digital'
                                    src="/images/kit-digital/digital-transform.png"
                                    fill="true"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInUp"
                            data-wow-delay=".15s"
                        >
                            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px]">
                                ¿En qué consiste?
                            </h2>
                            <p className="text-base !leading-relaxed text-body-color md:text-lg">
                                Es un programa de <strong className="text-primary dark:text-white">ayudas
                                directas</strong>, provenientes de los fondos europeos Next
                                Generation EU. Está dirigido a las PYMES y autónomos para impulsar o consolidar
                                el entorno digital sus las empresas.

                                El KIT DIGITAL está pensado para <strong className="text-primary dark:text-white">ayudar
                                en la innovación</strong> de ámbitos como la
                                presencia digital, la oferta de servicios de las empresas, las ventas online, el
                                marketing digital, la gestión operativa, los procesos industriales, las
                                relaciones comerciales y la cooperación internacional interempresarial.
                            </p>
                        </div>
                    </div>
                </div>

                <SectionTitle
                    title="¿Cómo se consigue?"
                    center
                    mb='25px'
                    paragraph="Conseguir un bono digital es así de sencillo"
                />
            </div>

            <div
                className="grid grid-cols-1 gap-x-8 gap-y-10  md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 mb-16">
                {infoKitData.map((infoKit) => (
                    <div key={infoKit.id}
                         className="w-full h-full wow fadeIn relative overflow-hidden rounded-md bg-primary bg-opacity-5  shadow-one dark:bg-dark h-full"
                         data-wow-delay={infoKit.delay} data-wow-duration="1.5s">
                        <div
                            className="my-10 m-auto flex h-[70px] w-[70px] items-center justify-center rounded-md text-primary">
                            {infoKit.icon}
                        </div>
                        <h3 className="mb-4 block text-center text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                            {infoKit.title}
                        </h3>
                        <p className="mb-6 mx-6 pb-6 text-center text-base font-medium text-body-color">
                            {infoKit.paragraph}</p>
                    </div>
                ))}
            </div>
            <div
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mb-16"
            >
                <Link
                    href="mailto:contact@escenit.com?subject=Solicitar Kit Digital&body=Quiero solicitar el Kit Digital"
                    className="wow pulse duration-700 cursor-pointer rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    data-wow-iteration="infinite">
                    SOLICITA EL KIT
                </Link>
                <Link
                    href="/kit-digital"
                    className="cursor-pointer rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                >
                    + INFORMACIÓN
                </Link>
            </div>
        </section>
    );
};

export default InfoKit;
