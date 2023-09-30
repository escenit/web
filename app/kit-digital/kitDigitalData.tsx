import KitList from "@/app/kit-digital/kitList";
import KitBox from "@/app/kit-digital/kitBox";

const kitDigitalData = [
  {
    id: "1",
    label: "Web",
    content: (
      <KitBox
        priceMin="1.000€"
        priceMax="3.000"
        eligible="Subvencionables: 2.000€"
        subtitle="Solución subvencionada por los fondos Next Generation de la UE"
        title="Creamos tu página WEB"
        slogan="Tu página web en menos de 1 mes, con 12 meses de soporte incluidos"
      >
        <KitList
          text="Diseño atractivo y personalizado"
          type="basic"
          status="active"
        />
        <KitList text="Optimizada para SEO" type="basic" status="active" />
        <KitList text="100% responsive" status="active" type="basic" />
        <KitList
          text="Usabilidad y experiencia de usuario de primer nivel"
          status="active"
          type="basic"
        />

        <KitList
          text="Dominio durante un plazo mínimo de doce meses. La titularidad exclusiva del cliente"
          status="active"
          type="extra"
        />
        <KitList
          text="Hosting: alojamiento de la página web durante un plazo mínimo de 12 meses."
          status="active"
          type="extra"
        />
        <KitList
          text="Diseño de la página web: estructura web con un mínimo de 3 páginas o apartados."
          status="active"
          type="extra"
        />
        <KitList
          text="La web será responsive, adaptada a todo tipo de dispositivos"
          status="active"
          type="extra"
        />
        <KitList
          text="Diseño con criterios de conformidad de nivel AA de las Pautas WCAG-2.1"
          status="active"
          type="extra"
        />
        <KitList
          text="Contenido autogestionable por el cliente"
          status="active"
          type="extra"
        />
        <KitList
          text="SEO, posicionamiento básico en Internet"
          status="active"
          type="extra"
        />
        <KitList
          text="Web preparada para multiidioma y traducida a un idioma, además del castellano, si es requerido"
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 50,
        eligible: "2.000€",
      },
      {
        title: "Segmento II",
        min: 3,
        max: 9,
        eligible: "2.000€",
      },
      {
        title: "Segmento III",
        min: 0,
        max: 3,
        eligible: "2.000€",
      },
    ],
  },
  {
    id: "2",
    label: "eCommerce",
    content: (
      <KitBox
        packageName="Lite"
        priceMin="1.000€"
        priceMax="3.000"
        eligible="Subvencionables: 2.000€"
        subtitle="Solución subvencionada por los fondos Next Generation de la UE"
        title="Creamos tu tienda online"
      >
        <KitList
          text="Diseño atractivo y personalizado"
          type="basic"
          status="active"
        />
        <KitList
          text="Optimizada para SEO: posicionamiento básico en Internet"
          type="basic"
          status="active"
        />
        <KitList text="100% responsive" status="active" type="basic" />
        <KitList
          text="Usabilidad y experiencia de usuario de primer nivel"
          status="active"
          type="basic"
        />

        <KitList
          text="Creación de la tienda online o ecommerce y alta del catálogo de productos."
          status="active"
          type="extra"
        />
        <KitList
          text="Número de referencias a cargar: mínimo 100 (Salvo que la Pyme no disponga de este número, en cuyo caso podrá ser menor)"
          status="active"
          type="extra"
        />
        <KitList
          text="Configuración e integración de métodos de pago"
          status="active"
          type="extra"
        />
        <KitList
          text="Configuración e integración de métodos de envío"
          status="active"
          type="extra"
        />
        <KitList
          text="Accesible y autogestionable"
          status="active"
          type="extra"
        />
        <KitList
          text="Diseño con criterios de conformidad de nivel AA de las pautas WCAG-2.1"
          status="active"
          type="extra"
        />
        <KitList
          text="SEO, posicionamiento básico en internet"
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 50,
        eligible: "2.000€",
      },
      {
        title: "Segmento II",
        min: 3,
        max: 9,
        eligible: "2.000€",
      },
      {
        title: "Segmento III",
        min: 0,
        max: 3,
        eligible: "2.000€",
      },
    ],
  },
  {
    id: "3",
    label: "Factura electrónica",
    content: (
      <KitBox
        packageName="Lite"
        priceMin="1.000€"
        priceMax="3.000"
        eligible="Subvencionables: 1.000€"
        subtitle="Solución subvencionada por los fondos Next Generation de la UE"
        title="Digitalizamos albaranes y facturas"
      >
        <KitList text="Automatizamos procesos" type="basic" status="active" />
        <KitList text="Software intuitivo" type="basic" status="active" />
        <KitList
          text="Usabilidad y experiencia de usuario de primer nivel"
          status="active"
          type="basic"
        />
        <KitList text="Reduce costes de gestión" status="active" type="basic" />

        <KitList
          text="Formato de factura electrónica estructurado para facilitar su tratamiento"
          status="active"
          type="extra"
        />
        <KitList text="Facturas ilimitadas" status="active" type="extra" />
        <KitList text="Clientes ilimitados" status="active" type="extra" />
        <KitList
          text="Envío de facturas por correo electrónico"
          status="active"
          type="extra"
        />
        <KitList text="Facturas personalizables" status="active" type="extra" />
        <KitList
          text="Copia de seguridad periódicas"
          status="active"
          type="extra"
        />
        <KitList
          text="Almacenamiento de, al menos, 1GB"
          status="active"
          type="extra"
        />
        <KitList
          text="Integración con diversas plataformas a través de APIs o Web Services"
          status="active"
          type="extra"
        />
        <KitList
          text="Sistema de control del vencimiento de las facturas"
          status="active"
          type="extra"
        />
        <KitList
          text="Parametrización de hasta 10 horas"
          status="active"
          type="extra"
        />
        <KitList
          text="Productos o servicios ilimitados"
          status="active"
          type="extra"
        />
        <KitList
          text="Envío y recepción de facturas"
          status="active"
          type="extra"
        />
        <KitList
          text="Generación de registro de facturación"
          status="active"
          type="extra"
        />
        <KitList
          text="Facturas personalizables y verificables"
          status="active"
          type="extra"
        />
        <KitList text="Verificación presencial" status="active" type="extra" />
        <KitList
          text="Declaración responsable por parte del fabricante o desarrollador"
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 50,
        eligible: "2.000€",
        users: 3,
      },
      {
        title: "Segmento II",
        min: 3,
        max: 9,
        eligible: "2.000€",
        users: 3,
      },
      {
        title: "Segmento III",
        min: 0,
        max: 3,
        eligible: "1.000€",
        users: 1,
      },
    ],
  },
  {
    id: "4",
    label: "Gestión de clientes",
    content: (
      <KitBox
        packageName="Lite"
        priceMin="4.000€"
        priceMax="6.000"
        eligible="Subvencionables: 2.000€"
        subtitle="Solución subvencionada por los fondos Next Generation de la UE"
        title="Digitalizamos la gestión de tus clientes"
      >
        <KitList
          text="Diseño atractivo y personalizado"
          type="basic"
          status="active"
        />
        <KitList text="Software intuitivo" type="basic" status="active" />
        <KitList text="100% responsive" status="active" type="basic" />
        <KitList
          text="Usabilidad y experiencia de usuario de primer nivel"
          status="active"
          type="basic"
        />

        <KitList
          text="Hasta 40 horas de parametrización (definición de procesos comerciales y carga de datos)"
          status="active"
          type="extra"
        />
        <KitList
          text="Almacenar, consultar y modificar la información de cada cliente"
          status="active"
          type="extra"
        />
        <KitList
          text="Alta de nuevos clientes potenciales de forma manual o mediante importación por fichero"
          status="active"
          type="extra"
        />
        <KitList
          text="Envío de emails a clientes"
          status="active"
          type="extra"
        />
        <KitList
          text="Creación de tareas o acciones comerciales tanto de forma manual como automática"
          status="active"
          type="extra"
        />
        <KitList
          text="Generación de informes de seguimiento y monitorización de la actividad comercial"
          status="active"
          type="extra"
        />
        <KitList text="Sistema de alertas" status="active" type="extra" />
        <KitList
          text="Software para la gestión centralizada de la comunicación"
          status="active"
          type="extra"
        />
        <KitList
          text="Integración con diversas plataformas medianteAPIs o Web Services."
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 50,
        eligible: "4.000€",
      },
      {
        title: "Segmento II",
        min: 3,
        max: 9,
        eligible: "2.000€",
      },
      {
        title: "Segmento III",
        min: 0,
        max: 3,
        eligible: "2.000€",
      },
    ],
  },
  {
    id: "5",
    label: "Gestión de procesos",
    content: (
      <KitBox
        packageName="Lite"
        priceMin="5.000€"
        priceMax="25.000"
        eligible="Subvencionables: 6.000€"
        subtitle="Solución subvencionada por los fondos Next Generation de la UE"
        title="Digitalizamos y automatizamos procesos"
      >
        <KitList text="Analizamos cada proceso" type="basic" status="active" />
        <KitList
          text="Automatizamos cada proceso"
          type="basic"
          status="active"
        />
        <KitList
          text="Cremos flujos óptimos de trabajo"
          status="active"
          type="basic"
        />
        <KitList text="Reducimos tus costes" status="active" type="basic" />

        <KitList
          text="Hasta 60 horas de parametrización (definición de procesos y carga de datos)"
          status="active"
          type="extra"
        />
        <KitList
          text="Digitalización y/o automatización de procesos y flujos de trabajo: tendrás digitalizados y/o automatizados procesos como:"
          subtext="Contabilidad, Facturación, Proyectos, Inventarios, Compras y pagos, Recursos humanos, Logística."
          status="active"
          type="extra"
        />
        <KitList
          text="Integración con diversas plataformas a través de APIs o Web Services."
          status="active"
          type="extra"
        />
        <KitList
          text="Actualizaciones de la solución con nuevas versiones."
          status="active"
          type="extra"
        />
        <KitList
          text="Escalable: si tu empresa crece o cambia estructuralmente, la solución se adaptará a estos cambios."
          status="active"
          type="extra"
        />
      </KitBox>
    ),
    target: [
      {
        title: "Segmento I",
        min: 10,
        max: 50,
        eligible: "6.000€",
      },
      {
        title: "Segmento II",
        min: 3,
        max: 9,
        eligible: "3.000€",
      },
      {
        title: "Segmento III",
        min: 0,
        max: 3,
        eligible: "2.000€",
      },
    ],
  },
];
export default kitDigitalData;
