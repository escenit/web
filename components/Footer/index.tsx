import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-dark bg-opacity-5"
        data-wow-delay=".1s"
      >
        <div className="w-full bg-primary/10 py-10">
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
                © 2023 - Escenit Media S.L
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
