<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") La gestión de la nómina comienza con la comprensión de las normas que regulan las relaciones entre empleadores y trabajadores. El Código Sustantivo del Trabajo establece que la prestación personal del servicio, la subordinación continuada y la remuneración constituyen los elementos esenciales del contrato laboral, independientemente del nombre asignado por las partes. Reconocer estas condiciones permite diferenciar una vinculación laboral de otras formas de contratación y establecer los derechos y obligaciones que deben reflejarse en la nómina. (Código Sustantivo de Trabajo, 1951)
      .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
        .col-lg-7.d-flex.flex-column.justify-content-between
          .bg-color-2.p-4.mb-4
            p La relación laboral origina pagos salariales, prestaciones sociales y afiliaciones destinadas a proteger al trabajador y a su familia. La seguridad social comprende mecanismos de atención en salud, protección económica frente a la vejez, invalidez o muerte, y cobertura ante accidentes de trabajo y enfermedades laborales. Su adecuada gestión requiere identificar las responsabilidades del empleador y del trabajador, las bases de cotización y las novedades que pueden modificar los aportes durante cada periodo. (Ministerio de Salud y Protección Social)
          .row.align-items-center(data-aos="fade-left")
            .col
              p.mb-0 El procesamiento de la nómina también depende de la calidad de la información recibida sobre ingresos, retiros, variaciones salariales, horas adicionales, incapacidades, licencias, vacaciones, ausencias y deducciones. Por ello, este componente formativo orienta la identificación de los elementos laborales, la recopilación y el registro de novedades, así como su depuración, cotejo y validación. Estos fundamentos permiten preparar una prenómina confiable y proporcionar datos consistentes para las etapas posteriores de liquidación, pago y contabilización.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/intro/img1.png', alt='', style="object-fit: cover;")




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
