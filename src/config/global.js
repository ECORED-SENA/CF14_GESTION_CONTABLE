export default {
  global: {
    componenteFormativo: 'Declaraciones tributarias',
    descripcionCurso:
      'Se desarrolla de forma práctica la elaboración y presentación de las declaraciones tributarias correspondientes a impuestos nacionales y municipales. Además, se identifican las herramientas tecnológicas que utiliza el Estado para el recaudo de los impuestos, teniendo en cuenta que dicho recaudo es la fuente principal de ingresos para cubrir el gasto público y la inversión en un país. Adicionalmente, se analiza la normatividad aplicable y las características de cada declaración con el fin de conocer la periodicidad, los formularios establecidos y la obligación de cada una.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estatuto Tributario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normatividad tributaria',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Calendario tributario',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Evasión de impuestos y elusión: definición y tipos de evasión',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Mecanismos para evitar la elusión tributaria',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Sanción: concepto, clases, liquidación',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Plataforma Dirección de Impuestos y Aduanas Nacionales DIAN, liquidación de formularios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Servicios en línea',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Instrucciones',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Aplicativos e impuestos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Liquidación impuestos nacionales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plataforma Secretaría de Hacienda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Servicios en línea',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Formularios',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Liquidación impuestos territoriales',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Información exógena',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Bedoya O. H., & Rua W. (2016). El concepto de evasión y elusión en términos de la Corte Constitucional, el Concejo de Estado y la Administración de Impuestos y Aduanas Nacionales. Contaduría Universidad De Antioquia, (69), 69-97.',
      link: 'https://revistas.udea.edu.co/index.php/cont/article/view/328431',
    },
    {
      referencia: 'DIAN. (2020). Resolución 000027.',
      link:
        'https://www.dian.gov.co/normatividad/Normatividad/Resoluci%c3%b3n%20000027%20de%2025-03-2020.pdf',
    },
    {
      referencia: 'DIAN. (2020a, 20 de octubre).',
      link: 'https://muisca.dian.gov.co/',
    },
    {
      referencia:
        'DIAN. (2020b, 30 de octubre). Formulario 350. www.dian.gov.co',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2020/Formulario_350_2020.pdf',
    },
    {
      referencia:
        'DIAN. (2020c, 30 de octubre). Formulario 300.  www.dian.gov.co',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2020/Formulario_300_2020.pdf',
    },
    {
      referencia:
        'DIAN. (2020d, 30 de octubre). Formulario 310. www.dian.gov.co',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2019/Formulario_310_2019.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2004). Modelo Único de Ingresos, Servicio y Control Automatizado (MUISCA), Bogotá. Especial Información Exógena tributaria a la DIAN por el año gravable 2011.',
      link:
        'https://actualicese.com/especial-informacion-exogena-tributaria-a-la-dian-por-el-ano-gravable-2011-primera-parte/',
    },
    {
      referencia:
        'Herrera, L. Y., & Hernández, C. P. (2016). Determinación de las principales sanciones relacionadas con las declaraciones tributarias. Repositorio UCC.',
      link: 'http://hdl.handle.net/20.500.12494/1713',
    },
    {
      referencia:
        'Patiño, R. A., Parra Jiménez, O. D., & León Mesa, F. Y. (2016). Información exógena y su impacto sobre la evasión en Colombia (2001 - 2009). Revista Activos, 8(15).',
      link: 'https://doi.org/10.15332/s0124-5805.2010.0015.03',
    },
    {
      referencia: 'Es.linkfang.org. 2021. Plataforma digital.',
      link: 'https://es.linkfang.org/wiki/Plataforma_digital',
    },
    {
      referencia:
        'Martínez, O. H. B., & Rua, W. (2016). El concepto de evasión y elusión en términos de la Corte Constitucional, el Concejo de Estado y la Administración de Impuestos y Aduanas Nacionales. Revista de contaduría Universidad de Antioquia, (69), 69-97.',
    },
    {
      referencia:
        'MinTIC. (2020, 7 de septiembre). Gobierno en Línea. Mintic.gov.co.',
      link:
        'https://www.mintic.gov.co/portal/inicio/5306:Gobierno-en-L-nea-GEL',
    },
    {
      referencia:
        'Rankia (2019). ¿Qué son las plataformas digitales y para qué sirven?',
      link:
        'https://www.rankia.co/blog/analisis-colcap/4317884-que-son-plataformas-digitales-para-sirven',
    },
    {
      referencia:
        'Secretaría del Senado. (2020, 15 de octubre) Estatuto Tributario.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html',
    },
    {
      referencia:
        'Secretaría Distrital de Hacienda. (2020, 30 de octubre). Oficina virtual. www.shd.gov.co.',
      link: 'https://www.shd.gov.co/shd/taxonomy/term/2461',
    },
  ],
  glosario: [
    {
      termino: 'Evasión tributaria',
      significado:
        'es cuando se omite un ingreso o se le da más valor del real a un ítem deducible para reducir el pago de una obligación, este es fácilmente evidenciable por la administración.',
    },
    {
      termino: 'Elusión tributaria',
      significado:
        'es no crear la obligación tributaria, valiéndose de vacíos legales para volverse casi indetectable. Al no generar la obligación tributaria, la administración no tiene conocimiento del incumplimiento.',
    },
    {
      termino: 'Información exógena',
      significado:
        'es la información que deben presentar las personas naturales y jurídicas ante la entidad de administración de impuestos DIAN, en donde reportan a los terceros con los cuales tuvieron algún tipo de relación comercial.',
    },
    {
      termino: 'Impuestos',
      significado:
        'son los tributos que las personas naturales y jurídicas deben pagar al estado para costear las necesidades colectivas.',
    },
    {
      termino: 'Sanción',
      significado:
        'es el castigo dado a una persona natural o jurídica por el incumplimiento de alguna norma.',
    },
    {
      termino: 'Unidad de Valor Tributario',
      significado:
        'la Unidad de Valor Tributario (UVT) es una unidad referencial que representa un valor en pesos y es actualizado anualmente por la DIAN según la inflación del año.',
    },
    {
      termino: 'Contribuyente',
      significado:
        'es toda persona natural o jurídica con obligaciones y derechos frente a un ente público que se traduce en tributos, y está obligada a realizar el pago de estos, para poder financiar al Estado, según lo establece la ley.',
    },
  ],
  complementario: [
    {
      texto: 'DIAN, (2020). Calendario tributario.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/Calendarios/Calendario_Tributario_2020.pdf',
    },
    {
      texto: 'DIAN, (2020), Resolución 000070 /2019.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/normatividad/Normatividad/Resoluci%c3%b3n%20000070%20de%2005-11-2019.pdf',
    },
    {
      texto: 'DIAN, (2020). Resolución 000027 /2020.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/normatividad/Normatividad/Resoluci%c3%b3n%20000027%20de%2025-03-2020.pdf',
    },
    {
      texto: 'DIAN, (2020). Prevalidadores de información exógena.',
      tipo: 'Página web',
      link:
        'https://www.dian.gov.co/impuestos/sociedades/ExogenaTributaria/Prevalidadores/Paginas/default.aspx',
    },
    {
      texto:
        'Ministerio de Hacienda y Crédito Público, (2017). Resolución 4056 del 1 de diciembre de 2017.',
      tipo: 'PDF',
      link: '/downloads/Anexo3.pdf',
    },
    {
      texto:
        'Secretaría de Hacienda Distrital, (2014), Resolución DDI-094892 del 23 de diciembre de 2014.',
      tipo: 'PDF',
      link: '/downloads/Anexo4.pdf',
    },
    {
      texto: 'DIAN, (2020). Formulario 350.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2020/Formulario_350_2020.pdf',
    },
    {
      texto: 'DIAN, (2020). Formulario 300.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2020/Formulario_300_2020.pdf',
    },
    {
      texto: 'DIAN, (2019). Formulario 310.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2019/Formulario_310_2019.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Yolima Gómez Contreras',
        cargo: 'Instructora técnica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Gabriel Leonardo Cárdenas Caicedo',
        cargo: 'Instructor técnico',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseño instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucia Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
