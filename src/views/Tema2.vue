<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Plataforma Dirección de Impuestos y Aduanas Nacionales DIAN, liquidación de formularios
    .bloque-texto-a.color-secundario.p-4.p-md-5(data-aos="fade-right")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img33.svg', style="width: 100px").m-auto
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) tiene como propósito coadyuvar a garantizar la seguridad fiscal del Estado colombiano, haciendo uso de sus facultades para proteger el orden público económico nacional, lo anterior, a través de la administración y control de las obligaciones tributarias bajo el cumplimiento que estos lo indican; para este proceso se hace uso de la plataforma digital dispuesta para ello.
    separador.mb-5
    #t_2_1
    .titulo-segundo
      h2 2.1 Concepto
    .row.justify-content-center
      .col-11
        .row.align-items-start
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img34.svg', style="width: 350px").m-auto
          .col-lg-8
            .cajon.color-secundario.p-4.mb-4
              p.mb-0 Es necesario conocer las diferentes plataformas que se utilizan para la presentación de las declaraciones tributarias de carácter nacional. Teniendo en cuenta que esta es la era de las Tecnologías de la Información y Comunicación (TIC), se validará la utilización de estas herramientas, que permiten en tiempo real la elaboración y presentación de impuestos a través de los sistemas informáticos. Para la comprensión de este proceso es necesario tener presente el siguiente concepto:
            p #[b Plataforma digital, según el portal Rankia.co:]
          .col-12.mt-5
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular Son todos aquellos sitios de internet que almacenan información de una empresa, y a través de la cual los usuarios pueden acceder a cuentas personales y detalles sobre la empresa. Las plataformas digitales son ejecutadas por programas o aplicaciones cuyo contenido es ejecutable en determinados sistemas operativos, ya sean contenidos visuales, de texto, audios, videos, simulaciones, etc.
                i.fas.fa-quote-right.d-flex.justify-content-end
              .bloque-texto-d__autor 
                .h5.mb-0 Rankia, 2019
            figure.mt-5
              img(src='@/assets/curso/img35.svg', style="width: 900px").m-auto
            .cajon.color-secundario.p-4.mt-5
              p.mb-0 La DIAN tiene una página web donde se puede encontrar aplicaciones y contenidos que permiten a los usuarios, a través de una interfaz intuitiva, una interacción amigable y fácil de entender con respecto a los servicios que presta. En dicha página web se puede acceder a simuladores que permiten liquidar impuestos, realizar solicitudes como autorizaciones de facturación, modificación de RUT, entre otros.
    separador.mb-5
    #t_2_2
    .titulo-segundo
      h2 2.2 Servicios en línea
    p.mb-5 Apreciados aprendices, en esta ocasión se explorará la página web de la Dirección de Impuestos y Aduanas Nacionales DIAN. La página fue diseñada con el fin de ofrecer diferentes servicios en línea, que permita a los usuarios realizar diferentes trámites sin necesidad de dirigirse a las instalaciones físicas de la entidad; para esto se ingresa a través del siguiente enlace:
    .row.justify-content-center
      .col-11
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Dirección de Impuestos y Aduanas Nacionales DIAN.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.dian.gov.co/" target="_blank")
                    span(style="color:#000000 !important;") Ir
                    i.fas.fa-link(style="color:#000000 !important;")
    p.mb-5 Para apropiar el conocimiento de este proceso es necesario la comprensión del siguiente término:
    .row.align-items-center.p-4.bg-color1.mb-5
      .col-lg-2.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img36.svg', style="width: 150px").m-auto
      .col-lg-10
        p.mb-0 #[b Servicios en línea]: corresponde a aquellos productos que pueden prestar las diferentes compañías, tanto públicas como privadas, a través de internet, como trámites, certificaciones, autorizaciones o licencias, entre otros; accediendo a datos e información de los usuarios, los cuales se realizan de forma inmediata por medio de las aplicaciones informáticas, que en tiempo real permiten el acceso y respuesta al servicio que presta la entidad, minimizando tiempos de ejecución. En Colombia, estos servicios se prestan bajo la estrategia de gobierno en línea desde 2008 (MinTIC, 2020).
    .row.justify-content-center
      .col-lg-10
        SlyderC.mb-5(:datos="datosSlyder")
    .row.p-4.bg-color3.align-items-center.mb-5
      .col-12
        p.mb-5 En el menú de la plataforma digital de la DIAN se encuentran las diferentes opciones de servicios que presta en línea.
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img39.svg', style="width: 350px").m-auto
      .col-lg-8
        .row.align-items-center
          .col-2.d-inline
            figure
              img(src='@/assets/curso/img40.svg', style="width: 100px").m-auto
          .col-10
            p.mb-0 #[b Diligenciar/Presentar]: por medio de esta opción los usuarios de la plataforma pueden acceder a los formularios de los diferentes impuestos nacionales, diligenciarlos y presentarlos.
        hr
        .row.align-items-center
          .col-2.d-inline
            figure
              img(src='@/assets/curso/img41.svg', style="width: 100px").m-auto
          .col-10
            p.mb-0 #[b Numeración de facturación]: por medio de esta opción los usuarios pueden solicitar la autorización o habilitación de la numeración de facturación según obligaciones.
        hr
        .row.align-items-center
          .col-2.d-inline
            figure
              img(src='@/assets/curso/img42.svg', style="width: 100px").m-auto
          .col-10
            p.mb-0 #[b Registro Único Tributario (RUT)]: en esta opción se pueden actualizar (datos básicos, actividades), consultar el RUT e imprimir copia de este.
    .row.justify-content-center
      .col-lg-10
        SlyderC.mb-4(:datos="datosSlyder1")
        .row.mb-4
          .col-10.col-lg-5
            a.anexo.mb-4.mb-lg-0(href="https://agendamientodigiturno.dian.gov.co/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Agendamiento digiturno
        p También, en este espacio se encuentra el enlace directo para inscribirse al Registro Único Tributario (RUT), donde el usuario ingresa a la opción requerida y sigue los pasos que se indican a medida que avanza en la plataforma.
    separador.mb-5
    #t_2_3
    .titulo-segundo
      h2 2.3 Instrucciones
    .row.justify-content-center
      .col-lg-10
        SlyderC(:datos="datosSlyder2")
    separador.mb-5
    #t_2_4
    .titulo-segundo
      h2 2.4 Aplicativos e impuestos
    .row.justify-content-center
      .col-11
        .row.align-items-start
          .col-lg-4.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img47.svg', style="width: 350px").m-auto
          .col-lg-8
            .cajon.color-secundario.p-4
              p.mb-0 Para cada impuesto en que se tenga obligación de declarar, la DIAN ha generado aplicativos para el cargue de la información, lo que facilita el proceso de declaración, de esta forma se realizan búsquedas, diligenciamiento y entrega de la información más fácil.
    separador.mb-5
    #t_2_5
    .titulo-segundo
      h2 2.5 Liquidación impuestos nacionales
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Retención en la Fuente")
        h4 Declaración de Retención en la Fuente
        p Las personas naturales o jurídicas que sean agentes retenedores de renta están en la obligación de presentar la declaración de retención en la fuente, siempre y cuando hubieran practicado retenciones, según lo establece la norma vigente. Se debe aclarar, que si no se realizaron las retenciones, la entidad no tiene la obligación de presentar declaración en ceros, como se establece en el ART 606 del Estatuto Tributario parágrafo 2. La periodicidad de presentación de dicha declaración es mensual y se debe presentar en el formulario 350, según lo establecido por la Dirección de Impuestos y Aduanas Nacionales.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Impuesto sobre las Ventas")
        h4 Declaración de Impuesto sobre las Ventas – IVA
        p Esta declaración debe ser presentada por toda persona jurídica o natural que sea responsables del impuesto a las ventas, incluidos los exportadores, y si no realiza operaciones sometidas al impuesto, no se debe presentar dicha declaración; esto lo establece el ART 601 del estatuto tributario. El periodo gravable del impuesto a las ventas, según el Artículo 600 del E.T, corresponde de forma bimestral, si a 31 de diciembre del año inmediatamente anterior, son iguales o superiores a 92.000 UVT, y es cuatrimestral si es inferior a 92.000 UVT. Es de aclarar, que si la entidad está empezando sus operaciones, el periodo es bimestral; adicional, el formulario dispuesto por la Dirección de Impuestos y Aduanas Nacionales es el Número 300.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Impuesto al Consumo")
        h4 Declaración de Impuesto Nacional al Consumo
        p esta declaración debe ser presentada por toda persona jurídica o natural que sea responsable del impuesto nacional al Consumo, según lo establece el Artículo 512-1 Del estatuto tributario. El periodo gravable del impuesto nacional al consumo, según el Artículo 512-1 del E.T parágrafo 1, corresponde de forma bimestral; para este impuesto no procede un impuesto descontable; adicionalmente, el formulario dispuesto por la Dirección de Impuestos y Aduanas Nacionales es el Número 310.  También se debe tener en cuenta que están excluidos del Impuesto Nacional al Consumo el departamento del Amazonas y el Archipiélago de San Andrés, Providencia y Santa Catalina, con excepción a lo dispuesto en el ART 512-7 del Estatuto Tributario.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Complementarios")
        h4 Declaración de renta y complementarios o de ingresos y patrimonio para personas jurídicas y asimiladas y personas naturales y asimiladas no residentes y sucesiones ilíquidas de causantes no residentes:
        p Esta declaración debe ser presentada por toda persona jurídica, por todos los ingresos susceptibles de incrementar el patrimonio o persona natural o sucesiones ilíquidas no residentes que cumplan los requisitos estipulados en el ART 592 E.T y 1.6.1.13.2.7 del decreto 1625 de 2016, teniendo en cuenta la base de renta líquida gravable que establece tomar los ingresos netos y a estos restarles los costos realizados, imputables cuando sea el caso, posteriormente se le restan las deducciones (gastos) realizadas , con lo cual se obtiene la renta líquida, la cual es la base para la aplicación de la tarifa del impuesto. El periodo gravable del impuesto de Renta y complementarios es anual y el formulario establecido por la Dirección de Impuestos y Aduanas Nacionales es el Número 110.
    p.mb-5 El formulario 350 para Declaración de Retención en la fuente está compuesto por tres (3) partes principales. En esta presentación habrá un enfoque la primera parte, que corresponde a la Información del declarante, donde se encontrarán los siguientes numerales:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Nu0so84PvI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 El formulario 300 para Declaración del Impuesto sobre las Ventas, está compuesto por tres (3) partes principales; en esta presentación habrá un énfasis en la primera parte, que corresponde a Información del Declarante, donde se encuentran los siguientes numerales:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rNQHO71sACo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 El formulario 310 para Declaración Impuesto Nacional al Consumo está dividido en tres (3) partes principales. En esta presentación habrá un énfasis en la primera parte, que corresponde a información del declarante, donde se encuentran los siguientes numerales:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NLDzyouNUWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'En los servicios en línea de la Dirección de Impuestos y Aduanas Nacionales se encuentran los siguientes servicios tributarios y cambiarios en los que las personas naturales o jurídicas que estén inscritas en el RUT pueden crear un usuario, con el cual se tiene acceso a los siguientes servicios: presentación de las diferentes declaraciones nacionales, actualización del RUT, habilitación de la resolución de facturación y cargue de información exógena, entre otros.',
        imagen: require('@/assets/curso/img37.svg'),
      },
      {
        texto:
          'Estimados aprendices, en esta ventana se puede visualizar el ingreso a la plataforma de la DIAN. Si ya se tiene usuario, se ingresa con los datos de la persona natural o jurídica y seguidamente se digita contraseña creada.<br><br>Se debe recordar que si se ingresa como persona jurídica, se debe tener el NIT y la identificación del tercero asociado a la entidad, que necesariamente debe ser el representante legal de la misma o quienes tengan la obligación de firmar las declaraciones. Si es una persona natural, se ingresa haciendo clic en “a nombre propio”. Pero si no se tiene creado usuario, se debe crearlo a través de la opción de “Habilitar Cuenta”.',
        imagen: require('@/assets/curso/img38.svg'),
      },
    ],
    datosSlyder1: [
      {
        texto:
          'Estos servicios se prestan sin necesidad de ir a la oficina física de la Dirección de Impuestos y Aduanas Nacionales. (DIAN, 2020).<br><br>A continuación se encuentra otro servicio en línea que tiene la DIAN: el agendamiento de citas. Allí, por medio de la selección en el calendario, se puede elegir el día y la hora en la cual se asistirá a las oficinas físicas de la DIAN, para realizar trámites que no se pueden hacer virtualmente.',
        imagen: require('@/assets/curso/img43.svg'),
      },
      {
        texto: 'Se puede acceder a través del siguiente enlace:',
        imagen: require('@/assets/curso/img44.svg'),
      },
    ],
    datosSlyder2: [
      {
        texto:
          'A través del portal de la DIAN se observará los instructivos establecidos por la entidad, para el diligenciamiento de los formularios que están disponibles para la presentación de los impuestos, tanto tributarios como aduaneros. Se debe tener presente que un instructivo hace referencia a una guía que permite tener el paso a paso para la correcta elaboración o diligenciamiento de trámites que sean requeridos por cada entidad, en el caso de Dirección de Impuestos y Aduanas Nacionales, como ya se mencionó los formularios de impuestos.',
        imagen: require('@/assets/curso/img45.svg'),
      },
      {
        texto:
          'Al seguir cualquier enlace, se muestra el instructivo y se puede visualizar el formulario correspondiente junto con las explicaciones de cada uno de los renglones, según el requerimiento establecido en cada formato.',
        imagen: require('@/assets/curso/img46.svg'),
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
