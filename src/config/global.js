export default {
  global: {
    Name: 'Fundamentos laborales y novedades de nómina',
    Description:
      'La correcta gestión de la nómina comienza con la comprensión de la relación laboral, las modalidades de contratación y los elementos que originan los pagos al trabajador. Este componente desarrolla fundamentos sobre salario, jornada, seguridad social, prestaciones y aportes, junto con procedimientos para identificar, recopilar, registrar, depurar y validar novedades. Su aplicación permite preparar información confiable para la posterior liquidación de la nómina conforme con la normativa vigente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo y relación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fuentes y principios del derecho laboral colombiano',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Código Sustantivo del Trabajo y normativa complementaria',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elementos esenciales de la relación laboral',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Contrato verbal, contrato escrito y primacía de la realidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Derechos, obligaciones y soportes de vinculación',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modalidades de contratación y efectos laborales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Contrato de trabajo a término indefinido',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Contrato de trabajo a término fijo y sus prórrogas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Contrato por obra o labor y trabajo ocasional',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Contrato de aprendizaje y modalidades especiales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Prestación de servicios y contrato realidad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elementos laborales que conforman la nómina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Salario y pagos constitutivos y no constitutivos de salario',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modalidades salariales, auxilios y beneficios laborales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Jornada laboral, trabajo suplementario y recargos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Devengado, deducido y valor neto pagado',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Periodo de nómina, bases de liquidación y soportes',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad social, parafiscales y prestaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Sistema de salud: afiliación, aportes y coberturas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sistema pensional: aportes y protección económica',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Sistema de riesgos laborales: coberturas, clases y tarifas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Caja de compensación familiar y aportes parafiscales',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Prestaciones sociales, vacaciones y obligaciones patronales',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Afiliación',
      significado:
        'Procedimiento mediante el cual el trabajador queda vinculado a las entidades que administran los sistemas de salud, pensiones, riesgos laborales y compensación familiar.',
    },
    {
      termino: 'Aporte parafiscal',
      significado:
        'Contribución asumida por el empleador y destinada a financiar la caja de compensación familiar, el SENA y el ICBF, según las condiciones aplicables.',
    },
    {
      termino: 'Contrato de trabajo',
      significado:
        'Acuerdo verbal o escrito mediante el cual una persona presta un servicio personal bajo subordinación y recibe una remuneración.',
    },
    {
      termino: 'Deducción',
      significado:
        'Valor descontado de los pagos del trabajador por concepto de aportes obligatorios, embargos, libranzas u otros descuentos autorizados.',
    },
    {
      termino: 'Devengado',
      significado:
        'Conjunto de valores reconocidos al trabajador durante un periodo, como salario, horas extras, recargos, comisiones, auxilios y bonificaciones.',
    },
    {
      termino: 'Ingreso base de cotización',
      significado:
        'Valor utilizado para calcular los aportes al Sistema de Seguridad Social Integral, de acuerdo con los pagos salariales y las novedades del periodo.',
    },
    {
      termino: 'Novedad de nómina',
      significado:
        'Hecho temporal o permanente que modifica los datos, tiempos, pagos, deducciones o aportes de un trabajador durante un periodo.',
    },
    {
      termino: 'Planilla Integrada de Liquidación de Aportes',
      significado:
        'Mecanismo utilizado para declarar y pagar los aportes a seguridad social y las demás contribuciones administradas mediante la PILA.',
    },
    {
      termino: 'Prestación social',
      significado:
        'Beneficio económico adicional al salario que el empleador reconoce al trabajador, como prima de servicios, cesantías e intereses sobre cesantías.',
    },
    {
      termino: 'Prenómina',
      significado:
        'Liquidación preliminar que permite revisar los devengados, deducciones, aportes, bases y valores netos antes de aprobar la nómina definitiva.',
    },
    {
      termino: 'Relación laboral',
      significado:
        'Vínculo que se configura cuando concurren la prestación personal del servicio, la subordinación y la remuneración.',
    },
    {
      termino: 'Salario',
      significado:
        'Remuneración directa recibida por el trabajador como contraprestación del servicio, independientemente de la denominación otorgada al pago.',
    },
    {
      termino: 'Seguridad social',
      significado:
        'Sistema de protección que cubre contingencias relacionadas con salud, vejez, invalidez, muerte y riesgos derivados del trabajo.',
    },
    {
      termino: 'Soporte de nómina',
      significado:
        'Documento físico o digital que demuestra el origen, la autorización, la fecha y las condiciones de una novedad o concepto liquidado.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de identificar quién registró, revisó, modificó y aprobó la información durante el procesamiento de la nómina.',
    },
  ],
  referencias: [
    {
      referencia: 'Colpensiones. (2016, 14 de mayo). Historia laboral.',
      link: 'https://www.colpensiones.gov.co/preguntas-frecuentes/297/historia-laboral/',
    },
    {
      referencia:
        'Colpensiones. (2026, 22 de enero). ¿Cómo aportar para mi pensión?',
      link: 'https://www.colpensiones.gov.co/educacion/publicaciones/2849/como-aportar-a-pension/',
    },
    {
      referencia: 'Colpensiones. (2026, 20 de mayo). ¿Qué es el RPM?',
      link: 'https://www.colpensiones.gov.co/pensiones/publicaciones/120/que-es-el-rpm/',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1951, 7 de junio). Código Sustantivo del Trabajo.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1963, 1 de febrero). Ley 1 de 1963.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1988, 29 de diciembre). Ley 89 de 1988.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1990, 28 de diciembre). Ley 50 de 1990.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993, 23 de diciembre). Ley 100 de 1993.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008, 16 de julio). Ley 1221 de 2008.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2010, 29 de diciembre). Ley 1429 de 2010.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012, 11 de julio). Ley 1562 de 2012.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016, 7 de julio). Ley 1788 de 2016.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021, 12 de mayo). Ley 2088 de 2021.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021, 15 de julio). Ley 2101 de 2021.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2025, 25 de junio). Ley 2466 de 2025.',
      link: '',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2006, 4 de octubre). Sentencia C-823/06.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema de pensiones y otras prestaciones.',
      link: 'https://www.minsalud.gov.co/Proteccion-Social/RiesgosLaborales/Paginas/sistema-general-pensiones.aspx',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2012, 16 de abril). Circular Externa 018 de 2012. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=71322',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2026, 5 de marzo). Decreto 223 de 2026. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=272856',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1954, 26 de febrero). Decreto 617 de 1954.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1994, 22 de junio). Decreto 1295 de 1994.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 26 de mayo). Decreto 1072 de 2015.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2016, 6 de mayo). Decreto 780 de 2016.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
