import KitList from "@/app/kit-consulting/kitConsultingList";
import KitBox from "@/app/kit-consulting/kitConsultingBox";

const kitDigitalData = [
  {
    id: "1",
    label: "Inteligencia Artificial",
    content: (
      <KitBox
        priceMin=""
        priceMax=""
        eligible=""
        subtitle="Nuestro servicio ofrece un plan de inteligencia artificial personalizado para tu PYME, que incluye una inversión clara y medidas de adopción efectivas. Además, priorizamos tu aprendizaje en técnicas de IA y desarrollamos un caso de uso específico para maximizar el impacto en tu negocio."
        title="Asesoramiento en Inteligencia Artificial"
        slogan=""
      >
        <KitList
          text="Importe de la ayuda: 6.000€"
          type="basic"
          status="active"
        />
        <KitList
          text="Tipología del asesoramiento: Básico"
          type="basic"
          status="active"
        />
        <KitList
          text="Identificación de conjuntos de datos relevantes para la implementación de algoritmos de IA, de esta forma podrás tener una mejor comprensión de la información de tu pyme."
          status="active"
          type="extra"
        />
        <KitList
          text="Asesorarte para la creación de protocolos de gobernanza de datos con normativas de IA, garantizando la validez y la veracidad de los mismos cuando aplique la IA."
          status="active"
          type="extra"
        />
        <KitList
          text="Analizar herramientas de IA para la gestión de datos, realizando recomendaciones basadas en la realidad y la capacidad de inversión de tu pyme."
          status="active"
          type="extra"
        />
        <KitList
          text="Orientarte sobre cómo las técnicas de IA pueden derivar información valiosa a partir de los datos existentes para impulsar la toma de decisiones estratégicas."
          status="active"
          type="extra"
        />
        <KitList
          text="Capacitarte en el uso estratégico de las técnicas de IA en el manejo de datos."
          status="active"
          type="extra"
        />
        <KitList
          text="Desarrollar y ejecutar un caso de uso adaptado al negocio, relacionado con la aplicación de la inteligencia artificial."
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 49,
        eligible: "6.000€",
      },
      {
        title: "Segmento II",
        min: 50,
        max: 99,
        eligible: "6.000€",
      },
      {
        title: "Segmento III",
        min: 100,
        max: 249,
        eligible: "6.000€",
      },
    ],
  },
  {
    id: "2",
    label: "Análisis de Datos (Básico)",
    content: (
      <KitBox
        priceMin=""
        priceMax=""
        eligible=""
        subtitle="Nuestro servicio está diseñado para proporcionarte un plan de análisis de datos básico adaptado a las necesidades de tu PYME, incluyendo detalles sobre la inversión necesaria y las medidas para su adopción. Además, nos enfocamos en tu formación en procesos de extracción y análisis de datos para potenciar tu negocio."
        title="Asesoramiento en Análisis de Datos (Básico)"
        slogan=""
      >
        <KitList
          text="Importe de la ayuda: 6.000€"
          type="basic"
          status="active"
        />
        <KitList
          text="Tipología del asesoramiento: Básico"
          type="basic"
          status="active"
        />
        <KitList
          text="Identificar aquellos datos de tu pyme que mejoren el entendimiento de la información disponible."
          status="active"
          type="extra"
        />
        <KitList
          text="Analizar las distintas opciones de herramientas de inteligencia artificial para explotar y visualizar los datos, recomendando la que mejor se adapte a la situación actual de tu pyme y la inversión necesaria para su adopción."
          status="active"
          type="extra"
        />
        <KitList
          text="Establecer información de valor a partir del tratado de datos con algoritmos de inteligencia artificial."
          status="active"
          type="extra"
        />
        <KitList
          text="Asesorarte sobre la explotación de los datos a través de la herramienta elegida."
          status="active"
          type="extra"
        />
        <KitList
          text="Opcionalmente, podremos asesorarte sobre los procesos de gobierno, gestión y gestión de calidad del dato de acuerdo con las especificaciones UNE 0077 “Gobierno del dato”, UNE 0078 “Gestión del Dato” y UNE 0079 “Gestión de la calidad del dato”."
          status="active"
          type="extra"
        />
        <KitList
          text="Desarrollar y ejecutar un caso de uso adaptado al negocio en análisis de datos (nivel básico)."
          status="active"
          type="extra"
        />
        <KitList
          text="Identificar oportunidades o posibles usos de la IA en el ámbito del análisis de datos."
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 49,
        eligible: "6.000€",
      },
      {
        title: "Segmento II",
        min: 50,
        max: 99,
        eligible: "6.000€",
      },
      {
        title: "Segmento III",
        min: 100,
        max: 249,
        eligible: "6.000€",
      },
    ],
  },
  {
    id: "3",
    label: "Análisis de Datos (Avanzado)",
    content: (
      <KitBox
        priceMin=""
        priceMax=""
        eligible=""
        subtitle="Este servicio te ofrece un plan de análisis de datos avanzado, personalizado para tu PYME, detallando la inversión y pasos necesarios para implementarlo. Nos enfocamos en establecer, mejorar y automatizar tus procesos de extracción y análisis de datos, priorizando tu aprendizaje para maximizar el potencial de tu sistema actual."
        title="Asesoramiento en Análisis de Datos (Avanzado)"
        slogan=""
      >
        <KitList
          text="Importe de la ayuda: 6.000€"
          type="basic"
          status="active"
        />
        <KitList
          text="Tipología del asesoramiento: Avanzado"
          type="basic"
          status="active"
        />
        <KitList
          text="Identificar de los datos de tu pyme, obtener su valoración y evaluar su uso en conjunción con otras fuentes."
          status="active"
          type="extra"
        />
        <KitList
          text="Generar y obtener información de valor a partir del tratado de datos con algoritmos de inteligencia artificial para mejorar la toma de decisiones basadas en los datos."
          status="active"
          type="extra"
        />
        <KitList
          text="Proporcionarte asesoramiento para la comprensión de los datos de tu pyme y el manejo de herramientas de gestión de los datos."
          status="active"
          type="extra"
        />
        <KitList
          text='Opcionalmente, podrá asesorarte sobre la evaluación de la capacidad de los procesos de gobierno, gestión y gestión de calidad del dato siguiendo la especificación UNE 0080 de “Guía de evaluación del Gobierno, Gestión y Gestión de la Calidad del Dato” y la especificación UNE 0081” Guía de evaluación de la calidad de datos”.'
          status="active"
          type="extra"
        />
        <KitList
          text="Desarrollar y ejecutar un caso de uso adaptado a tu pyme utilizando técnicas de inteligencia artificial, en análisis de datos (nivel avanzado)."
          status="active"
          type="extra"
        />
        <KitList
          text="Identificar oportunidades o posibles usos de la IA en el ámbito del análisis de datos avanzado."
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 49,
        eligible: "6.000€",
      },
      {
        title: "Segmento II",
        min: 50,
        max: 99,
        eligible: "6.000€",
      },
      {
        title: "Segmento III",
        min: 100,
        max: 249,
        eligible: "6.000€",
      },
    ],
  },
  {
    id: "4",
    label: "Ventas Digitales",
    content: (
      <KitBox
        priceMin=""
        priceMax=""
        eligible=""
        subtitle="El objetivo de este servicio es definir la inversión necesaria y las técnicas de marketing digital, incluyendo el uso de tecnologías de inteligencia artificial, para optimizar el rendimiento de tus ventas en línea. Además, se elaborará un caso de uso específico para el área de ventas digitales de tu PYME, asegurando una implementación efectiva."
        title="Asesoramiento en Ventas Digitales"
        slogan=""
      >
        <KitList
          text="Importe de la ayuda: 6.000€"
          type="basic"
          status="active"
        />
        <KitList
          text="Tipología del asesoramiento: Básico"
          type="basic"
          status="active"
        />
        <KitList
          text="Analizar la situación actual de tu pyme en ventas digitales, posicionamiento en RRSS y presencia en internet."
          status="active"
          type="extra"
        />
        <KitList
          text="Concienciar a tus empleados sobre la importancia y las técnicas de venta online y marketing digital."
          status="active"
          type="extra"
        />
        <KitList
          text="Definir una estrategia de ventas online y presencia digital (RRSS, posicionamiento en motores de búsqueda, Google Analytics, etc.) a medio y largo plazo, utilizando modelos predictivos basados en IA."
          status="active"
          type="extra"
        />
        <KitList
          text="Desarrollar y ejecutar un caso de uso adaptado a tu pyme utilizando las técnicas apropiadas de inteligencia artificial, en el área de ventas digitales."
          status="active"
          type="extra"
        />
        <KitList
          text="Identificación de oportunidades o posibles usos de la IA en el ámbito de las ventas digitales."
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 49,
        eligible: "6.000€",
      },
      {
        title: "Segmento II",
        min: 50,
        max: 99,
        eligible: "6.000€",
      },
      {
        title: "Segmento III",
        min: 100,
        max: 249,
        eligible: "6.000€",
      },
    ],
  },
  {
    id: "5",
    label: "Procesos de Negocio o Procesos de Producción",
    content: (
      <KitBox
        priceMin=""
        priceMax=""
        eligible=""
        subtitle="Ofrecemos un servicio de optimización de procesos empresariales o de producción para tu PYME, utilizando técnicas de inteligencia artificial para identificar áreas de mejora y desarrollar un plan personalizado. Incluimos un caso de uso específico adaptado a tu negocio para maximizar la eficiencia y productividad."
        title="Asesoramiento en Procesos de Negocio o Procesos de Producción"
        slogan=""
      >
        <KitList
          text="Importe de la ayuda: 6.000€"
          type="basic"
          status="active"
        />
        <KitList
          text="Tipología del asesoramiento: Básico"
          type="basic"
          status="active"
        />
        <KitList
          text="Comprender las metas estratégicas, puntos clave y objetivos de tu pyme y alinearlas con enfoque en la digitalización, uso de la inteligencia artificial y mejora de los procesos empresariales (o, en su caso, proceso de fabricación seleccionado)."
          status="active"
          type="extra"
        />
        <KitList
          text="Analizar los procesos empresariales que llevas a cabo actualmente, para identificar posibles mejoras. En el caso de los procesos productivos, se realizará un análisis del proceso de fabricación seleccionado, identificando áreas de oportunidad para la eficiencia, calidad y mejora continua."
          status="active"
          type="extra"
        />
        <KitList
          text="Comunicar de manera efectiva a los empleados de tu pyme la relevancia estratégica de la digitalización de procesos, destacando cómo esto no solo optimiza el trabajo diario, sino también fortalece la competitividad."
          status="active"
          type="extra"
        />
        <KitList
          text="Proporcionar asesoramiento especializado en herramientas de gestión de procesos de negocio y de inteligencia artificial, abarcando desde ventas y recursos humanos hasta la gestión de proyectos, y destacando soluciones específicas para mejorar la eficiencia y calidad. Si, en su lugar, se ha optado por un proceso de fabricación, se proporcionará asesoramiento en herramientas y tecnología para la optimización y automatización de ese proceso productivo."
          status="active"
          type="extra"
        />
        <KitList
          text="Desarrollar y ejecutar un caso de uso adaptado a u pyme, utilizando las técnicas apropiadas, para la optimización de un proceso de negocio o, en su caso, proceso de fabricación."
          status="active"
          type="extra"
        />
        <KitList
          text="Identificar oportunidades o posibles usos de la IA en el ámbito de los procesos de negocio o, en su caso, procesos de producción."
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 49,
        eligible: "6.000€",
      },
      {
        title: "Segmento II",
        min: 50,
        max: 99,
        eligible: "6.000€",
      },
      {
        title: "Segmento III",
        min: 100,
        max: 249,
        eligible: "6.000€",
      },
    ],
  },
  {
    id: "6",
    label: "Estrategia y Rendimiento de Negocio",
    content: (
      <KitBox
        priceMin=""
        priceMax=""
        eligible=""
        subtitle="Este servicio ofrece un plan estratégico para mejorar el posicionamiento competitivo de tu PYME, incluyendo la inversión necesaria y herramientas adecuadas, así como el uso de inteligencia artificial para análisis avanzado. También se elabora un caso de uso personalizado para identificar oportunidades y optimizar tu rendimiento frente a la competencia."
        title="Asesoramiento en Estrategia y Rendimiento de Negocio"
        slogan=""
      >
        <KitList
          text="Importe de la ayuda: 6.000€"
          type="basic"
          status="active"
        />
        <KitList
          text="Tipología del asesoramiento: Básico"
          type="basic"
          status="active"
        />
        <KitList
          text="Analizar tu situación actual en inteligencia de negocio para evaluar necesidades, identificar brechas en el uso de tecnologías de inteligencia de negocio y detectar oportunidades de mejora."
          status="active"
          type="extra"
        />
        <KitList
          text="Plantear recomendaciones para desarrollar habilidades analíticas y fomentar una cultura de toma de decisiones basada en el tratamiento de datos con algoritmos de inteligencia artificial en el escenario competitivo actual."
          status="active"
          type="extra"
        />
        <KitList
          text="Asesorarte en la incorporación de técnicas y herramientas avanzadas de aprendizaje automático, inteligencia artificial y minería de datos, entendiendo las especificidades de tu pyme y alineándolas a los objetivos del negocio."
          status="active"
          type="extra"
        />
        <KitList
          text="Definir junto a ti una estrategia a medio y largo plazo para la implementación y optimización de la inteligencia de negocio basada en mejorar el rendimiento."
          status="active"
          type="extra"
        />
        <KitList
          text="Diseño y ejecución de un caso de uso que demuestre la efectividad de las técnicas de análisis de la competencia para mejorar la estrategia y el rendimiento del negocio."
          status="active"
          type="extra"
        />
        <KitList
          text="Identificación de oportunidades o posibles usos de la IA en el ámbito de la estrategia y rendimiento de negocio."
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 49,
        eligible: "6.000€",
      },
      {
        title: "Segmento II",
        min: 50,
        max: 99,
        eligible: "6.000€",
      },
      {
        title: "Segmento III",
        min: 100,
        max: 249,
        eligible: "6.000€",
      },
    ],
  },
  {
    id: "7",
    label: '"360" en Transformación Digital',
    content: (
      <KitBox
        priceMin=""
        priceMax=""
        eligible=""
        subtitle="Este servicio proporciona asesoramiento en la transformación digital de tu PYME, ofreciendo soluciones personalizadas y definiendo la inversión y medidas estratégicas necesarias para mejorar en todas las áreas. Utilizamos tecnologías innovadoras, como la inteligencia artificial, para identificar oportunidades de mejora y optimizar el proceso de transformación."
        title='Asesoramiento "360" en Transformación Digital'
        slogan=""
      >
        <KitList
          text="Importe de la ayuda: 6.000€"
          type="basic"
          status="active"
        />
        <KitList
          text="Tipología del asesoramiento: Básico"
          type="basic"
          status="active"
        />
        <KitList
          text="Analizar los procesos comerciales existentes para identificar aquellas áreas de tu pyme que podrían beneficiarse de la digitalización."
          status="active"
          type="extra"
        />
        <KitList
          text="Diseñar e implementar programas de concienciación para educar a tus empleados sobre la importancia estratégica de la transformación digital."
          status="active"
          type="extra"
        />
        <KitList
          text="Evaluar las herramientas y tecnologías ya en uso, ofreciéndote un asesoramiento para optimizar su rendimiento y alinearlas con tus objetivos de transformación digital."
          status="active"
          type="extra"
        />
        <KitList
          text="Desarrollar una estrategia clara y personalizada que articule los objetivos, plazos y pasos específicos para la transformación digital."
          status="active"
          type="extra"
        />
        <KitList
          text="Establecer un marco para la innovación continua y la adaptabilidad a medida que evolucionan las tecnologías digitales."
          status="active"
          type="extra"
        />
        <KitList
          text="Desarrollo y ejecución de un caso de uso adaptado al negocio, utilizando las técnicas apropiadas, que permita conocer las ventajas de la utilización de herramientas digitales."
          status="active"
          type="extra"
        />
        <KitList
          text="Identificación de oportunidades o posibles usos de la IA en el ámbito de la transformación digital.
"
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 49,
        eligible: "6.000€",
      },
      {
        title: "Segmento II",
        min: 50,
        max: 99,
        eligible: "6.000€",
      },
      {
        title: "Segmento III",
        min: 100,
        max: 249,
        eligible: "6.000€",
      },
    ],
  },
];
export default kitDigitalData;
