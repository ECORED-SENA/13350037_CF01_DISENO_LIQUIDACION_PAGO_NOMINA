<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Elementos laborales que conforman la nómina
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img1.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-3.p-4 La <b>nómina</b> reúne los conceptos económicos derivados de la relación laboral durante un periodo determinado. Su preparación exige identificar el salario acordado, los pagos variables, la jornada, las novedades, las prestaciones, las deducciones y los aportes correspondientes. Cada concepto debe clasificarse según su naturaleza, porque no todos los valores recibidos por el trabajador tienen el mismo tratamiento laboral.
          p La correcta clasificación permite establecer cuáles pagos integran la remuneración directa del servicio y cuáles se entregan para cumplir las funciones, reconocer un beneficio o atender una obligación diferente. Esta distinción influye en la determinación de las bases utilizadas para liquidar prestaciones, aportes e indemnizaciones, las cuales deben analizarse de acuerdo con las reglas aplicables a cada concepto (Código Sustantivo del Trabajo, 1951; Ley 50 de 1990).
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Salario y pagos constitutivos y no constitutivos de salario
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-4.h-100.d-flex.align-items-center
            p.mb-0 El <b>salario</b> comprende la remuneración ordinaria, fija o variable, y todo pago que el trabajador recibe en dinero o en especie como contraprestación directa por sus servicios. Por esta razón, pueden constituir salario el sueldo básico, las comisiones, los porcentajes sobre ventas, las bonificaciones asociadas al desempeño, las horas extras y los recargos por trabajo realizado en horarios o días especiales, sin importar el nombre utilizado por el empleador (Ley 50 de 1990).
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t3/img2.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 No constituyen salario las sumas ocasionales otorgadas por mera liberalidad, las prestaciones sociales y los valores entregados para que el trabajador pueda desempeñar sus funciones, como herramientas, medios de transporte o gastos de representación debidamente sustentados. También pueden existir beneficios extralegales expresamente acordados como no salariales; sin embargo, no es válido excluir mediante un acuerdo un pago que realmente remunera de manera directa el servicio prestado (Ley 50 de 1990).
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Salario básico
                p Es de naturaleza salarial porque remunera directamente el servicio ordinario. En la nómina se registra como parte principal del devengado y constituye uno de los componentes centrales de la remuneración del trabajador.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comisión por ventas
                p Tiene naturaleza salarial cuando depende de la actividad y de los resultados obtenidos por el trabajador. Se incorpora como remuneración variable del periodo correspondiente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Horas extras y recargos
                p Son pagos salariales porque retribuyen el trabajo realizado por fuera de la jornada ordinaria o en horarios especiales. Deben liquidarse según el tiempo efectivamente trabajado y la tarifa aplicable.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bonificación por productividad
                p Constituye salario cuando se entrega como reconocimiento directo del desempeño o del cumplimiento de metas. En consecuencia, se integra al devengado salarial del periodo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Salario en especie
                p Corresponde a alimentación, habitación u otro beneficio entregado como parte de la remuneración. Debe valorarse e incorporarse según las condiciones pactadas y los límites establecidos legalmente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Gratificación ocasional
                p No constituye salario cuando se entrega excepcionalmente y por mera liberalidad del empleador. Debe registrarse separadamente y conservarse el soporte correspondiente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Herramientas y elementos de trabajo
                p No constituyen salario cuando se suministran para desarrollar las funciones y no para enriquecer al trabajador. Se controlan como recursos necesarios para ejecutar la actividad laboral.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reembolso de gastos
                p No constituye salario cuando restituye valores pagados por el trabajador para cumplir una actividad laboral. Requiere facturas, cuentas u otros documentos que sustenten el gasto.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Prestaciones sociales
                p Corresponden a derechos laborales diferentes de la remuneración directa del servicio. Por tanto, deben liquidarse y registrarse de manera independiente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_10.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Beneficio extralegal no salarial
                p Puede tener naturaleza no salarial cuando cumple las condiciones legales, se encuentra expresamente acordado y no remunera directamente la actividad realizada. Debe identificarse separadamente y conservarse el acuerdo que sustenta su tratamiento.
      //- Fin Slideshow
      p(data-aos="fade-left") La denominación asignada al pago no modifica su naturaleza cuando este retribuye directamente el servicio; por ello, la clasificación debe atender a su finalidad real (Circular Externa 018 de 2012).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa fabricante de calzado reconoce a una operaria los siguientes valores durante el mes: salario básico por $2.200.000, bonificación por cumplimiento de la meta de producción por $350.000, horas extras por $180.000, reembolso soportado de materiales por $160.000 y una gratificación ocasional de aniversario por $200.000.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span Clasificación de pagos mensuales de una trabajadora
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Pago recibido
                        th(style="width: 15%") Valor
                        th(style="width: 20%") Clasificación
                        th(style="width: 40%") Justificación
                    tbody
                      tr
                        td Salario básico
                        td $2.200.000
                        td Salarial
                        td Remunera directamente el trabajo ordinario.
                      tr
                        td Bonificación por producción
                        td $350.000
                        td Salarial
                        td Está relacionada con el cumplimiento de una meta laboral.
                      tr
                        td Horas extras
                        td $180.000
                        td Salarial
                        td Reconocen el trabajo realizado por fuera de la jornada ordinaria.
                      tr
                        td Reembolso de materiales
                        td $160.000
                        td No salarial
                        td Restituye un gasto asumido para desarrollar la actividad.
                      tr
                        td Gratificación ocasional
                        td $200.000
                        td No salarial
                        td Se entrega excepcionalmente y no remunera el servicio.
                      tr
                        td.fw-bold Total pagado
                        td.fw-bold $3.090.000
                        td.fw-bold —
                        td.fw-bold Comprende pagos salariales y no salariales.
            //- FinTabla
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 Para el ejercicio, el total de pagos salariales corresponde a:
          <br><br>
          p.bg-color-6.p-3.fw-bold  $2.200.000 + $350.000 + $180.000 = $2.730.000
          <br><br>
          p.mb-3 Los pagos no salariales ascienden a:
          <br><br>
          p.bg-color-6.p-3.fw-bold $160.000 + $200.000 = $360.000
          <br><br>
          p.mb-0 Aunque la trabajadora recibe en total $3.090.000, los conceptos deben conservarse separados para establecer correctamente el devengado y determinar posteriormente las bases aplicables a prestaciones, aportes y demás obligaciones.
      p(data-aos="fade-left") De esta forma, la clasificación no depende únicamente del nombre registrado en el comprobante, sino de la finalidad real del pago. Identificar si el valor remunera el servicio, cubre un gasto o reconoce un beneficio permite reducir errores y preparar la información necesaria para estudiar las modalidades salariales, los auxilios y los beneficios laborales.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Modalidades salariales, auxilios y beneficios laborales
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img4.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-8.p-2 El salario puede pactarse por unidad de tiempo, por obra, a destajo, por tarea o mediante una combinación de valores fijos y variables, siempre que se respete el salario mínimo aplicable. También puede reconocerse en dinero o parcialmente en especie. Cuando el pago en especie remunera directamente el servicio, debe valorarse en el contrato y no puede superar el 50 % del salario total; si el trabajador devenga el salario mínimo, el límite corresponde al 30 %. Por su parte, el <b>salario integral</b> debe acordarse por escrito y comprende la remuneración ordinaria y el factor prestacional, sin incluir las vacaciones (Ley 50 de 1990).
          p Los auxilios y beneficios deben clasificarse según su finalidad. El <b>auxilio de transporte</b> no constituye salario, pero se incorpora para liquidar prestaciones sociales; en los casos de trabajo en casa puede reconocerse como <b>auxilio de conectividad digital</b>, sin acumularse con el de transporte. Los beneficios extralegales pueden pactarse como no salariales cuando no remuneran directamente el servicio, mientras que las comisiones, los incentivos o las bonificaciones asociados al desempeño conservan naturaleza salarial aunque reciban otra denominación (Ley 1 de 1963; Ley 2088 de 2021).
      p(data-aos="fade-left") Las principales modalidades de salario se diferencian según la forma en que se determina y entrega la remuneración:
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
                              img(src='@/assets/curso/temas/t3/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario por unidad de tiempo
                            p.text-start Se determina por hora, día, semana, quincena o mes trabajado. En la nómina se calcula de acuerdo con el periodo y los días efectivamente remunerados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario por obra o a destajo
                            p.text-start Depende de la cantidad de unidades producidas o actividades terminadas. Su liquidación requiere soportes que permitan acreditar la producción y el valor unitario correspondiente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario por tarea
                            p.text-start Se reconoce por el cumplimiento de una labor previamente definida. Debe relacionarse con la tarea asignada y con el periodo en el cual fue ejecutada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario fijo
                            p.text-start Mantiene un valor ordinario determinado para cada periodo. Se registra como remuneración básica del trabajador.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario variable
                            p.text-start Cambia según ventas, resultados, producción o comisiones. Debe calcularse con información validada y reglas previamente definidas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario mixto
                            p.text-start Combina un valor fijo con comisiones, incentivos u otros pagos variables. Los componentes deben identificarse y sumarse para determinar el salario del periodo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario en dinero
                            p.text-start Se paga mediante efectivo, transferencia u otro medio autorizado. Se incluye en el comprobante y en el valor neto pagado al trabajador.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario en especie
                            p.text-start Comprende alimentación, habitación o vestuario entregado como remuneración directa. Debe valorarse expresamente y respetar los límites legales aplicables.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_9.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Salario integral
                            p.text-start Integra el salario ordinario y un factor prestacional acordado por escrito. Se registra como una suma integral, conservando por separado el control de vacaciones y aportes.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t3/img5.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img6.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-4.p-4 Estas modalidades determinan la forma en que se estructura la remuneración y permiten identificar los componentes que integran el salario del trabajador.
          p Además de las modalidades salariales, la nómina puede incluir auxilios, beneficios y otros pagos que requieren una clasificación específica:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Auxilio de transporte
                p Contribuye a cubrir el desplazamiento del trabajador cuando cumple las condiciones legales. Se registra separadamente; no constituye salario, pero se considera para liquidar prestaciones sociales.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Auxilio de conectividad
                p Sustituye el auxilio de transporte durante la habilitación de trabajo en casa. No puede reconocerse simultáneamente con el auxilio de transporte.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Beneficio extralegal
                p Es otorgado adicionalmente mediante contrato, convención, pacto o política empresarial. Debe establecerse si tiene naturaleza salarial según su finalidad y condiciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bonificación por desempeño
                p Reconoce resultados, productividad o cumplimiento de metas. Constituye salario cuando remunera directamente el servicio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reembolso o herramienta de trabajo
                p Cubre gastos o recursos necesarios para desarrollar las funciones. No constituye salario cuando está debidamente soportado y no representa una remuneración directa para el trabajador.
      //- Fin Slideshow
      p(data-aos="fade-left") Esta clasificación permite establecer el tratamiento que corresponde a cada concepto antes de incorporarlo al proceso de nómina.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada a la elaboración de productos cerámicos remunera a una trabajadora mediante un salario mixto. Durante el mes reconoce un salario básico de $2.100.000, un incentivo de $320.000 por unidades producidas y alimentación valorada en $180.000 como parte de la remuneración. También entrega $140.000 como reembolso de materiales adquiridos para una actividad laboral y una bonificación ocasional de bienestar por $150.000.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span Clasificación de modalidades salariales y beneficios
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Concepto
                        th(style="width: 15%") Valor
                        th(style="width: 20%") Clasificación
                        th(style="width: 40%") Tratamiento
                    tbody
                      tr
                        td Salario básico
                        td $2.100.000
                        td Salario fijo en dinero
                        td Integra la remuneración y las bases correspondientes.
                      tr
                        td Incentivo por producción
                        td $320.000
                        td Salario variable
                        td Remunera directamente el rendimiento de la trabajadora.
                      tr
                        td Alimentación pactada como remuneración
                        td $180.000
                        td Salario en especie
                        td Debe valorarse y formar parte del salario total.
                      tr
                        td Reembolso de materiales
                        td $140.000
                        td Pago no salarial
                        td Restituye un gasto laboral debidamente soportado.
                      tr
                        td Bonificación ocasional de bienestar
                        td $150.000
                        td Beneficio no salarial
                        td Se entrega de forma excepcional y no depende del servicio prestado.
                      tr
                        td.fw-bold Total reconocido
                        td.fw-bold $2.890.000
                        td Pagos salariales y no salariales
                        td Requiere conservar cada concepto de manera separada.
            //- FinTabla
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 El salario total del periodo corresponde a:
          <br><br>
          p.bg-color-6.p-3.fw-bold $2.100.000 + $320.000 + $180.000 = $2.600.000
          <br><br>
          p.mb-3 Los pagos no salariales ascienden a:
          <br><br>
          p.bg-color-6.p-3.fw-bold $140.000 + $150.000 = $290.000
          <br><br>
          p.mb-0 Aunque el total reconocido es de <b>$2.890.000</b>, la nómina debe diferenciar los $2.600.000 de naturaleza salarial de los $290.000 correspondientes a reembolsos y beneficios no salariales.
      p(data-aos="fade-left") También debe registrar que una parte del salario fue entregada en especie y comprobar que su valor se encuentre dentro de los límites permitidos. En consecuencia, antes de liquidar la nómina es necesario revisar la modalidad salarial acordada, la finalidad de cada pago y los soportes que justifican su clasificación. Esta separación permite determinar correctamente el devengado y preparar la información para analizar la jornada laboral, el trabajo suplementario y los recargos.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Jornada laboral, trabajo suplementario y recargos
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t3/img8.png", data-aos="zoom-in", style="width: 500px;")
        .col-lg-5.mb-4.mb-lg-0
          .d-flex.flex-column.justify-content-center
            p.mb-3.bg-color-4.p-2 La <b>jornada ordinaria</b> corresponde al tiempo acordado para prestar el servicio, sin exceder la jornada máxima legal. Desde el 15 de julio de 2026, esta jornada es de 42 horas semanales, distribuibles de común acuerdo en cinco o seis días, sin reducción salarial. El trabajo diurno se desarrolla entre las 6:00 a. m. y las 7:00 p. m., mientras que el trabajo nocturno comprende el periodo entre las 7:00 p. m. y las 6:00 a. m. del día siguiente (Ley 2101 de 2021; Ley 2466 de 2025).
            p.mb-0 El <b>trabajo suplementario</b> es el que supera la jornada ordinaria pactada o la máxima legal. Las horas extras no pueden exceder dos horas diarias ni doce semanales, y el empleador debe conservar un registro que identifique al trabajador, la actividad realizada y el número de horas diurnas o nocturnas. La liquidación también debe diferenciar los recargos por trabajo nocturno y por labor desarrollada en días de descanso obligatorio o festivos (Código Sustantivo del Trabajo, 1951; Ley 2466 de 2025).
        .col-lg-3
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t3/img9.png", data-aos="zoom-in", style="width: 500px;")
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span Jornada laboral y recargos aplicables
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Concepto
                        th(style="width: 25%") Condición
                        th(style="width: 20%") Recargo sobre la hora ordinaria
                        th(style="width: 15%") Valor total de la hora
                        th(style="width: 20%") Control requerido
                    tbody
                      tr
                        td Hora ordinaria diurna
                        td Se trabaja entre las 6:00 a. m. y las 7:00 p. m., dentro de la jornada pactada.
                        td 0 %
                        td 100 %
                        td Revisar el horario y la jornada ordinaria.
                      tr
                        td Hora ordinaria nocturna
                        td Se trabaja entre las 7:00 p. m. y las 6:00 a. m., dentro de la jornada pactada.
                        td 35 %
                        td 135 %
                        td Identificar las horas nocturnas efectivamente laboradas.
                      tr
                        td Hora extra diurna
                        td Supera la jornada ordinaria y se realiza en horario diurno.
                        td 25 %
                        td 125 %
                        td Confirmar la autorización, el registro y el límite de horas extras.
                      tr
                        td Hora extra nocturna
                        td Supera la jornada ordinaria y se realiza en horario nocturno.
                        td 75 %
                        td 175 %
                        td Diferenciarla de la hora ordinaria nocturna.
                      tr
                        td Trabajo en día de descanso obligatorio o festivo
                        td Se realiza en el día establecido para el descanso o en un día festivo.
                        td 90 % desde el 1 de julio de 2026
                        td 190 %
                        td Revisar el periodo liquidado y determinar si el empleador adoptó anticipadamente el recargo del 100 %.
                      tr
                        td Trabajo en día de descanso obligatorio o festivo desde julio de 2027
                        td Se aplica cuando finaliza la implementación gradual.
                        td 100 %
                        td 200 %
                        td Actualizar el parámetro de liquidación para el periodo correspondiente.
                      tr
                        td Jornada flexible
                        td Puede distribuirse entre cuatro y nueve horas diarias, sin exceder 42 horas semanales.
                        td No genera recargo suplementario cuando cumple las condiciones legales.
                        td 100 %
                        td Conservar el acuerdo y controlar el total semanal.
                      tr
                        td Trabajo suplementario
                        td No puede superar dos horas diarias ni doce semanales.
                        td Depende de si es diurno o nocturno.
                        td 125 % o 175 %
                        td Llevar el registro individual de las horas laboradas.
            //- FinTabla
            p(data-aos="fade-left") La aplicación del porcentaje correspondiente depende de la jornada, el horario y el periodo en que se desarrolla el trabajo, por lo que estos datos deben validarse antes de liquidar la novedad.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada a la producción de alimentos congelados tiene una jornada de 42 horas semanales distribuida en seis días, equivalente a siete horas diarias. Un trabajador recibe un salario mensual de $2.520.000 y, durante el periodo, registra seis horas ordinarias nocturnas, cuatro horas extras diurnas y dos horas extras nocturnas. Las novedades fueron autorizadas y se encuentran dentro de los límites legales.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-6.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 Para este ejercicio se utiliza un referente de 210 horas mensuales:
          .row
            .col-lg-8.bg-color-7
              p.mb-3.fw-bold Horas mensuales = 7 horas diarias × 30 días
              p.mb-3.fw-bold 7 × 30 = 210 horas
          p.mb-3 El valor de la hora ordinaria corresponde a:
          .row 
            .col-lg-8.bg-color-7
              p.mb-3.fw-bold $2.520.000 ÷ 210 = $12.000
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img10.png', alt='', style="object-fit: cover;")
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Liquidación de horas y recargos
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Concepto
                        th(style="width: 15%") Cantidad
                        th(style="width: 30%") Fórmula
                        th(style="width: 25%") Valor
                    tbody
                      tr
                        td Salario mensual
                        td 1
                        td Valor pactado
                        td $2.520.000
                      tr
                        td Recargo nocturno ordinario
                        td 6 horas
                        td $12.000 × 35 % × 6
                        td $25.200
                      tr
                        td Horas extras diurnas
                        td 4 horas
                        td $12.000 × 125 % × 4
                        td $60.000
                      tr
                        td Horas extras nocturnas
                        td 2 horas
                        td $12.000 × 175 % × 2
                        td $42.000
                      tr
                        td.fw-bold Total adicional por horas y recargos
                        td.fw-bold —
                        td $25.200 + $60.000 + $42.000
                        td.fw-bold $127.200
                      tr
                        td.fw-bold Total devengado del ejercicio
                        td.fw-bold —
                        td $2.520.000 + $127.200
                        td.fw-bold $2.647.200
            //- FinTabla
            .row.justify-content-center.align-items-stretch.mb-5
              .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
                .bg-color-4.p-4.h-100.d-flex.align-items-center
                  p.mb-0 En el recargo nocturno se adiciona únicamente el 35 %, debido a que las horas ordinarias ya se encuentran incluidas en el salario mensual. En las horas extras se paga el valor completo de la hora junto con el recargo correspondiente, porque representan tiempo trabajado por fuera de la jornada ordinaria.
              .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
                .h-100.d-flex
                  img.img-fluid.rounded-3(src="@/assets/curso/temas/t3/img11.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
              .col-12.col-md-12.col-lg-4(data-aos="fade-left")
                .h-100.d-flex.align-items-center
                  p.mb-0 De esta forma, el control de horarios permite clasificar correctamente cada hora y aplicar el porcentaje correspondiente. La organización debe revisar el periodo, la jornada pactada, los límites del trabajo suplementario y los soportes de autorización antes de incorporar estas novedades al devengado de la nómina.
            Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Devengado, deducido y valor neto pagado
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img12.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-3.p-3 El <b>devengado</b> corresponde a la totalidad de los valores reconocidos al trabajador durante el periodo de nómina. Puede incluir salario básico, comisiones, horas extras, recargos, auxilios, incapacidades, bonificaciones y pagos no salariales. Cada concepto debe registrarse por separado para identificar su naturaleza y determinar si integra las bases utilizadas para prestaciones y seguridad social. El salario debe pagarse por periodos iguales y vencidos, mientras que las horas extras y los recargos se reconocen con el salario del periodo en que se causaron o, como máximo, en el periodo siguiente.
          p El <b>deducido</b> reúne los valores que se descuentan del devengado, como los aportes del trabajador a salud y pensión, las retenciones tributarias aplicables, los embargos judiciales y las deducciones autorizadas. El empleador no puede descontar sumas del salario sin autorización escrita del trabajador o mandamiento judicial y debe respetar las restricciones que protegen el salario mínimo y la parte inembargable. El <b>valor neto pagado</b> se obtiene al restar las deducciones legalmente procedentes del total devengado (Ley 1429 de 2010).
      p(data-aos="fade-left") Los componentes que intervienen en la determinación del pago al trabajador se organizan de la siguiente manera:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Devengado salarial fijo
                p Incluye el salario básico y el salario en especie pactado. Requiere revisar el contrato, el periodo y los días remunerados, e integrar la remuneración salarial del periodo.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Devengado salarial variable
                p Comprende comisiones, bonificaciones por desempeño, horas extras y recargos. Deben validarse las metas, los horarios, las autorizaciones y las bases de cálculo, debido a que estos conceptos incrementan el salario devengado y pueden afectar otras bases.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Devengado no salarial
                p Incluye auxilios, reembolsos y beneficios que no remuneran directamente el servicio. Su finalidad, soporte y clasificación deben comprobarse para mantener estos valores separados del salario.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Deducciones de seguridad social
                p Comprenden los aportes del trabajador a salud y pensión. Requieren validar el ingreso base y los porcentajes aplicables; disminuyen el valor pagado y se remiten a las administradoras correspondientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Deducciones tributarias
                p Incluyen la retención en la fuente cuando resulte aplicable. Deben revisarse el procedimiento y la base tributaria correspondiente antes de efectuar el descuento y trasladarlo a la autoridad tributaria.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Deducciones judiciales
                p Comprenden embargos y órdenes emitidas por una autoridad competente. Es necesario confirmar su vigencia, beneficiario y límites legales antes de efectuar y trasladar el descuento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Deducciones autorizadas
                p Pueden incluir cuotas de cooperativas, créditos, seguros u otros descuentos permitidos. Debe conservarse la autorización y comprobarse el valor de la cuota, pues reducen el pago neto y generan una obligación con terceros.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Total deducido
                p Corresponde a la suma de los descuentos aplicados durante el periodo. Cada valor debe cotejarse con sus soportes y autorizaciones antes de restarlo del total devengado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Neto pagado
                p Es la diferencia entre el total devengado y el total deducido. Debe conciliarse con el comprobante y el medio de pago, pues corresponde al valor finalmente entregado al trabajador.
      //- Fin Slideshow
      p(data-aos="fade-left") Esta estructura permite mantener separados los valores reconocidos, las deducciones procedentes y el resultado final de la nómina.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada a la fabricación de instrumentos musicales reconoce a un asesor comercial un salario básico, una comisión por ventas, horas extras y un reembolso de gastos de desplazamiento debidamente soportado. Durante el mismo periodo debe descontar los aportes del trabajador a salud y pensión, además de una cuota de ahorro autorizada a favor de una cooperativa.
      p(data-aos="fade-left") Para el ejercicio, los pagos salariales ascienden a $2.860.000. Sobre este valor se calcula un aporte del trabajador del 4 % para salud y del 4 % para pensión. Estos porcentajes corresponden a la participación del trabajador dependiente dentro de las cotizaciones generales de ambos sistemas.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 5.
                  span Determinación del valor neto pagado
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Concepto
                        th(style="width: 25%") Naturaleza
                        th(style="width: 25%") Operación
                        th(style="width: 25%") Valor
                    tbody
                      tr
                        td Salario básico
                        td Devengado salarial
                        td Valor mensual pactado
                        td $2.400.000
                      tr
                        td Comisión por ventas
                        td Devengado salarial
                        td Resultado validado del periodo
                        td $300.000
                      tr
                        td Horas extras
                        td Devengado salarial
                        td Horas aprobadas y liquidadas
                        td $160.000
                      tr
                        td Reembolso de desplazamiento
                        td Devengado no salarial
                        td Gasto soportado
                        td $120.000
                      tr
                        td.fw-bold Total devengado
                        td —
                        td Suma de los pagos reconocidos
                        td.fw-bold $2.980.000
                      tr
                        td Aporte a salud
                        td Deducción obligatoria
                        td $2.860.000 × 4 %
                        td $114.400
                      tr
                        td Aporte a pensión
                        td Deducción obligatoria
                        td $2.860.000 × 4 %
                        td $114.400
                      tr
                        td Cuota de ahorro
                        td Deducción autorizada
                        td Valor aprobado por el trabajador
                        td $90.000
                      tr
                        td.fw-bold Total deducido
                        td —
                        td $114.400 + $114.400 + $90.000
                        td.fw-bold $318.800
                      tr
                        td.fw-bold Neto pagado
                        td —
                        td $2.980.000 − $318.800
                        td.fw-bold $2.661.200
            //- FinTabla
            .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img14.png')})` }"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 El cálculo general puede expresarse mediante la siguiente fórmula:
                  br
                  br
                  span.bg-color-6.p-3.d-inline-block.fw-bold
                    | Valor neto pagado = total devengado − total deducido
                    br
                    | $2.980.000 − $318.800 = $2.661.200
      p(data-aos="fade-left") De esta forma, la clasificación no depende únicamente del nombre registrado en el comprobante, sino de la finalidad real del pago. Identificar si el valor remunera el servicio, cubre un gasto o reconoce un beneficio permite reducir errores y preparar la información necesaria para estudiar las modalidades salariales, los auxilios y los beneficios laborales.
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img15.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-8.p-3 El comprobante debe presentar cada concepto de forma independiente, de manera que el trabajador pueda identificar qué valores recibió, cuáles fueron descontados y a qué terceros serán remitidos. Esta separación también facilita cotejar la nómina con los soportes, la seguridad social, la contabilidad y el pago bancario.
          p De esta forma, la organización del devengado y el deducido permite establecer con transparencia el valor neto pagado. La correcta clasificación de cada concepto evita aplicar descuentos sin soporte y proporciona la base para estudiar los periodos, las fórmulas y los demás criterios utilizados en la liquidación de la nómina.
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Periodo de nómina, bases de liquidación y soportes
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-2.h-100.d-flex.align-items-center
            p.mb-0 El <b>periodo de nómina</b> determina las fechas entre las cuales se reconocen salarios, novedades, deducciones y demás conceptos laborales. La organización debe establecer la fecha inicial, la fecha final, el cierre de novedades y el día de pago. El salario en dinero se paga por periodos iguales y vencidos; el jornal no puede superar una semana y el sueldo no puede pagarse por periodos mayores de un mes. Las horas extras y los recargos nocturnos deben pagarse con el salario del periodo en que se causaron o, como máximo, en el periodo siguiente (Código Sustantivo del Trabajo, 1951).
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid(src="@/assets/curso/temas/t3/img16.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Las <b>bases de liquidación</b> no siempre coinciden con el total recibido por el trabajador. Los pagos que remuneran directamente el servicio integran el salario, mientras que los reembolsos, las herramientas y otros conceptos no salariales deben identificarse separadamente. Además, la base puede variar según se liquiden aportes, prestaciones sociales, vacaciones o deducciones; por ejemplo, el auxilio de transporte se incorpora para liquidar prestaciones sociales, mientras que las horas extras se excluyen de la remuneración de vacaciones.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 6.
                  span Periodos y bases utilizadas en la nómina
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Elemento
                        th(style="width: 25%") Descripción
                        th(style="width: 30%") Aplicación en la nómina
                        th(style="width: 25%") Control requerido
                    tbody
                      tr
                        td Fecha inicial
                        td Primer día comprendido en la liquidación.
                        td Determina desde cuándo se reconocen los pagos y las novedades.
                        td Comparar con el contrato y la nómina anterior.
                      tr
                        td Fecha final
                        td Último día incluido en el periodo.
                        td Establece el cierre de los conceptos causados.
                        td Evitar incluir novedades de otro periodo.
                      tr
                        td Fecha de corte
                        td Día límite para recibir y validar novedades.
                        td Permite preparar la prenómina antes del pago.
                        td Comunicarla previamente a todas las áreas.
                      tr
                        td Fecha de pago
                        td Momento previsto para entregar el valor neto al trabajador.
                        td Orienta la programación bancaria y contable.
                        td Comprobar que corresponda con la periodicidad acordada.
                      tr
                        td Base salarial
                        td Pagos que remuneran directamente el servicio.
                        td Permite identificar salario fijo, variable, horas extras, recargos y comisiones.
                        td Aplicar los artículos 127 y 128 del Código Sustantivo del Trabajo.
                      tr
                        td Base prestacional
                        td Conceptos que deben considerarse para liquidar cada prestación social.
                        td Se utiliza para calcular prima, cesantías e intereses, según corresponda.
                        td Revisar la naturaleza de los pagos y el auxilio de transporte aplicable.
                      tr
                        td Base de vacaciones
                        td Salario ordinario o promedio correspondiente, según la modalidad salarial.
                        td Permite reconocer el descanso remunerado.
                        td Excluir horas extras y trabajo en días de descanso obligatorio.
                      tr
                        td Ingreso base de cotización
                        td Valor sobre el cual se determinan los aportes al Sistema de Seguridad Social.
                        td Se utiliza para liquidar salud, pensión y riesgos laborales.
                        td Validar los conceptos salariales, las novedades y las reglas del sistema.
                      tr
                        td Base de deducciones
                        td Valor sobre el cual se aplica cada descuento.
                        td Permite calcular aportes del trabajador, retenciones y deducciones autorizadas.
                        td Confirmar la procedencia y el soporte de cada descuento.
                      tr
                        td Total devengado
                        td Suma de todos los valores reconocidos durante el periodo.
                        td Integra pagos salariales y no salariales.
                        td Conservar cada concepto de manera separada.
                      tr
                        td Neto pagado
                        td Diferencia entre el devengado y las deducciones.
                        td Corresponde al valor entregado al trabajador.
                        td Conciliar con el comprobante y el pago bancario.
            //- FinTabla
            p(data-aos="fade-left") La definición de estos elementos permite establecer el periodo y la base que corresponde a cada concepto antes de efectuar la liquidación.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Soportes del periodo de nómina
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los <b>soportes</b> permiten acreditar el origen, la autorización y el cálculo de cada novedad. Deben recibirse antes de la fecha de corte, validarse y conservarse junto con el comprobante de nómina.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 7.
                  span Soportes para la liquidación de la nómina
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Concepto o novedad
                        th(style="width: 35%") Soporte requerido
                        th(style="width: 40%") Información que debe comprobarse
                    tbody
                      tr
                        td Salario básico
                        td Contrato y modificaciones salariales.
                        td Valor pactado, fecha de vigencia y modalidad salarial.
                      tr
                        td Días trabajados
                        td Registro de asistencia, turnos o reporte del área.
                        td Ingreso, retiro, ausencias y días remunerados.
                      tr
                        td Horas extras y recargos
                        td Registro de tiempo y autorización correspondiente.
                        td Fecha, cantidad, horario diurno o nocturno y aprobación.
                      tr
                        td Comisiones e incentivos
                        td Informe de ventas, producción o cumplimiento de metas.
                        td Resultado alcanzado, porcentaje y periodo de causación.
                      tr
                        td Incapacidades
                        td Certificado expedido o validado por la entidad correspondiente.
                        td Fechas, origen, duración y entidad responsable.
                      tr
                        td Licencias y permisos
                        td Solicitud, autorización o documento que acredita la situación.
                        td Tipo de licencia, periodo y efecto sobre la remuneración.
                      tr
                        td Vacaciones
                        td Solicitud, autorización y registro de vacaciones.
                        td Días causados, disfrutados, pendientes y fecha de inicio.
                      tr
                        td Reembolsos
                        td Facturas, cuentas de cobro o relación de gastos.
                        td Relación con la actividad y valores debidamente soportados.
                      tr
                        td Deducciones autorizadas
                        td Autorización escrita, contrato de crédito o convenio.
                        td Valor, periodicidad, beneficiario y saldo pendiente.
                      tr
                        td Embargos
                        td Orden emitida por la autoridad competente.
                        td Beneficiario, cuantía, límites y vigencia.
                      tr
                        td Afiliaciones
                        td Certificados o registros de salud, pensión, ARL y caja de compensación.
                        td Entidades, fecha de afiliación y novedades reportadas.
                      tr
                        td Pago al trabajador
                        td Certificación bancaria y archivo de dispersión.
                        td Cuenta, identificación, valor neto y resultado de la transacción.
            //- FinTabla
            p(data-aos="fade-left") La validación de estos documentos permite respaldar los pagos y las deducciones registrados y reducir inconsistencias antes del cierre de la nómina.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada al mantenimiento de ascensores liquida mensualmente la nómina de un técnico. El periodo comprende del 1 al 30 de abril, la recepción de novedades cierra el día 25 y el pago se programa para el último día hábil del mes. Durante el periodo se reconocen los siguientes valores:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 8.
                  span Organización de pagos y soportes del periodo de nómina
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Concepto
                        th(style="width: 15%") Valor
                        th(style="width: 25%") Clasificación
                        th(style="width: 30%") Soporte
                    tbody
                      tr
                        td Salario básico
                        td $2.400.000
                        td Salarial
                        td Contrato de trabajo.
                      tr
                        td Incentivo por servicios terminados
                        td $300.000
                        td Salarial
                        td Informe aprobado por el coordinador.
                      tr
                        td Horas extras
                        td $160.000
                        td Salarial
                        td Registro de tiempo suplementario.
                      tr
                        td Auxilio de transporte utilizado en el ejercicio
                        td $200.000
                        td No salarial con efecto prestacional
                        td Validación de las condiciones del trabajador.
                      tr
                        td Reembolso de herramientas menores
                        td $120.000
                        td No salarial
                        td Facturas y autorización del gasto.
                      tr
                        td.fw-bold Total devengado
                        td.fw-bold $3.180.000
                        td.fw-bold —
                        td.fw-bold Consolidación de los conceptos.
            //- FinTabla
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img17.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 Los pagos de naturaleza salarial corresponden a:
          <br><br>
          p.bg-color-6.p-3.fw-bold $2.400.000 + $300.000 + $160.000 = $2.860.000
          <br><br>
          p.mb-3 Para liquidar prima de servicios y cesantías en este ejercicio, se incorpora el auxilio de transporte:
          <br><br>
          p.bg-color-6.p-3.fw-bold $2.860.000 + $200.000 = $3.060.000
      p(data-aos="fade-left") El reembolso de <b>$120.000</b> no se incorpora a estas bases, porque corresponde a la restitución de un gasto soportado y no a la remuneración directa del servicio. La organización debe conservar el contrato, el informe del incentivo, el registro de las horas extras y las facturas antes de aprobar la prenómina.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t3/img18.png", data-aos="zoom-in", style="width: 600px;")
        .col-lg-5.mb-4.mb-lg-0
          .d-flex.flex-column.justify-content-center
            p.mb-3.bg-color-3.p-3 De esta forma, definir el periodo, diferenciar las bases y validar los soportes permite que cada concepto sea reconocido en la fecha y por el valor correspondiente. Este procedimiento facilita la revisión de la prenómina y evita trasladar a la liquidación información incompleta, duplicada o perteneciente a otro periodo.
            p.mb-0 Los elementos que conforman la nómina deben analizarse según su naturaleza y relación con el servicio prestado. La clasificación de los pagos salariales y no salariales, la identificación de las modalidades de remuneración, el control de la jornada y la separación entre devengado y deducido permiten determinar correctamente el valor que recibe el trabajador.
        .col-lg-3
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t3/img19.png", data-aos="zoom-in", style="width: 250px;")
      p(data-aos="fade-left") En consecuencia, la definición de periodos, bases y soportes proporciona información organizada para calcular los pagos laborales y comprobar su procedencia. Estos fundamentos permiten avanzar hacia el estudio de la seguridad social, los aportes parafiscales y las prestaciones derivadas de la relación laboral.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-6.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3.fw-bold Calculadora salarial
          p Para aplicar los conceptos estudiados, utilice la <b>calculadora salarial</b> como apoyo en la identificación y organización de los valores que intervienen en la nómina. Este recurso permite relacionar los pagos laborales con las bases y los cálculos correspondientes, de acuerdo con la información ingresada.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img20.png', alt='', style="object-fit: cover;")


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
<style lang="sass"></style>

