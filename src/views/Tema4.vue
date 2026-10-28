<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Seguridad social, parafiscales y prestaciones
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img1.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-8.p-2 El <b>Sistema de Seguridad Social Integral</b> protege al trabajador y a su familia frente a situaciones que pueden afectar su salud, su capacidad laboral y sus ingresos. Está conformado principalmente por los sistemas de salud, pensiones y riesgos laborales, cuyas coberturas responden a contingencias diferentes. La gestión de nómina debe identificar la administradora, el ingreso base de cotización, el porcentaje aplicable y la parte que corresponde al empleador y al trabajador (Ley 100 de 1993).
          p Además de los aportes a seguridad social, el empleador debe revisar las contribuciones destinadas a las cajas de compensación familiar, el SENA y el ICBF, así como las prestaciones sociales y vacaciones originadas por la relación laboral. Estos valores deben liquidarse, registrarse y pagarse oportunamente para garantizar el cumplimiento de las obligaciones derivadas de la vinculación laboral.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Sistema de salud: afiliación, aportes y coberturas
      p(data-aos="fade-left") El Sistema General de Seguridad Social en Salud brinda al trabajador y a sus beneficiarios atención para la promoción de la salud, prevención de enfermedades, diagnóstico, tratamiento, rehabilitación y demás servicios incluidos en el plan de beneficios. También reconoce prestaciones económicas a los afiliados cotizantes, como incapacidades de origen común y licencias de maternidad, paternidad y parentales, cuando se cumplen los requisitos establecidos. El empleador debe afiliar al trabajador desde el inicio de la relación laboral, incluso cuando el contrato sea verbal o temporal, y reportar oportunamente los ingresos, retiros y demás novedades (Ley 100 de 1993; Decreto 780 de 2016).
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img2.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-4.p-3 Para los trabajadores dependientes, la cotización general corresponde al 12,5 % del <b>ingreso base de cotización:</b> el empleador asume el <b>8,5 %</b> y descuenta al trabajador el <b>4 %.</b> No obstante, determinados empleadores pueden estar exonerados de la parte patronal en salud respecto de trabajadores que devenguen menos de diez salarios mínimos, siempre que cumplan las condiciones del artículo 114-1 del <b>Estatuto Tributario</b>; esta exoneración no elimina el aporte del trabajador. Por ello, antes de liquidar la nómina deben revisarse la naturaleza tributaria del empleador y la situación de cada trabajador.
          p Los principales aspectos relacionados con la afiliación, las coberturas y los aportes al sistema de salud pueden organizarse como recurso interactivo:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Afiliación del trabajador
                p Debe realizarse desde el inicio de la relación laboral en la EPS elegida por el trabajador. En la nómina permite registrar la entidad administradora y reportar el ingreso mediante la PILA.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Afiliado cotizante
                p Corresponde al trabajador por quien se realizan aportes al régimen contributivo. Deben registrarse su ingreso base de cotización y la parte del aporte que se descuenta en la nómina.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Beneficiarios
                p Pueden incluir al cónyuge o compañero permanente, hijos y otros integrantes que cumplan los requisitos establecidos. Su inclusión en el núcleo familiar no genera una cotización adicional por cada beneficiario.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Servicios asistenciales
                p Comprenden promoción, prevención, diagnóstico, tratamiento, rehabilitación y atención de la enfermedad común. No corresponden a un pago directo de nómina, pero dependen de la afiliación activa del trabajador.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Incapacidad de origen común
                p Protege al trabajador cuando una enfermedad o accidente no laboral le impide desarrollar temporalmente sus funciones. La novedad debe registrarse con los días correspondientes y la entidad responsable del reconocimiento económico.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Licencias asociadas a la maternidad y paternidad
                p Reconocen el tiempo y la prestación económica en las condiciones establecidas legalmente. Deben reportarse en la nómina y en la PILA con el soporte expedido o validado por la EPS.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cotización total
                p Corresponde, de manera general, al 12,5 % del ingreso base de cotización. Este porcentaje se distribuye entre el empleador y el trabajador de acuerdo con las reglas aplicables.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aporte general del empleador
                p Corresponde al 8,5 % del ingreso base de cotización, salvo que resulte aplicable una exoneración legal. Se reconoce como aporte patronal y no se descuenta del salario.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aporte del trabajador
                p Corresponde al 4 % del ingreso base de cotización. Se registra como una deducción obligatoria de la nómina.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_10.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reporte de novedades
                p Comprende ingresos, retiros, cambios salariales, incapacidades, licencias y demás variaciones. Estas novedades pueden modificar los días cotizados, el ingreso base o la información registrada en la planilla.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_11.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Accidente o enfermedad laboral
                p No corresponde al origen común cubierto por el sistema de salud. El evento debe analizarse y reportarse ante la administradora de riesgos laborales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_12.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Falta de afiliación o pago
                p Puede trasladar al empleador la responsabilidad por los servicios y prestaciones que el sistema no reconozca. Esta situación genera riesgos económicos, laborales y administrativos para la organización.
      //- Fin Slideshow
      p(data-aos="fade-left") La identificación adecuada de estos elementos permite relacionar la afiliación con las novedades y los valores que deben registrarse durante cada periodo de nómina.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada a la producción de contenidos digitales vincula a una editora mediante contrato laboral con un salario mensual de $2.800.000. Antes de procesar la nómina, registra la EPS elegida por la trabajadora y confirma que la afiliación se encuentre activa. Para fines didácticos, se asume que el empleador no está cobijado por la exoneración del aporte patronal en salud.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 9.
                  span Cálculo del aporte mensual al sistema de salud
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Concepto
                        th(style="width: 25%") Base de cotización
                        th(style="width: 20%") Porcentaje
                        th(style="width: 25%") Valor
                    tbody
                      tr
                        td Ingreso base de cotización
                        td $2.800.000
                        td —
                        td $2.800.000
                      tr
                        td Aporte del empleador
                        td $2.800.000
                        td 8,5 %
                        td $238.000
                      tr
                        td Aporte de la trabajadora
                        td $2.800.000
                        td 4 %
                        td $112.000
                      tr
                        td.fw-bold Cotización total
                        td.fw-bold $2.800.000
                        td.fw-bold 12,5 %
                        td.fw-bold $350.000
            //- FinTabla
            .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img3.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-3 El aporte descontado a la trabajadora se calcula así:
                <br><br>
                p.bg-color-6.p-3.fw-bold $2.800.000 × 4 % = $112.000
                <br><br>
                p.mb-3 El aporte asumido por el empleador corresponde a:
                <br><br>
                p.bg-color-6.p-3.fw-bold $2.800.000 × 8,5 % = $238.000
                <br><br>
                p.mb-3 La suma de ambos valores permite determinar la cotización total:
                <br><br>
                p.bg-color-6.p-3.fw-bold $112.000 + $238.000 = $350.000
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-4.h-100.d-flex.align-items-center
            p.mb-0 La empresa debe registrar los <b>$112.000</b> como una deducción del devengado y reconocer separadamente los <b>$238.000</b> como aporte patronal. Posteriormente, ambos valores se reportan y pagan mediante la <b>Planilla Integrada de Liquidación de Aportes (PILA).</b>
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid(src="@/assets/curso/temas/t4/img4.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-3(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 De esta forma, la afiliación y el pago oportuno permiten que el trabajador y sus beneficiarios accedan a los servicios y prestaciones correspondientes. La identificación del ingreso base, los porcentajes y las novedades proporcionan la información necesaria para diferenciar esta cobertura de la protección económica del sistema pensional.
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Sistema pensional: aportes y protección económica
      p(data-aos="fade-left") El <b>Sistema General de Pensiones</b> busca proteger al trabajador y a su familia frente a las contingencias de vejez, invalidez y muerte de origen común. La pensión de vejez proporciona ingresos cuando se cumplen los requisitos legales; la pensión de invalidez protege ante una pérdida de capacidad laboral de origen común; y la pensión de sobrevivientes ampara a los beneficiarios cuando fallece el afiliado o pensionado. Estas coberturas no deben confundirse con las incapacidades temporales por enfermedad común, atendidas por el sistema de salud, ni con los accidentes y enfermedades laborales, cuya protección corresponde a la ARL (Ley 100 de 1993; Colpensiones, 2026).
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-3.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t4/img5.png", data-aos="zoom-in", style="width: 380px;")
        .col-lg-6.mb-4.mb-lg-0
          .d-flex.flex-column.justify-content-center
            p.mb-3.bg-color-8.p-3 Para un trabajador dependiente, la cotización general a pensión corresponde al <b>16 % del ingreso base de cotización:</b> el empleador asume el 12 % y descuenta al trabajador el <b>4 %</b>. El empleador debe registrar las novedades de ingreso, retiro y variación salarial, pagar los aportes mediante la PILA y revisar su correspondencia con la historia laboral. Los afiliados con ingresos iguales o superiores a cuatro salarios mínimos también deben aportar el porcentaje adicional destinado al <b>Fondo de Solidaridad Pensional</b> que corresponda según la normativa aplicable (Colpensiones, 2026).
            p.mb-0 El sistema pensional protege al trabajador y a su familia frente a contingencias de origen común y reconoce distintas prestaciones económicas según las condiciones legales aplicables:
        .col-lg-3
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t4/img6.png", data-aos="zoom-in", style="width: 250px;")
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Finalidad del sistema
                p Protege frente a la vejez, la invalidez y la muerte de origen común. Esta protección exige afiliar al trabajador y realizar las cotizaciones durante la relación laboral.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pensión de vejez
                p Reconoce una prestación económica cuando se cumplen los requisitos de edad, semanas o capital, según el régimen aplicable. Los periodos y valores cotizados deben registrarse correctamente en la historia laboral.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pensión de invalidez
                p Protege al afiliado que presenta una pérdida de capacidad laboral de origen común y cumple los requisitos legales. Su reconocimiento requiere que los aportes y registros de los periodos cotizados sean consistentes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pensión de sobrevivientes
                p Protege a los beneficiarios del afiliado o pensionado fallecido cuando cumplen las condiciones legales. La afiliación y los aportes contribuyen a garantizar la protección económica de la familia.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Origen de la contingencia
                p Permite diferenciar los eventos de origen común de los accidentes y enfermedades laborales. Esta clasificación determina si la protección corresponde al sistema pensional, de salud o de riesgos laborales.
      //- Fin Slideshow
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img7.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-8.p-4 La identificación de la contingencia y de la prestación correspondiente permite diferenciar el alcance de la protección pensional frente a otros componentes de la seguridad social.
          p La gestión operativa del sistema pensional exige controlar la afiliación, la base de cotización, los porcentajes, los aportes adicionales y los registros asociados a cada periodo:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3            
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Afiliación
                            p.text-start Vincula al trabajador con la administradora pensional seleccionada según el régimen aplicable. Debe registrarse antes de procesar los aportes correspondientes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ingreso base de cotización
                            p.text-start Corresponde al valor salarial sobre el cual se calcula el aporte, con los límites establecidos legalmente. Debe guardar correspondencia con los conceptos salariales y las novedades registradas en la nómina.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cotización total
                            p.text-start Equivale generalmente al 16 % del ingreso base de cotización. Este porcentaje se distribuye entre el empleador y el trabajador.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Aporte del empleador
                            p.text-start Corresponde al 12 % del ingreso base de cotización. Se reconoce como aporte patronal y no se descuenta del salario.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Aporte del trabajador
                            p.text-start Corresponde al 4 % del ingreso base de cotización. Se registra como una deducción obligatoria de la nómina.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Fondo de Solidaridad Pensional
                            p.text-start Exige aportes adicionales a determinados trabajadores de mayores ingresos. Debe revisarse el ingreso del trabajador y aplicarse el porcentaje correspondiente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Reporte mediante PILA
                            p.text-start Permite declarar y pagar los aportes y registrar las novedades. La información debe conciliarse con la nómina, la contabilidad y el comprobante de pago.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Historia laboral
                            p.text-start Registra periodos, salarios, días y cotizaciones efectuadas. Su revisión permite identificar omisiones o diferencias que podrían afectar el reconocimiento futuro de prestaciones.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t4/img8.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img9.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-4.p-4 El control de estos elementos contribuye a mantener consistencia entre la nómina, la PILA y la historia laboral del trabajador.
          p La correcta identificación de la administradora, la base y las novedades contribuye a mantener consistencia entre la nómina, la PILA y la historia laboral.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa operadora de viveros forestales vincula a un supervisor de producción con un salario mensual de $3.200.000. El área de nómina revisa la administradora pensional, registra la novedad de ingreso y utiliza el salario como ingreso base de cotización, debido a que no se presentaron pagos adicionales ni novedades que modificaran la base durante el periodo.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 10.
                  span Cálculo del aporte mensual a pensión
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Concepto
                        th(style="width: 25%") Ingreso base
                        th(style="width: 20%") Porcentaje
                        th(style="width: 25%") Valor
                    tbody
                      tr
                        td Ingreso base de cotización
                        td $3.200.000
                        td —
                        td $3.200.000
                      tr
                        td Aporte del empleador
                        td $3.200.000
                        td 12 %
                        td $384.000
                      tr
                        td Aporte del trabajador
                        td $3.200.000
                        td 4 %
                        td $128.000
                      tr
                        td.fw-bold Cotización total
                        td.fw-bold $3.200.000
                        td.fw-bold 16 %
                        td.fw-bold $512.000
            //- FinTabla
            .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img10.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-3 El aporte descontado al trabajador se calcula así:
                <br><br>
                p.bg-color-6.p-3.fw-bold $3.200.000 × 4 % = $128.000
                <br><br>
                p.mb-3 El valor asumido por el empleador corresponde a:
                <br><br>
                p.bg-color-6.p-3.fw-bold $3.200.000 × 12 % = $384.000
                <br><br>
                p.mb-3 La cotización total reportada mediante la PILA es:
                <br><br>
                p.bg-color-6.p-3.fw-bold $128.000 + $384.000 = $512.000
                <br><br>
            p(data-aos="fade-left") La empresa debe registrar los <b>$128.000</b> como una deducción del trabajador y los <b>$384.000</b> como aporte patronal. Después del pago, debe conservar la planilla y revisar que el periodo, los días cotizados y el ingreso base hayan sido incorporados correctamente en la historia laboral.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-6.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p <b>Nota normativa</b>. La entrada en vigencia integral de la <b>Ley 2381 de 2024</b> fue suspendida mientras la Corte Constitucional adopta una decisión definitiva sobre su constitucionalidad, salvo las disposiciones expresamente exceptuadas. Por ello, antes de parametrizar o liquidar aportes, debe revisarse qué régimen y normativa se encuentran vigentes para el periodo procesado.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img11.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") De esta forma, el aporte pensional constituye un mecanismo de protección económica para el trabajador y su familia. La afiliación, el pago oportuno y la revisión de la historia laboral permiten conservar las semanas cotizadas y preparar la información necesaria para reconocer las prestaciones correspondientes.
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Sistema de riesgos laborales: coberturas, clases y tarifas
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img12.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-8.p-2 El <b>Sistema General de Riesgos Laborales</b> previene, protege y atiende las consecuencias de los accidentes de trabajo y las enfermedades laborales. Su cobertura incluye atención médica, rehabilitación, incapacidad temporal, indemnización por incapacidad permanente parcial, pensión de invalidez, pensión de sobrevivientes y auxilio funerario, según la situación presentada. La afiliación del trabajador dependiente debe gestionarse antes del inicio de sus labores, debido a que la cobertura comienza el día calendario siguiente a la afiliación (Ley 1562 de 2012).
          p La cotización es asumida completamente por el empleador y no puede descontarse del salario. Su porcentaje se determina de acuerdo con la clase de riesgo asignada a la actividad económica y al centro de trabajo. El sistema establece cinco clases, desde riesgo mínimo hasta riesgo máximo, con tarifas iniciales entre el <b>0,522 % y el 6,960 %</b> del ingreso base de cotización. La clasificación debe corresponder a la actividad realmente desarrollada y mantenerse actualizada cuando cambien las condiciones de exposición (Decreto 1295 de 1994).
      p(data-aos="fade-left") La gestión del Sistema General de Riesgos Laborales comienza con la afiliación oportuna y exige controlar la cobertura, la cotización y el reporte de novedades:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3            
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Afiliación
                            p.text-start El empleador selecciona la ARL y afilia al trabajador antes de que inicie sus labores. Deben registrarse la administradora, la fecha de ingreso y la clase de riesgo aplicable.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inicio de la cobertura
                            p.text-start Comienza el día calendario siguiente a la afiliación. Por esta razón, el trámite debe realizarse, como mínimo, un día antes del inicio de la actividad laboral.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Responsable del aporte
                            p.text-start El empleador asume el 100 % de la cotización del trabajador dependiente. El valor se registra como aporte patronal, sin descuento al trabajador.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Reporte mediante PILA
                            p.text-start Permite declarar el ingreso base, los días, la tarifa y las novedades. La información debe conciliarse con la nómina y el comprobante de pago.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t4/img13.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img14.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-4.p-4 Estos controles permiten mantener la afiliación y los aportes acordes con las condiciones laborales del trabajador.
          p Las coberturas del sistema se diferencian según el origen del evento y sus consecuencias sobre la salud, la capacidad laboral o la vida del trabajador:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img15.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Accidente de trabajo")
                p.mb-4 Corresponde al evento que ocurre por causa o con ocasión del trabajo y produce una lesión, perturbación, invalidez o muerte. Debe reportarse oportunamente y registrarse como novedad laboral.
              .row(titulo="Enfermedad laboral")
                p.mb-4 Se origina por la exposición a factores de riesgo relacionados con la actividad o el ambiente de trabajo. Requiere soporte médico y determinación del origen de la contingencia.
              .row(titulo="Atención asistencial")
                p.mb-4 Comprende asistencia médica, hospitalaria, terapéutica, farmacéutica y rehabilitación. No corresponde directamente a un pago de nómina, pero depende de que la afiliación se encuentre activa.
              .row(titulo="Incapacidad temporal")
                p.mb-4 Protege al trabajador durante el tiempo en que no puede desempeñar su labor por un evento de origen laboral. La novedad debe registrarse indicando fechas, días y origen.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center        
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Incapacidad permanente parcial")
                p.mb-4 Reconoce una indemnización cuando existe una pérdida definitiva de capacidad laboral dentro de los rangos legales. Debe conservarse el dictamen y actualizarse la situación del trabajador.
              .row(titulo="Pensión de invalidez")
                p.mb-4 Proporciona protección económica cuando la pérdida de capacidad laboral de origen laboral alcanza el porcentaje establecido. Puede generar el retiro o la modificación de la situación laboral del trabajador.
              .row(titulo="Pensión de sobrevivientes")
                p.mb-4 Protege a los beneficiarios cuando la muerte se origina en un accidente o una enfermedad laboral. Requiere reportar el retiro y conservar los documentos asociados al evento.
              .row(titulo="Auxilio funerario")
                p.mb-4 Reconoce los gastos de entierro en las condiciones establecidas legalmente. Se tramita ante la ARL y no corresponde a una deducción de nómina.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img16.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La cobertura depende tanto de la afiliación oportuna como de la clasificación adecuada de la actividad y del registro de las novedades asociadas al trabajador.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 11.
                  span Clases de riesgo y tarifas de cotización
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 15%") Clase
                        th(style="width: 25%") Nivel de riesgo
                        th(style="width: 20%") Tarifa mínima
                        th(style="width: 20%") Tarifa inicial
                        th(style="width: 20%") Tarifa máxima
                    tbody
                      tr
                        td I
                        td Riesgo mínimo
                        td 0,348 %
                        td 0,522 %
                        td 0,696 %
                      tr
                        td II
                        td Riesgo bajo
                        td 0,435 %
                        td 1,044 %
                        td 1,653 %
                      tr
                        td III
                        td Riesgo medio
                        td 0,783 %
                        td 2,436 %
                        td 4,089 %
                      tr
                        td IV
                        td Riesgo alto
                        td 1,740 %
                        td 4,350 %
                        td 6,960 %
                      tr
                        td V
                        td Riesgo máximo
                        td 3,219 %
                        td 6,960 %
                        td 8,700 %
            //- FinTabla
            p(data-aos="fade-left") Las empresas que ingresan por primera vez cotizan inicialmente con la tarifa correspondiente a su clase; cualquier variación debe realizarse conforme con los criterios y procedimientos establecidos. La tarifa aplicable depende de la clasificación asignada y debe corresponder a las condiciones de riesgo de la actividad o del centro de trabajo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada al mantenimiento de maquinaria industrial vincula a un técnico con un salario mensual de $3.000.000. Antes de que inicie sus funciones, realiza la afiliación a la ARL y revisa que el centro de trabajo se encuentre registrado en clase IV, con una tarifa inicial del 4,350 %. La empresa asume la totalidad del aporte.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 12.
                  span Cálculo del aporte mensual a riesgos laborales
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Concepto
                        th(style="width: 25%") Ingreso base
                        th(style="width: 20%") Porcentaje
                        th(style="width: 25%") Valor
                    tbody
                      tr
                        td Ingreso base de cotización
                        td $3.000.000
                        td —
                        td $3.000.000
                      tr
                        td Aporte del empleador a la ARL
                        td $3.000.000
                        td 4,350 %
                        td $130.500
                      tr
                        td Aporte del trabajador
                        td $3.000.000
                        td 0 %
                        td $0
                      tr
                        td.fw-bold Cotización total
                        td.fw-bold $3.000.000
                        td.fw-bold 4,350 %
                        td.fw-bold $130.500
            //- FinTabla
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img17.png')})` }"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El aporte se calcula de la siguiente manera:
            br
            br
            span.bg-color-6.p-3.d-inline-block.fw-bold
              | Aporte a riesgos laborales = ingreso base de cotización × tarifa
              br
              | $3.000.000 × 4,350 % = $130.500
            br
            br
            | Los <b>$130.500</b> constituyen un aporte patronal y no disminuyen el valor neto pagado al trabajador. Si ocurre un accidente relacionado con la actividad, la empresa debe brindar atención inmediata, reportar el evento y conservar la documentación necesaria para que la ARL determine el origen y gestione las prestaciones correspondientes.
      p(data-aos="fade-left") En este sentido, la afiliación previa, la clasificación correcta del riesgo y el pago oportuno permiten que el trabajador cuente con protección desde el comienzo de sus labores. Estos controles evitan periodos sin cobertura y preparan la información requerida para integrar los aportes a caja de compensación familiar, SENA e ICBF.
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Caja de compensación familiar y aportes parafiscales
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-4.h-100.d-flex.align-items-center
            p.mb-0 Los <b>aportes parafiscales</b> son contribuciones asumidas por el empleador y calculadas, de manera general, sobre la nómina mensual de salarios. Para los empleadores particulares, el aporte a la caja de compensación familiar corresponde al <b>4 %</b>, el aporte al SENA al <b>2 %</b> y el aporte al ICBF al <b>3 %</b>. Estos valores no se descuentan del trabajador: deben registrarse como obligaciones patronales y pagarse mediante la <b>Planilla Integrada de Liquidación de Aportes (PILA)</b> (Ley 89 de 1988).
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid(src="@/assets/curso/temas/t4/img18.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Las cajas de compensación administran el subsidio familiar en dinero, especie y servicios, mediante programas que pueden beneficiar al trabajador y a su familia. El SENA financia procesos de formación profesional y el ICBF desarrolla acciones de protección a la niñez y la familia. Algunos empleadores pueden estar exonerados de los aportes al SENA y al ICBF respecto de trabajadores que devenguen menos de diez salarios mínimos, cuando cumplen las condiciones tributarias aplicables; esta exoneración no comprende el aporte del 4 % a la caja de compensación familiar.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 13.
                  span Caja de compensación familiar y aportes parafiscales
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Aporte
                        th(style="width: 30%") Finalidad principal
                        th(style="width: 12%") Tarifa general
                        th(style="width: 15%") Responsable
                        th(style="width: 23%") Tratamiento de la exoneración
                    tbody
                      tr
                        td Caja de compensación familiar
                        td Financiar el subsidio familiar en dinero, especie o servicios y programas sociales para los trabajadores y sus familias.
                        td 4 %
                        td Empleador
                        td No está incluida en la exoneración del artículo 114-1 del Estatuto Tributario.
                      tr
                        td SENA
                        td Financiar la formación profesional integral y el desarrollo técnico de los trabajadores.
                        td 2 %
                        td Empleador
                        td Puede existir exoneración cuando el empleador y el trabajador cumplen las condiciones tributarias.
                      tr
                        td ICBF
                        td Financiar programas de protección dirigidos a la niñez y la familia.
                        td 3 %
                        td Empleador
                        td Puede existir exoneración cuando el empleador y el trabajador cumplen las condiciones tributarias.
                      tr
                        td.fw-bold Total sin exoneración
                        td Reunir los aportes patronales destinados al pago de las tres entidades.
                        td.fw-bold 9 %
                        td Empleador
                        td Se aplica cuando no procede la exoneración del SENA y del ICBF.
                      tr
                        td.fw-bold Total con exoneración del SENA e ICBF
                        td Mantener únicamente el aporte obligatorio a la caja de compensación familiar.
                        td.fw-bold 4 %
                        td Empleador
                        td Requiere revisar la naturaleza tributaria del empleador y la remuneración del trabajador.
            //- FinTabla
            p(data-aos="fade-left") Esta diferenciación permite establecer qué obligaciones corresponden al empleador y cuáles porcentajes deben aplicarse según las condiciones tributarias del periodo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada a la fabricación de prótesis odontológicas tiene un trabajador con una base para aportes parafiscales de $4.800.000. Para fines didácticos, se asume que la empresa no cumple las condiciones de exoneración y, por tanto, debe realizar los aportes a la caja de compensación familiar, el SENA y el ICBF.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 14.
                  span Cálculo mensual de aportes parafiscales
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Concepto
                        th(style="width: 25%") Base de liquidación
                        th(style="width: 20%") Porcentaje
                        th(style="width: 25%") Valor
                    tbody
                      tr
                        td Caja de compensación familiar
                        td $4.800.000
                        td 4 %
                        td $192.000
                      tr
                        td SENA
                        td $4.800.000
                        td 2 %
                        td $96.000
                      tr
                        td ICBF
                        td $4.800.000
                        td 3 %
                        td $144.000
                      tr
                        td.fw-bold Total de aportes parafiscales
                        td.fw-bold $4.800.000
                        td.fw-bold 9 %
                        td.fw-bold $432.000
                      tr
                        td Descuento al trabajador
                        td —
                        td 0 %
                        td $0
            //- FinTabla
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-6.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 Para este ejercicio se utiliza un referente de 210 horas mensuales:
          .row
            .col-lg-8.bg-color-7
              p.fw-bold.p-2 $192.000 + $96.000 + $144.000 = $432.000
          p.mb-3.mt-2 Los <b>$432.000</b> representan un costo asumido por la empresa y no disminuyen el salario ni el valor neto pagado al trabajador. Si la empresa estuviera exonerada de los aportes al SENA y al ICBF para este trabajador, únicamente liquidaría el aporte a la caja de compensación familiar por <b>$192.000.</b>
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img19.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") De esta forma, la revisión de la base salarial, la condición tributaria del empleador y la remuneración individual del trabajador permite establecer cuáles aportes deben liquidarse. Su registro separado facilita conciliar la nómina con la PILA y avanzar hacia el reconocimiento de las prestaciones sociales y las vacaciones.
      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Prestaciones sociales, vacaciones y obligaciones patronales
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img20.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-8.p-2 Las <b>prestaciones sociales</b> son beneficios adicionales al salario que el empleador reconoce por la existencia de una relación laboral. Entre ellas se encuentran la prima de servicios, equivalente a treinta días de salario por año, y las cesantías, correspondientes a un mes de salario por año o proporcional al tiempo laborado. Sobre las cesantías se reconocen intereses del 12 % anual. La prima se paga en dos partes, mientras que las cesantías causadas se liquidan al finalizar el año y se consignan en el fondo elegido por el trabajador antes del 15 de febrero del año siguiente (Ley 1788 de 2016; Ley 50 de 1990).
          p Las <b>vacaciones</b> corresponden a un descanso remunerado de quince días hábiles consecutivos por cada año de servicio y se calculan con el salario ordinario vigente al comenzar su disfrute. Cuando el salario es variable, se utiliza el promedio del año anterior; para esta base se excluyen las horas extras y el valor del trabajo en días de descanso obligatorio. El empleador también debe entregar dotación cada cuatro meses a los trabajadores que devenguen hasta dos salarios mínimos y hayan cumplido más de tres meses de servicio en la fecha de entrega (Código Sustantivo del Trabajo, 1951).
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 15.
                  span Prestaciones, vacaciones y obligaciones del empleador
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 15%") Concepto
                        th(style="width: 25%") Derecho general
                        th(style="width: 15%") Fórmula de liquidación
                        th(style="width: 20%") Momento de reconocimiento
                        th(style="width: 25%") Obligación del empleador
                    tbody
                      tr
                        td Prima de servicios
                        td Treinta días de salario por cada año trabajado o proporcional por fracción.
                        td Base salarial × días trabajados ÷ 360
                        td La primera mitad, máximo el 30 de junio; la segunda, dentro de los primeros veinte días de diciembre.
                        td Liquidar, pagar y conservar el comprobante correspondiente.
                      tr
                        td Cesantías
                        td Un mes de salario por cada año trabajado o proporcional por fracción.
                        td Base salarial × días trabajados ÷ 360
                        td Se liquidan al 31 de diciembre o al terminar el contrato.
                        td Consignar en el fondo antes del 15 de febrero del año siguiente o pagar directamente al finalizar el vínculo cuando corresponda.
                      tr
                        td Intereses sobre cesantías
                        td Doce por ciento anual sobre las cesantías causadas o proporcional por fracción.
                        td Cesantías × días trabajados × 12 % ÷ 360
                        td Se pagan durante enero del año siguiente o al finalizar el contrato.
                        td Pagar directamente al trabajador y entregar el soporte.
                      tr
                        td Vacaciones
                        td Quince días hábiles consecutivos por cada año de servicio o proporcionales.
                        td Salario base × días trabajados ÷ 720
                        td Se conceden dentro del año siguiente a su causación.
                        td Programar el descanso, remunerarlo y mantener actualizado el registro de días disfrutados y pendientes.
                      tr
                        td Dotación
                        td Calzado y vestido apropiados para desarrollar la labor.
                        td No corresponde a una fórmula monetaria de nómina.
                        td 30 de abril, 31 de agosto y 20 de diciembre.
                        td Entregar en especie cuando el trabajador cumple los requisitos y conservar la constancia de recibido.
                      tr
                        td Provisión contable
                        td Reconocimiento periódico de las obligaciones causadas.
                        td Valor anual estimado distribuido entre los periodos.
                        td Durante cada cierre de nómina.
                        td Registrar los pasivos laborales para disponer de recursos en la fecha de pago.
                      tr
                        td Liquidación al retiro
                        td Pago de los derechos causados y pendientes al terminar el contrato.
                        td Según salario, tiempo trabajado y conceptos pendientes.
                        td Al finalizar la relación laboral.
                        td Revisar salarios, prestaciones, vacaciones, deducciones y soportes antes del pago.
            //- FinTabla
            p(data-aos="fade-left") La liquidación de estos conceptos requiere diferenciar la base aplicable, el tiempo causado y la fecha en la que corresponde reconocer cada derecho.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada a la elaboración de cosméticos naturales tiene una trabajadora con salario mensual de $2.400.000, quien ha laborado 180 días. Para fines didácticos, se utiliza un auxilio de transporte de $200.000 y se asume que la trabajadora cumple las condiciones para recibirlo.
      p(data-aos="fade-left") Para calcular la prima y las cesantías se utiliza una base de <b>$2.600.000</b>. Las vacaciones se calculan únicamente sobre el salario de <b>$2.400.000</b>, porque el auxilio de transporte no forma parte de su base.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 16.
                  span Liquidación proporcional de prestaciones y vacaciones
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Concepto
                        th(style="width: 20%") Base
                        th(style="width: 35%") Fórmula
                        th(style="width: 20%") Valor causado
                    tbody
                      tr
                        td Prima de servicios
                        td $2.600.000
                        td $2.600.000 × 180 ÷ 360
                        td $1.300.000
                      tr
                        td Cesantías
                        td $2.600.000
                        td $2.600.000 × 180 ÷ 360
                        td $1.300.000
                      tr
                        td Intereses sobre cesantías
                        td $1.300.000
                        td $1.300.000 × 180 × 12 % ÷ 360
                        td $78.000
                      tr
                        td Vacaciones
                        td $2.400.000
                        td $2.400.000 × 180 ÷ 720
                        td $600.000
                      tr
                        td.fw-bold Total causado
                        td —
                        td Suma de los conceptos
                        td.fw-bold $3.278.000
            //- FinTabla
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img21.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 La prima y las cesantías se calculan así:
          <br><br>
          p.bg-color-6.p-3.fw-bold $2.600.000 × 180 ÷ 360 = $1.300.000
          <br><br>
          p.mb-3 Los intereses sobre las cesantías corresponden a:
          <br><br>
          p.bg-color-6.p-3.fw-bold $1.300.000 × 180 × 12 % ÷ 360 = $78.000
          <br><br>
          p.mb-3 Las vacaciones se determinan de la siguiente manera:
          <br><br>
          p.bg-color-6.p-3.fw-bold $2.400.000 × 180 ÷ 720 = $600.000
          <br><br>
      p(data-aos="fade-left") La empresa debe mantener separados estos valores en sus registros. La prima se entrega directamente a la trabajadora, las cesantías se consignan en el fondo dentro del plazo aplicable, los intereses se pagan a la trabajadora y las vacaciones deben programarse para garantizar el descanso efectivo.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t4/img22.png", data-aos="zoom-in", style="width: 450px;")
        .col-lg-5.mb-4.mb-lg-0
          .d-flex.flex-column.justify-content-center
            p.mb-3.bg-color-4.p-3 De esta forma, la gestión de las prestaciones y vacaciones exige identificar la base, el tiempo trabajado, la fecha de causación y el destinatario de cada pago. La provisión periódica y la conservación de soportes permiten atender oportunamente estas obligaciones y evitar que los derechos del trabajador queden sin reconocimiento.
            p.mb-0 La <b>seguridad social, los aportes parafiscales y las prestaciones laborales</b> cumplen funciones complementarias de protección. El sistema de salud atiende contingencias de origen común; el sistema pensional protege frente a la vejez, la invalidez y la muerte; el sistema de riesgos laborales cubre los accidentes y las enfermedades derivados del trabajo; y las prestaciones reconocen derechos económicos y de descanso originados por la relación laboral.
        .col-lg-3
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t4/img23.png", data-aos="zoom-in", style="width: 280px;")
      p(data-aos="fade-left") Por consiguiente, la nómina debe diferenciar los aportes asumidos por el empleador, las deducciones realizadas al trabajador, las prestaciones causadas y los beneficios que deben entregarse en fechas determinadas. Esta información constituye la base para recopilar, registrar y validar las novedades que intervienen en cada periodo.
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12        
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-9.p-4.rounded-4           
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/iconopdf.svg', style="width: 80px")          
            .flex-grow-1.text-center.text-lg-start
              h4.mb-2 Novedades y validación nómina
              p.mb-0 Se invita a leer el documento Novedades y validación de la información, donde se aborda la identificación, clasificación, registro y validación de las novedades de nómina. 
            .mt-3.mt-lg-0.ps-lg-4            
              a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo_01_Novedades_Validación_Información.pdf')" target="_blank")
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download




</template>

<script>
export default {
  name: 'Tema3',
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
