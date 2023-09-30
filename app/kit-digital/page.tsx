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

      <div className="h-[120px] w-full bg-white p-2">
        <div
          data-wow-delay=".2s"
          className="wow fadeInUp container relative mx-auto mx-auto h-[100px] w-11/12  bg-white object-contain px-4"
        >
          <Image
            alt="Transformación digital"
            src="/images/kit-digital/logo.png"
            fill
          />
        </div>
      </div>
      <div className="container mx-auto  lg:py-10">
        <Kits tabs={kitDigitalData} />
      </div>
    </>
  );
};
export default KitDigital;
