import Link from "next/link";
import Image from "next/image";
import Social from "@/components/Social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-dark bg-opacity-5"
        data-wow-delay=".1s"
      >
        <div className="w-full bg-primary/10 py-10">
          <div className="w-3/4 md:w-2/6 mx-auto wow fadeInUp" data-wow-delay="0.6s">
            <Social excludeTitles={['whatsapp']} />
          </div>
          <div className="container relative">
            <div className="absolute left-0 hidden md:block">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="images/logo/logo-2.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="images/logo/logo.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
            </div>
            <div>
              <p className="font-paytone text-center text-base text-primary dark:text-white">
                © {currentYear} - Escenit Media SL. Todos los derechos reservados.
              </p>
            </div>
            <div className="md:max-w-3xl mx-auto space-y-1 md:flex items-center justify-between gap-2 mt-2">
              <Link href="/legal-notice" className="cursor-pointer block text-center hover:underline opacity-80 hover:opacity-100">
                Aviso Legal
              </Link>
              <Link href="/privacy-policy" className="cursor-pointer block text-center hover:underline opacity-80 hover:opacity-100">
                Política de Privacidad
              </Link>
              <Link href="/accessibility-statement" className="cursor-pointer block text-center hover:underline opacity-80 hover:opacity-100">
                Declaración de Accesibilidad
              </Link>
              <Link href="/cookie-policy" className="cursor-pointer block text-center hover:underline opacity-80 hover:opacity-100">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
