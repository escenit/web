import List from "@/components/Common/List";


const AboutSectionOne = () => {

    return (
        <div className="w-full lg:flex">
            <div
                className="wow fadeInUp h-64 lg:h-auto lg:w-1/3 flex-none bg-cover text-center "
                title="Sobre nosotros" data-wow-delay=".15s">
                <img className="object-cover object-center rounded" alt="Transformación digital"
                     src="/images/about/hero_1.jpg"/>
            </div>
            <div className="wow fadeInUp p-12 flex flex-col justify-between leading-normal w-full lg:w-2/3"
                 data-wow-delay=".15s">
                <p className="text-lg font-medium text-body-color mx-auto text-center xl:text-left">Ofrecemos
                    a nuestros clientes una solución tecnológica a medida para adaptar su negocio al
                    futuro.</p>
                <div className="flex items-center">
                    <div
                        className=" w-full mt-8 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2 lg:w-1/2 xl:w-1/2">
                                <List text="Inovación técnologica"/>
                                <List text="Soluciones integrales"/>
                                <List text="Métodología Ágil"/>
                            </div>

                            <div className="w-full px-3 sm:w-1/2 lg:w-1/2 xl:w-1/2">
                                <List text="Entregas en plazo"/>
                                <List text="Proactivos"/>
                                <List text="Asesoramiento"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AboutSectionOne;
