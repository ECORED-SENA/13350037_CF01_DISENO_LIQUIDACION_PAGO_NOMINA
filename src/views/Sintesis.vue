<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Diseño, liquidación y pago de nómina
          p.mb-0 
            | Síntesis:
            | fundamentos laborales y novedades de nómina
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre fundamentos laborales y novedades de nómina, organizado en cinco categorías: marco normativo, contratación laboral, elementos de nómina, seguridad social y novedades, con conceptos clave sobre derechos laborales, tipos de contrato, pagos y deducciones, aportes y validación de novedades.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
