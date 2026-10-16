<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Control de recursos financieros para economías populares y campesinas
          p.mb-0 
            | Síntesis:
            | registro y control de operaciones financieras
      p.mt-5 La síntesis integra los conceptos principales desarrollados en el componente formativo:

      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual parte de Registro y control de operaciones financieras, que se estructura en cinco temas. Los fundamentos contables de la actividad económica comprenden la actividad económica y las características de las economías populares y campesinas, la finalidad de la información contable y financiera, los principios básicos de contabilidad y la contabilidad simplificada, el control de recursos y la organización de la información económica del negocio. Las cuentas y estructura básica del registro integran el concepto y función de las cuentas; los activos, pasivos y patrimonio; los ingresos, costos y gastos; y la naturaleza, movimiento y clasificación de las cuentas según las operaciones del negocio. El registro de compras, ventas y movimientos financieros comprende las compras y ventas de contado y a crédito, los ingresos, egresos, cuentas por cobrar y cuentas por pagar, así como el registro manual y mediante herramientas tecnológicas. Los inventarios e impuestos en las operaciones comprenden la importancia de los inventarios en el control financiero, los sistemas de inventario periódico y permanente, las entradas, salidas y control de existencias y los impuestos asociados con las operaciones comerciales. Finalmente, los soportes y comprobantes de las transacciones comprenden los soportes de las operaciones económicas y los comprobantes contables y no contables, la relación entre soporte, transacción y registro, la factura electrónica y el documento equivalente, y la organización y control de los comprobantes.")
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
