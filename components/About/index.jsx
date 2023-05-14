import SectionTitle from "@/components/Common/SectionTitle";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionOne from "@/components/About/AboutSectionOne";


const About = () => {
    return (
        <>
            <section id="about" className="py-16 md:py-20 lg:py-28">
                <div className="container w-full xl:w-10/12">
                    <SectionTitle
                        title="Sobre nosotros"
                        paragraph="Somos una empresa comprometida con la creación de software de alta calidad. "
                        center
                    />
                    <AboutSectionOne></AboutSectionOne>
                </div>
                <div className="container pt-16 md:pt-20 lg:pt-28">
                    <SectionTitle
                        title="Nuestra filosofía"
                        paragraph="Trabajamos para ofrecer el mejor servicio."
                        center
                        mb="20"
                    />
                    <AboutSectionTwo></AboutSectionTwo>
                </div>
            </section>
        </>
    );
}


export default About;
