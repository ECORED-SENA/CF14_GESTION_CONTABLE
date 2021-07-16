<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Plataforma Secretaría de Hacienda
    .bloque-texto-a.color-secundario.p-4.p-md-5(data-aos="fade-right")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img48.svg', style="width: 100px").m-auto
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p La Secretaría de Hacienda tiene la misión de gestionar los recursos y distribuirlos entre los sectores de la Administración Distrital, por lo tanto, para esta entidad y por su carácter es de suma importancia el uso de plataforma digital, la cual, le posibilita propiciar espacios de organización, agendamiento de citas y a su vez el cumplimiento de gestiones y procesos para los ciudadanos.
    separador.mb-5
    #t_3_1
    .titulo-segundo
      h2 3.1 Concepto
    .row.justify-content-center
      .col-11
        .row.p-4.align-items-center.bg-color1.mb-5
          .col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img49.svg', style="width: 350px").m-auto
          .col-lg-8
            p La plataforma que utiliza la Secretaría de Hacienda de Bogotá (SHD) tiene habilitada en su página web el aplicativo denominado #[b #[u Oficina Virtual]], que es la herramienta utilizada para la elaboración y presentación de los impuestos municipales, a través de los sistemas informáticos. Para la comprensión de este proceso es necesario tener presente el siguiente concepto:
            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-5 #[b Plataforma digital]: “Es un lugar de Internet, portal o cibersitio que sirve para almacenar diferentes tipos de información, tanto personal como a nivel de negocios”
                p.mb-0 es.LinkFang.org, 2021
                i.fas.fa-quote-right.d-flex.justify-content-end
        p Estas plataformas funcionan con determinados tipos de sistemas operativos y ejecutan programas o aplicaciones con diferentes contenidos, como pueden ser juegos, imágenes, texto, cálculos, simulaciones y vídeo, entre otros, que se pueden considerar agrupados en una colección de herramientas y servicios que una organización utiliza para desarrollar una estrategia digital.
    separador.mb-5
    #t_3_2
    .titulo-segundo
      h2 3.2 Servicios en línea
    .row.justify-content-center
      .col-lg-10
        SlyderC.mb-5(:datos="datosSlyder")
    .row.p-4.align-items-center.bg-color3.mb-5
      .col-lg-3
        p #[b Los servicios en línea que están disponibles en la SHD son:]
      .col-lg-9
        .row.align-items-center
          .col-2.d-inline
            figure
              img(src='@/assets/curso/img1.png', style="width: 350px").m-auto
          .col-10
            p.mb-0 #[b Predial]: en esta opción, la SHD genera el impuesto Predial según si el Contribuyente tiene la obligación, como lo establece el hecho generador que corresponde a la posesión de un bien inmueble en el municipio de Bogotá.
        .row.align-items-center
          .col-2.d-inline
            figure
              img(src='@/assets/curso/img2.png', style="width: 350px").m-auto
          .col-10
            p.mb-0 #[b ICA, RETEICA]: en este botón se pueden validar los trámites correspondientes al diligenciamiento, presentación y pago de la Declaración del Impuesto de Industria, Comercio, Avisos y Tableros, así como también la Declaración de Retención de Industria y Comercio.
        .row.align-items-center
          .col-2.d-inline
            figure
              img(src='@/assets/curso/img3.png', style="width: 350px").m-auto
          .col-10
            p.mb-0 #[b Medios magnéticos]: en esta opción el contribuyente que por ley tenga la obligación de presentar los informes de exógena distrital, debe cargar dicha información en archivo plano por CSV (Delimitado por comas).
        .row.align-items-center
          .col-2.d-inline
            figure
              img(src='@/assets/curso/img4.png', style="width: 350px").m-auto
          .col-10
            p.mb-0 #[b RIT]: por este enlace se pueden validar los trámites de RIT, como actualización de datos básicos, inscripción, cambio o eliminación de las actividades correspondiente a los ingresos que obtiene el contribuyente asociado al CIIU.
        .row.align-items-center
          .col-2.d-inline
            figure
              img(src='@/assets/curso/img5.png', style="width: 350px").m-auto
          .col-10
            p.mb-0 #[b Vehiculos]: en esta opción, la SHD genera el impuesto de vehículo según si el Contribuyente tiene la obligación, como lo establece el hecho generador que corresponde a la posesión de un vehículo inscrito en el municipio de Bogotá.
    .row.justify-content-center
      .col-11
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Secretaría de Hacienda Distrital (SHD)
                  p.text-small Se debe recordar la necesidad de explorar la página de la SHD. Para ello se puede ingresar a través del siguiente enlace.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.shd.gov.co/shd/taxonomy/term/2461" target="_blank")
                    span(style="color:#000000 !important;") Descargar
                    i.fas.fa-link(style="color:#000000 !important;")
    separador.mb-5
    #t_3_3
    .titulo-segundo
      h2 3.3 Formularios
    p.mb-5 Por medio de la Resolución 4056 del 1 de diciembre de 2017, el Ministerio de Hacienda y Crédito Público estableció un formato Único para presentar la declaración y pago del Impuesto de Industria y Comercio, Avisos y Tableros, con el propósito de que todos los municipios manejen el mismo formato, teniendo presente los diferentes periodos de declaración que manejan los municipios, ya que, el estatuto tributario por cada municipio es autónomo, por ello se encuentra que la mayoría de municipios manejan una periodicidad ANUAL, mientras en Bogotá se maneja una periodicidad ANUAL O BIMESTRAL, dependiendo de si a diciembre 31 el impuesto a cargo superó 391 UVT, es bimestral, de lo contrario se maneja anual.
    .row.justify-content-center
      .col-lg-11
        .row.p-4.align-items-center.justify-content-center.bg-color2.rounded.mb-5
          .col-2
            figure
              img(src='@/assets/curso/img52.svg', style="width: 150px").m-auto
          .col-8
            p #[b El formulario de Impuesto de Industria y Comercio, Avisos y Tableros está compuesto por:]
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/prueba.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
        figure.mb-5
          img(src='@/assets/curso/img53.svg', style="width: 800px").m-auto
        .tarjeta-numerada.color-primario.p-5.mb-5
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0 Una primera parte con la Información del Contribuyente: nombres y apellidos o Razón social; dirección de identificación, municipio o distrito, teléfono, correo, departamento, número de establecimientos.
        hr.mb-5
        figure.mb-5
          img(src='@/assets/curso/img54.svg', style="width: 800px").m-auto
        .tarjeta-numerada.color-primario.p-5.mb-5
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0 Una segunda parte, identificando la Base gravable, donde se puede validar total de ingresos operacionales y no operacionales de la entidad, allí se restan los ingresos fuera del municipio y las devoluciones, rebajas, descuentos; también los ingresos por exportaciones, venta de activos fijos, actividades excluidas o no sujetas e ingresos por actividades exentas en el municipio, según acuerdos de cada municipio.
        hr.mb-5
        figure.mb-5
          img(src='@/assets/curso/img55.svg', style="width: 800px").m-auto
        .tarjeta-numerada.color-primario.p-5.mb-5
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0 Una tercera parte con la discriminación de las actividades que realiza el contribuyente, directamente relacionado con el CIIU, la tarifa que corresponda (se debe tener en cuenta que la tarifa cambia según el estatuto tributario de cada municipio y la tarifa se aplica por mil), y el impuesto, resultado de tomar el ingreso gravado y multiplicarlo por la tarifa. Además, la información reportada debe estar diligenciada aproximado al mil más cercano.
        hr.mb-5
        figure.mb-5
          img(src='@/assets/curso/img56.svg', style="width: 800px").m-auto
        .tarjeta-numerada.color-primario.p-5.mb-5
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0 Una cuarta parte con la liquidación privada, calculando el impuesto de Industria y Comercio correspondiente; adicionalmente, si la empresa maneja avisos y tableros se calcula también este impuesto tomando el de Industria y Comercio, multiplicando por el 15% y aproximando el valor al mil más cercano. Además, se adicionan unidades comerciales, si es una entidad del sector financiero y sobretasa bomberil y de seguridad, según la aplicación en cada municipio y la normatividad de cada uno. Posteriormente se le restan los valores de exención o exoneración, las retenciones de Ica que le practicaron o se auto practicó, según la entidad; también se resta el anticipo de liquidación del año anterior, si aplica, y se suma el anticipo del año siguiente, si aplica.
        p Además, se suman sanciones si el contribuyente incurrió en alguna falta que dé lugar a la sanción, teniendo presente que la sanción mínima en Bogotá corresponde a 7 UVT.
        p.mb-5 Por último, se presenta un descuento por pronto pago, si el municipio lo establece; también los intereses de mora, si la declaración se presenta extemporánea, el contribuyente puede hacer un aporte voluntario.  
        hr.mb-5
        figure.mb-5
          img(src='@/assets/curso/img57.svg', style="width: 800px").m-auto
        .tarjeta-numerada.color-primario.p-5.mb-5
          .tarjeta-numerada__numero
            .h2 5
          p.mb-0 Una quinta parte con las firmas de las personas obligadas, siendo este el contribuyente y el contador o revisor fiscal, según la obligación, seguido del número de identificación y tarjeta profesional para contador o revisor fiscal.
        hr.mb-5
        p.mb-5 Es de aclarar que la Secretaría de Hacienda Distrital SHD, no acepta declaraciones litográficas y la elaboración, firma y presentación de la declaración de ICA debe realizarse virtualmente, por medio de la oficina virtual del aplicativo de la SHD.
        .row.p-4.align-items-center.justify-content-center.bg-color2.rounded.mb-5
          .col-2
            figure
              img(src='@/assets/curso/img52.svg', style="width: 150px").m-auto
          .col-8
            p #[b Formulario Retención de ICA en Bogotá: se identifica con el código 131, donde se declaran las retenciones que practicó el contribuyente, siempre y cuando sea agente retenedor de Ica.]
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/prueba.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
        figure.mb-5
          img(src='@/assets/curso/img58.svg', style="width: 800px").m-auto
        .tarjeta-numerada.color-primario.p-5.mb-5
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0 En este formulario se identifica la información del contribuyente: nombres y apellidos o Razón social; dirección de identificación, municipio o distrito, teléfono.
        hr.mb-5
        figure.mb-5
          img(src='@/assets/curso/img59.svg', style="width: 800px").m-auto
        .tarjeta-numerada.color-primario.p-5.mb-5
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0 Una segunda parte con la liquidación del impuesto, identificando la base de retención aproximado a miles, otro renglón con el valor del impuesto aproximado a miles, se le resta el valor de impuesto si hay alguna devolución, se suma un valor de sanción en el caso que aplique, teniendo presente que la sanción mínima en Bogotá por la declaración de retención de Ica corresponde a 10 UVT.
        hr.mb-5
        figure.mb-5
          img(src='@/assets/curso/img60.svg', style="width: 800px").m-auto
        .tarjeta-numerada.color-primario.p-5.mb-5
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0 Una última y tercera parte con las firmas de las personas obligadas, siendo este el contribuyente y el contador o revisor fiscal, según la obligación del contribuyente, seguido del número de identificación y tarjeta profesional para Contador o Revisor fiscal.
        p Es de aclarar que la Secretaría de Hacienda Distrital SHD, no acepta declaraciones litográficas y la elaboración, firma y presentación de la declaración de Retención de ICA debe realizarse virtualmente, por medio de la oficina Virtual del aplicativo de la SHD.
        p Para ampliar el conocimiento sobre este tema, se puede revisar la Resolución 4056 del 1 de diciembre de 2017 (Legis, 2020, 30 de octubre).
    separador.mb-5
    #t_3_4
    .titulo-segundo
      h2 3.4 Liquidación impuestos territoriales
    .row.align-items-center.p-4.bg-color4.mb-5
      .col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img61.svg', style="width: 350px").m-auto
      .col-10
        p.mb-0 La liquidación de impuestos territoriales es una obligación que tienen las compañías si realizan actividades que le generen ingresos en algún municipio, según lo indica el hecho generador de dichos impuestos. En Colombia, las declaraciones principales de carácter territorial corresponden a Declaración de Industria, Comercio, Avisos y tableros, y Declaración de Retención de Industria, Comercio, Avisos y tableros.
    .row.mb-5
      .col-lg-8
        p.mb-5 #[b Declaración de Industria y Comercio, Avisos y Tableros]: las personas naturales o jurídicas del impuesto de industria y comercio que realicen cualquier actividad industrial, comercial o de servicios en la jurisdicción del Distrito Capital de Bogotá, directa o indirectamente, de forma permanente u ocasional, con o sin establecimiento de comercio, que le genere un incremento de ingreso y aumento de su patrimonio. Dicha declaración tiene una periodicidad en Bogotá D.C., dependiendo si el año anterior generó un Impuesto a declarar por un valor igual o superior a 391 UVT; se presenta anual, y si es inferior a 391 UVT es de forma bimestral; adicionalmente, la información debe presentarse aproximado a miles. La sanción mínima para este impuesto es de 7 UVT.
        p Con el fin de complementar la información del Impuesto de Industria y Comercio, Avisos y Tableros, se invita a explorar en el siguiente enlace.
        .row
          .col-6
            a.anexo.mb-4.mb-lg-0(href="https://www.shd.gov.co/shd/industria-y-comercio" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Agendamiento digiturno
      .col-lg-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img62.svg', style="width: 450px").m-auto
    hr.mb-5
    .row
      .col-lg-8
        p.mb-5 #[b Declaración de retención de Industria, Comercio, Avisos y Tableros]: esta declaración debe ser presentada por toda persona jurídica o natural que sea agente retenedor del impuesto de Industria y Comercio por las actividades comerciales, industriales y de servicios prestados en el municipio de Bogotá D.C. La periodicidad de la declaración de retención de industria y comercio es de forma bimestral, Adicionalmente, la información debe presentarse aproximado a miles. La sanción mínima para este impuesto es de 10 UVT, el formulario utilizado es el número 131.
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img63.svg', style="width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Los diferentes servicios en línea que presta la Secretaría de Hacienda Distrital (SHD), teniendo presente que, para acceder a los mismos, los contribuyentes deben estar inscritos en el RIT, que es el Registro de Identificación Tributaria, registrar la creación de un usuario y clave, ingresando a cualquier servicio y seleccionando la opción de obtener.',
        imagen: require('@/assets/curso/img50.svg'),
      },
      {
        texto:
          'Esta ventana de la plataforma digital de la SHD permite crear los usuarios con la información básica de los contribuyentes y allí, con su documento de identidad, generar una contraseña para poder acceder a los servicios que ofrece el aplicativo de la secretaría.contraseña.',
        imagen: require('@/assets/curso/img51.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
