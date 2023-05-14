import TechnologyData from "@/components/Technology/technologyData";
import SectionTitle from "@/components/Common/SectionTitle";
import React, {useEffect, useState} from "react";
import SingleTechnology from "@/components/Technology/SingleTechnology";

const Technologies = (items) => {
    const [activeType, setActiveType] = useState(TechnologyData.types[0].type);
    const [types, setTypes] = useState(TechnologyData.types);
    const [list, setList] = useState(TechnologyData.techs);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 770) {
                const newTypes = TechnologyData.types.filter((t) => t.type !== 'TODO');
                setTypes(newTypes);
                if (activeType === 'TODO') {
                    setActiveType(newTypes[0].type);
                    changeListType(newTypes[0].type);
                }
            } else {
                setTypes(TechnologyData.types);
            }
        };
        handleResize(); // se llama la función para establecer el valor inicial de la lista
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [items, activeType]);

    const changeListType = (type) => {
        setList(TechnologyData.techs.filter((item) => item.type === type || type === 'TODO'));
        setActiveType(type);
    };

    return (
        <>
            <section
                id="technologies"
                className="bg-primary/[.03] py-16 md:py-20 lg:py-28 section"
            >
                <div className="container">
                    <SectionTitle
                        title="Stack tecnológico"
                        paragraph="Siempre utilizamos un stack tecnológico robusto y actualizado que nos permite trabajar con eficiencia y eficacia."
                        center
                        mb="30px"
                    />

                    <div data-wow-delay=".15s"
                         className="wow fadeInUp  flex flex-wrap m-auto w-fit mb-10 h-fit text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center  ">
                        {types.map((type) => (
                            <div
                                key={type.id}
                                className={`inline-block cursor-pointer  py-4 px-5  font-semibold text-white active tab ${
                                    type.type === activeType ? "tab-active animate__animated animate__fadeIn bg-primary" : "bg-body-color duration-300 ease-in-out hover:bg-primary/80"
                                }`}
                                onClick={() => changeListType(type.type)}
                            >
                                {type.type}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 grid-cols-auto gap-4 p-12">
                        {list.map((tech) => (
                            <SingleTechnology key={tech.id} tech={tech}></SingleTechnology>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


export default Technologies;