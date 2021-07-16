<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/img1.svg', style="width: 450px").m-auto
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p En desarrollo del contenido a continuación se presenta de forma práctica la elaboración y presentación de las declaraciones tributarias correspondientes a impuestos nacionales y municipales, así como, las generalidades acerca de los medios magnéticos nacionales, teniendo en cuenta la definición, aplicación y obligación que tienen las personas naturales y jurídicas para presentar esta obligación, puesto que es el recurso principal que tiene la entidad estatal para validar los movimientos de cada persona y manejar una efectiva política fiscal.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
