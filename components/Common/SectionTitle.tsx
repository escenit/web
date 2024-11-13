const SectionTitle = ({
  title,
  paragraph,
  subparagraph,
  width = "720px",
  center,
  mb = "50px",
}: {
  title: string;
  paragraph: string;
  subparagraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="font-paytone mb-4 text-3xl !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title.toUpperCase()}
        </h2>
        <hr className="mx-auto mb-2 h-1 w-10 rounded border-0 bg-primary " />
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {subparagraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
