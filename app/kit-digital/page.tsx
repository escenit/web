"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Kits from "@/app/kit-digital/kits";
import kitDigitalData from "@/app/kit-digital/kitDigitalData";
import Image from "next/image";
import ContactKits from "@/components/ContactKits";

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kit Digital"
        description="Acelera o consolida la digitalización de tu negocio con el plan de ayudas kit digital."
      />

      <div className="container mx-auto">
        <Kits tabs={kitDigitalData} />
      </div>

      <ContactKits />

      <div className="h-[300px] w-full p-2">
        <div
          data-wow-delay=".2s"
          className="wow fadeInUp container relative mx-auto h-full px-4 dark:bg-dark">
          <Image
            alt="Transformación digital"
            src="/images/kit-digital/Faldon_Plataforma_Logotipos.webp"
            className="object-contain dark:mix-blend-exclusion"
            fill
          />
        </div>
      </div>
    </>
  );
};
export default Page;
