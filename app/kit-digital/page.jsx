import Breadcrumb from "@/components/Common/Breadcrumb";
import Kits from "@/app/kit-digital/kits";
import kitDigitalData from "@/app/kit-digital/kitDigitalData";

const KitDigital = () => {
    return (
        <>
            <Breadcrumb
                pageName="Kit Digital"
                description="Acelera o consolida la digitalización de tu negocio con el plan de ayudas kit digital."
            />

            <div className="w-full px-4 pb-10 bg-white rounded-2xl m-0">
                <div
                    className="wow fadeInUp relative mx-auto  w-full  lg:mr-0"
                    data-wow-delay=".2s"
                >
                    <img className="object-cover object-center rounded" alt="Transformación digital"
                         src="/images/kit-digital/logo.png"/>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <Kits tabs={kitDigitalData}/>
            </div>
        </>
    );
}
export default KitDigital;