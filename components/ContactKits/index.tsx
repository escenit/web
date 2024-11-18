
import Link from "next/link";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      nom: event.target.nom.value,
      mail: event.target.mail.value,
      message: event.target.message.value,
    };
    window.location.href =
      "mailto:contact@escenit.com?subject=" +
      data.nom +
      " [" +
      data.mail +
      "]&body=" +
      data.message;
  };

  return (
    <section id="contact" className=" bg-primary/[.09] overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 mx-auto">
            <div
              className="wow fadeInUp mb-12 h-full rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Quieres contactar con nosotros?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color dark:text-white/75">
                Rellena el formulario o contáctanos directamente a{" "}
                <Link href="mailto:contact@escenit.com" target="_blank">
                  contact@escenit.com
                </Link>
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre
                      </label>
                      <input
                        name="nom"
                        required={true}
                        type="text"
                        placeholder="Introduce el nombre"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color dark:text-white/75 placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Correo
                      </label>
                      <input
                        name="mail"
                        required={true}
                        type="email"
                        placeholder="Introduce el correo"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color dark:text-white/75 placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Mensaje
                      </label>
                      <textarea
                        required={true}
                        name="message"
                        rows={5}
                        placeholder="Escribe tu mensaje"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color dark:text-white/75 placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4 text-center">
                    <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      ENVIAR
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
