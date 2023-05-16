import Breadcrumb from "@/components/Common/Breadcrumb";
import Kits from "@/app/kit-digital/kits";
import kitDigitalData from "@/app/kit-digital/kitDigitalData";
import Image from "next/image";

const KitDigital = () => {
    return (
        <>
            <Breadcrumb
                pageName="Kit Digital"
                description="Acelera o consolida la digitalización de tu negocio con el plan de ayudas kit digital."
            />


            <div className="w-full bg-white h-[120px] p-2">
            <div data-wow-delay=".2s" className="container bg-white relative mx-auto px-4 wow fadeInUp mx-auto  w-11/12 h-[100px] object-contain">
                <Image
                    alt='Transformación digital'
                    src="/images/kit-digital/logo.png"
                    fill
                />
                </div>
            </div>
            <div className="container mx-auto  lg:py-10">
                <Kits tabs={kitDigitalData}/>
            </div>
        </>
    );
}
export default KitDigital;
