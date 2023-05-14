const SectionTitle = ({
                          title,
                          paragraph,
                          subparagraph,
                          width = "570px",
                          center,
                          mb = "50px",
                      }) => {
    return (
        <>
            <div
                className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
                data-wow-delay=".1s"
                style={{maxWidth: width, marginBottom: mb}}
            >
                <h2 className="mb-4 text-3xl !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] font-paytone">
                    {title.toUpperCase()}
                </h2>
                <hr className="w-10 h-1 mx-auto bg-primary border-0 rounded mb-2 "/>
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
