import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
    return (
        <>
            <section
                id="features"
                className="bg-primary/[.03] py-16 md:py-20 lg:py-28 section"
            >
                <div className="container">
                    <SectionTitle
                        title="Servicios"
                        paragraph="Ofrecemos una amplia gama de servicios informáticos para ayudar a las empresas a mejorar su productividad y eficiencia."
                        center
                    />
                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map((feature) => (
                            <SingleFeature key={feature.id} feature={feature}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
