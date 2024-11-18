"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Kits from "@/app/kit-consulting/kitConsulting";
import kitConsultingData from "@/app/kit-consulting/kitConsultingData";
import Image from "next/image";
import ContactKits from "@/components/ContactKits";

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kit Consulting"
        description="Kit Consulting es un programa de ayudas del Gobierno de España diseñado para impulsar la transformación digital de pequeñas y medianas empresas (pymes). Escoge entre nuestras categorías de asesoramiento."
      />

      <div className="container mx-auto">
        <Kits tabs={kitConsultingData} />
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
