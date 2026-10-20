<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Marco normativo y relación laboral
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img1.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-3.p-3 La gestión de la nómina debe fundamentarse en las normas que regulan la <b>vinculación, remuneración y protección de los trabajadores</b>. Entre estas se encuentran la <b>Constitución Política de Colombia, el Código Sustantivo del Trabajo</b>, las leyes que los desarrollan o modifican, los decretos, las resoluciones, los convenios internacionales ratificados por Colombia y la jurisprudencia. Estas fuentes permiten establecer los derechos laborales, las obligaciones del empleador y los conceptos que deben incorporarse en la nómina.
          p El marco normativo constituye, por tanto, la base para comprender los principios del derecho laboral y determinar las disposiciones aplicables a la relación entre empleadores y trabajadores.
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Fuentes y principios del derecho laboral colombiano
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-9.order-2.order-lg-1
          .row.align-items-stretch.mb-4
            .col-12.col-md-5.px-0.mb-3
              img(src="@/assets/curso/temas/t1/img2.png", style="width:350px; height:100%; object-fit:cover;").m-auto
            .col-12.col-md-7.d-flex.flex-column.justify-content-center
              p.mb-3.bg-color-4.p-2 El derecho laboral colombiano se sustenta en diferentes fuentes normativas que regulan la contratación, la remuneración, la jornada, las prestaciones sociales, la seguridad social y las demás obligaciones derivadas de la relación laboral. Entre ellas se encuentran la <b>Constitución Política de Colombia, el Código Sustantivo del Trabajo</b>, las leyes, los decretos, las resoluciones, los convenios internacionales ratificados por Colombia, la jurisprudencia, las convenciones colectivas y los reglamentos de trabajo.
              p.mb-0 La <b>Constitución Política de Colombia</b>, principalmente en sus artículos 25 y 53, establece principios fundamentales que orientan la protección del trabajo y la interpretación de las disposiciones laborales. Para evitar reiteraciones y facilitar su comprensión, se presentan los artículos y el alcance de cada principio:
        .col-lg-3.order-2.order-lg-2.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t1/img3.png", data-aos="zoom-in", style="width: 500px;")
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 25
                p <b>Protección del trabajo</b>. Reconoce el trabajo como un derecho y una obligación social que debe desarrollarse en condiciones dignas y justas. En la gestión de nómina, este principio exige que la remuneración y las condiciones laborales respeten los derechos del trabajador.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Igualdad de oportunidades</b>. Establece la igualdad de oportunidades para los trabajadores. En la gestión laboral y de nómina, orienta la aplicación de condiciones y derechos conforme con las disposiciones que correspondan.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Remuneración mínima, vital y móvil</b>. Establece este principio en proporción con la cantidad y calidad del trabajo. Su aplicación exige considerar los mínimos laborales correspondientes al determinar la remuneración.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Estabilidad en el empleo</b>. Reconoce la estabilidad como principio mínimo fundamental del trabajo. En la gestión laboral, requiere considerar las condiciones de vinculación y terminación establecidas en la normativa.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Irrenunciabilidad a los beneficios mínimos</b>. Los beneficios mínimos establecidos en las normas laborales no pueden ser objeto de renuncia por parte del trabajador. Este principio protege los derechos mínimos derivados de la relación laboral.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Favorabilidad</b>. En caso de duda en la aplicación e interpretación de las fuentes formales del derecho, debe considerarse la situación más favorable al trabajador. Este principio orienta la resolución de controversias relacionadas con los derechos laborales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Primacía de la realidad sobre las formalidades</b>. Las condiciones efectivas de la relación laboral prevalecen sobre las formalidades establecidas por las partes. Su aplicación permite determinar la naturaleza de la relación de acuerdo con las condiciones en las que se presta el servicio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Seguridad social, capacitación y descanso</b>. Reconoce la garantía a la seguridad social, la capacitación, el adiestramiento y el descanso necesario. Estas garantías se relacionan con diferentes obligaciones derivadas de la relación laboral.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Protección especial</b>. Incluye la protección especial a la mujer, la maternidad y el trabajador menor de edad, aspectos que deben considerarse frente a las situaciones laborales que correspondan.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_10.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Artículo 53
                p <b>Convenios internacionales del trabajo</b>. Los convenios internacionales del trabajo debidamente ratificados forman parte de la legislación interna y complementan el marco de protección de los derechos laborales.
      //- Fin Slideshow
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img4.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3 Estos principios constitucionales proporcionan el marco general para la protección del trabajo y orientan la interpretación y aplicación de las demás disposiciones laborales.
          p.bg-color-2.p-3 Por su parte, el <b>Código Sustantivo del Trabajo</b> desarrolla reglas relacionadas con los derechos mínimos, la favorabilidad y los elementos que permiten establecer la existencia de una relación laboral. Para evitar repetir el nombre de esta norma en cada elemento, se presentan únicamente los artículos correspondientes:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Artículo 1")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Artículo 1
                p <b>Justicia y equilibrio social.</b> Establece como finalidad lograr la justicia en las relaciones que surgen entre empleadores y trabajadores, dentro de un espíritu de coordinación económica y equilibrio social.
          .py-3.py-md-4(titulo="Artículos 13 y 14")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
              .col-md-6
                h4 Artículos 13 y 14
                p <b>Mínimo de derechos y garantías e irrenunciabilidad.</b> Las disposiciones laborales contienen un mínimo de derechos y garantías que no puede desconocerse mediante estipulaciones que afecten los derechos mínimos establecidos para el trabajador.
          .py-3.py-md-4(titulo="Artículo 21")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
              .col-md-6
                h4 Artículo 21
                p <b>Norma más favorable.</b> En caso de conflicto o duda sobre la aplicación de normas vigentes de trabajo, prevalece la más favorable al trabajador y debe aplicarse en su integridad.
          .py-3.py-md-4(titulo="Artículos 23 y 24")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_4.png')
              .col-md-6
                h4 Artículos 23 y 24
                p <b>Elementos de la relación laboral y presunción del contrato de trabajo.</b> Estas disposiciones permiten establecer los elementos del contrato de trabajo y la presunción asociada con la prestación personal del servicio, aspectos fundamentales para determinar las obligaciones derivadas de la relación laboral.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Estas disposiciones complementan los principios constitucionales y permiten relacionarlos con situaciones concretas de contratación y gestión de nómina. En consecuencia, la interpretación laboral no debe limitarse a las condiciones consignadas en un contrato o en una política empresarial. La organización debe aplicar sus procedimientos de acuerdo con las disposiciones vigentes y respetar los derechos mínimos establecidos para el trabajador.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Código Sustantivo del Trabajo y normativa complementaria
      .row.justify-content-center.align-items-stretch
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El <b>Código Sustantivo del Trabajo</b> constituye una de las principales bases normativas para regular las relaciones laborales de carácter particular en Colombia. Sus disposiciones comprenden aspectos relacionados con el contrato de trabajo, el salario, la jornada, los descansos, las prestaciones sociales, las obligaciones de las partes y la terminación del vínculo.
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t1/img5.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Sin embargo, el Código no debe aplicarse de manera aislada. Es necesario considerar las leyes que modifican sus disposiciones, así como los decretos y las resoluciones que reglamentan asuntos específicos. Entre las normas relacionadas con los contenidos de este componente se encuentran la <b>Ley 2466 de 2025</b>, la <b>Ley 2101 de 2021</b>, el <b>Decreto 1072 de 2015</b>, la <b>Ley 100 de 1993</b> y la <b>Ley 1562 de 2012</b>. Las principales normas complementarias y su incidencia en la gestión de nómina se presentan a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img6.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Ley 2466 de 2025")
                p.mb-4 Introduce modificaciones en materia laboral relacionadas, entre otros aspectos, con modalidades contractuales, jornada, trabajo nocturno y días de descanso obligatorio. Estas disposiciones deben considerarse al establecer las condiciones contractuales y los parámetros laborales aplicables.
              .row(titulo="Ley 2101 de 2021")
                p.mb-4 Establece la reducción gradual de la jornada laboral semanal sin disminuir el salario ni afectar los derechos adquiridos de los trabajadores. Su aplicación incide en el control de la jornada y en la determinación del trabajo suplementario.
              .row(titulo="Decreto 1072 de 2015")
                p.mb-4 Compila la reglamentación del sector Trabajo y contiene disposiciones relacionadas con las relaciones laborales y la seguridad y salud en el trabajo que deben considerarse según su ámbito de aplicación.
              .row(titulo="Ley 100 de 1993")
                p.mb-4 Crea el <b>Sistema de Seguridad Social Integral</b> y constituye una de las bases normativas para las obligaciones relacionadas con la seguridad social.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center         
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Ley 1562 de 2012")
                p.mb-4 Modifica el <b>Sistema General de Riesgos Laborales</b> y contiene disposiciones relacionadas con la prevención y protección frente a los riesgos derivados del trabajo.
              .row(titulo="Decretos y resoluciones reglamentarias")
                p.mb-4 Desarrollan procedimientos y condiciones técnicas relacionadas con las disposiciones legales. Deben identificarse aquellas que resulten aplicables al periodo y al proceso de nómina correspondiente.
              .row(titulo="Políticas y reglamentos internos")
                p.mb-4 Establecen procedimientos organizacionales dentro de los límites previstos por la normativa laboral. Pueden definir fechas de corte, responsables, soportes y autorizaciones, sin desconocer los derechos mínimos del trabajador.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img7.png", alt="").img400.m-auto
      //- Fin Accordion 2
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-3.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t1/img8.png", data-aos="zoom-in", style="width: 250px;")
        .col-lg-5.mb-4.mb-lg-0
          .d-flex.flex-column.justify-content-center
            p.mb-3.bg-color-2.p-2 La normativa aplicable puede modificarse con el tiempo; por esta razón, la gestión de nómina requiere identificar las <b>disposiciones vigentes para el periodo que se procesa</b>, así como las condiciones particulares de cada trabajador. Esta revisión permite establecer correctamente los parámetros relacionados con la contratación, la jornada, los pagos y las obligaciones laborales.
            p.mb-0 De esta manera, el marco normativo proporciona los fundamentos necesarios para determinar las condiciones de vinculación y los conceptos que deben incorporarse en la gestión de nómina. A partir de esta base, corresponde profundizar en los <b>elementos esenciales de la relación laboral</b>, cuya concurrencia permite establecer la existencia del contrato de trabajo.
        .col-lg-4
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t1/img9.png", data-aos="zoom-in", style="width: 370px;")
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Elementos esenciales de la relación laboral
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img10.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-3.p-2 La relación laboral se configura cuando concurren tres elementos: <b>prestación personal del servicio, subordinación continuada y salario como retribución</b>. La prestación personal implica que el trabajador realiza directamente la actividad; la subordinación permite al empleador impartir instrucciones sobre el modo, tiempo o cantidad de trabajo e imponer reglamentos; y el salario corresponde al pago recibido por el servicio prestado. El ejercicio de la subordinación debe respetar la dignidad, los derechos mínimos y la prohibición de discriminación (Código Sustantivo del Trabajo, 1951).
          p La existencia del contrato de trabajo se determina por las condiciones reales en las que se desarrolla el servicio y no únicamente por el nombre asignado al acuerdo. Cuando se presentan simultáneamente los tres elementos, existe una relación laboral, aunque el documento haya sido denominado contrato de prestación de servicios, asesoría o colaboración. Esta identificación es necesaria para establecer los salarios, las prestaciones, los aportes y los demás conceptos que deben incorporarse a la nómina (Código Sustantivo del Trabajo, 1951). Para facilitar su comprensión, los elementos esenciales y su incidencia en la gestión de nómina se organizan de la siguiente manera:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Prestación personal del servicio
                p La actividad es realizada directamente por la persona contratada, quien cumple personalmente las funciones asignadas y no puede sustituirse libremente por otra persona. En la nómina, permite identificar al trabajador beneficiario de los pagos y derechos laborales.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Subordinación continuada
                p El empleador puede impartir instrucciones y verificar su cumplimiento durante la relación laboral. Se concreta mediante la asignación de funciones, horarios, turnos, procedimientos, supervisión, permisos y aplicación de reglamentos; además, origina el registro de jornadas, novedades, ausencias, recargos y demás situaciones laborales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Salario
                p Es la retribución que recibe el trabajador por el servicio prestado. Puede corresponder a un pago periódico fijo, variable, por unidad de tiempo, por obra o mediante otras modalidades permitidas, y constituye la base para liquidar pagos laborales y determinar las bases aplicables a prestaciones y aportes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Concurrencia de los elementos
                p Los tres elementos deben presentarse conjuntamente para reconocer el contrato laboral. Cuando la persona presta directamente el servicio, recibe órdenes y obtiene una remuneración, se generan obligaciones relacionadas con la nómina, la seguridad social, las prestaciones y la conservación de soportes.
      //- Fin Slideshow
      p(data-aos="fade-left") En conjunto, estos elementos permiten determinar la existencia de un contrato de trabajo y establecer las obligaciones que se derivan de la relación laboral.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img11.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Una empresa de mantenimiento de equipos vincula a una persona mediante un documento denominado <b>«contrato de servicios»</b>. Sin embargo, la persona debe asistir personalmente de lunes a sábado, cumplir los turnos asignados, utilizar los procedimientos definidos por la empresa, solicitar autorización para ausentarse y presentar informes a un supervisor. A cambio, recibe un pago mensual.
      .row.justify-content-center.align-items-stretch
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-3.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 En esta situación concurren la <b>prestación personal del servicio, la subordinación y la remuneración.</b> Por consiguiente, el nombre utilizado en el documento no es suficiente para excluir la existencia de una relación laboral. La empresa debe analizar las condiciones reales de la vinculación y reconocer las obligaciones laborales que correspondan.
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t1/img12.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 De esta forma, identificar los elementos esenciales permite diferenciar una relación laboral de una contratación independiente y establecer qué pagos, aportes y novedades deben procesarse en la nómina. Este análisis también proporciona la base para estudiar las formas verbal y escrita mediante las cuales puede celebrarse el contrato de trabajo.
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Contrato verbal, contrato escrito y primacía de la realidad
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-lg-9.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-8.p-4 El contrato de trabajo puede celebrarse verbalmente o por escrito, salvo que una disposición exija una forma determinada. En el <b>contrato verbal</b>, las partes deben acordar, como mínimo, la actividad y el lugar donde se realizará, la remuneración y su forma de pago, así como la duración del vínculo. El <b>contrato escrito</b> debe entregarse a cada parte e incluir la identificación, el lugar de prestación del servicio, las funciones, la remuneración, la periodicidad del pago, la duración y las condiciones de terminación (Código Sustantivo del Trabajo, 1951; Decreto 617, 1954).
          p La forma verbal no elimina los derechos laborales ni las obligaciones de nómina. No obstante, la legislación vigente exige que los contratos a término fijo y por duración de obra o labor determinada consten por escrito; cuando no se cumplen estas condiciones, pueden entenderse celebrados a término indefinido desde el inicio. Además, la <b>primacía de la realidad</b> establece que las condiciones efectivas del servicio prevalecen sobre el nombre o la forma asignada al acuerdo (Ley 2466 de 2025). Las principales diferencias entre las formas de celebración del contrato y su incidencia práctica se presentan a continuación:
        .col-12.col-sm-9.col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img13.png', alt='', style="width: 230px;")
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
                              img(src='@/assets/curso/temas/t1/tarjeta04_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Validez
                            p.text-start El contrato verbal es válido cuando la ley no exige formalidad escrita. El contrato escrito documenta las condiciones aceptadas por las partes. Ambas formas pueden generar derechos salariales, prestacionales y de seguridad social.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Información acordada
                            p.text-start En el contrato verbal se acuerdan el trabajo, el lugar, la remuneración, la forma de pago y la duración. El contrato escrito incorpora, además, la identificación de las partes, las funciones y las condiciones de terminación. Esta información debe registrarse correctamente en el sistema de nómina.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Evidencia
                            p.text-start El contrato verbal puede acreditarse mediante testimonios, pagos, comunicaciones y demás soportes. En el contrato escrito, las condiciones quedan documentadas, lo que facilita verificar salarios, fechas, funciones y modalidad contractual.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Término indefinido
                            p.text-start Puede celebrarse verbalmente o por escrito. La documentación escrita permite precisar las condiciones del vínculo, pero la ausencia de un documento no impide reconocer la relación laboral.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Término fijo
                            p.text-start Debe celebrarse por escrito y señalar su duración. La celebración verbal no cumple la formalidad exigida actualmente y puede dar lugar al reconocimiento del vínculo como contrato a término indefinido.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Obra o labor determinada
                            p.text-start Debe constar por escrito y describir de manera precisa y detallada la obra o labor. Esta formalización permite establecer las condiciones que determinan el inicio y la finalización de la necesidad contratada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Primacía de la realidad
                            p.text-start Exige analizar las condiciones efectivas del servicio y contrastarlas con lo consignado en el acuerdo. Cuando existen diferencias entre la ejecución real y el documento contractual, prevalecen los hechos.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t1/img14.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") Estas diferencias permiten identificar la forma contractual aplicable y establecer sus efectos en la gestión laboral y de nómina.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img15.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Una empresa de servicios de jardinería vincula verbalmente a un trabajador para atender permanentemente las zonas verdes de varios conjuntos. Las partes acuerdan las funciones, el lugar de trabajo, el salario mensual y la fecha de pago. Aunque no exista un documento firmado, la relación laboral es válida y la empresa debe afiliar al trabajador, incluirlo en la nómina y reconocer los derechos correspondientes.
          <br>
          <br>
          p En otro caso, la empresa firma un documento denominado <b>«prestación de servicios»</b>, pero exige atención personal, cumplimiento de horarios, autorización para ausentarse y obediencia permanente a un supervisor. Estas condiciones deben analizarse con base en la <b>primacía de la realidad</b>, porque el nombre del documento no impide reconocer una relación laboral cuando se presentan sus elementos esenciales.
      p(data-aos="fade-left") De esta forma, la organización debe verificar tanto la modalidad contractual como las condiciones reales en las que se presta el servicio. Documentar los acuerdos, conservar los soportes e incorporar oportunamente al trabajador en los procesos de nómina permite reducir inconsistencias y establecer con claridad los derechos y las obligaciones de las partes.
      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Derechos, obligaciones y soportes de vinculación
      p(data-aos="fade-left") La relación laboral genera <b>derechos y obligaciones recíprocas</b>. El empleador debe pagar la remuneración pactada, suministrar los medios necesarios para desarrollar la labor, proteger la seguridad y la dignidad del trabajador, conceder los descansos y las licencias correspondientes y cumplir las obligaciones relacionadas con la seguridad social. El trabajador, por su parte, debe realizar personalmente la labor, atender las instrucciones legítimas, cumplir el reglamento de trabajo, cuidar los elementos entregados y manejar responsablemente la información reservada.
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img16.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-2.bg-color-8.p-3 Los <b>soportes de vinculación</b> permiten acreditar las condiciones acordadas y registrar correctamente al trabajador en la nómina. Según el caso, pueden comprender el contrato, los documentos de identificación, la información bancaria, las afiliaciones, los datos de beneficiarios, las constancias de entrega de reglamentos y los registros de ingreso. El empleador debe afiliar a las personas vinculadas laboralmente al sistema de salud, informar las novedades y realizar oportunamente los aportes; asimismo, la afiliación a riesgos laborales debe efectuarse antes del inicio de la actividad para garantizar la cobertura (Ley 100 de 1993).
          p Las responsabilidades y los principales soportes asociados con la vinculación se organizan de la siguiente manera:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img17.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Formalización de la vinculación")
                p.mb-4 El empleador define las condiciones laborales y las documenta cuando la modalidad lo requiere; el trabajador suministra información completa y verifica las condiciones acordadas. El soporte corresponde al contrato de trabajo o al registro del acuerdo verbal.
              .row(titulo="Remuneración")
                p.mb-4 El empleador paga el salario en las condiciones y los periodos convenidos, mientras que el trabajador suministra los datos necesarios para recibirlo. Los principales soportes son la cláusula salarial, la certificación bancaria y el comprobante de nómina.
              .row(titulo="Prestación del servicio")
                p.mb-4 El empleador suministra instrucciones, herramientas y condiciones adecuadas, y el trabajador realiza personalmente las funciones acordadas. Esta relación puede respaldarse mediante la descripción del cargo, el manual de funciones o el acta de entrega.
              .row(titulo="Seguridad social")
                p.mb-4 El empleador gestiona las afiliaciones, reporta novedades y efectúa los aportes correspondientes. El trabajador elige las entidades cuando procede e informa sus novedades personales. Los soportes comprenden formularios o certificados de afiliación a salud, pensión, ARL y caja de compensación.
              .row(titulo="Seguridad y salud en el trabajo")
                p.mb-4 El empleador previene los riesgos y suministra los elementos de protección requeridos según la actividad; el trabajador utiliza adecuadamente estos elementos y cumple las medidas preventivas. Entre los soportes se encuentran el examen de ingreso, la inducción, la entrega de elementos y la afiliación a la ARL.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center         
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Jornada y asistencia")
                p.mb-4 El empleador define horarios, turnos y mecanismos de control dentro de los límites legales. El trabajador cumple la jornada y reporta ausencias, incapacidades o permisos. Los registros de asistencia, turnos y novedades respaldan esta información.
              .row(titulo="Información personal")
                p.mb-4 El empleador protege los datos utilizados en la gestión laboral y el trabajador suministra información veraz y comunica los cambios. Los soportes incluyen el formato de datos, la autorización de tratamiento y los documentos de identificación.
              .row(titulo="Reglamentos y políticas")
                p.mb-4 El empleador comunica las reglas aplicables al trabajo y a la nómina, mientras que el trabajador debe conocerlas y cumplirlas dentro de los límites legales. La constancia de inducción o de entrega del reglamento respalda este proceso.
              .row(titulo="Terminación del vínculo")
                p.mb-4 El empleador liquida y paga los conceptos correspondientes, y el trabajador entrega los elementos recibidos y actualiza sus datos de contacto. Los soportes pueden comprender la carta de terminación, el paz y salvo, la liquidación y el certificado laboral.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img18.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La conservación de estos soportes permite respaldar la vinculación, mantener información consistente y preparar adecuadamente el procesamiento de la nómina.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-6.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 Una empresa de producción audiovisual contrata a una persona para operar equipos de grabación. Antes de iniciar labores, formaliza el contrato, registra el salario y la fecha de ingreso, verifica sus datos bancarios y realiza las afiliaciones correspondientes. También entrega los equipos de trabajo, explica los riesgos asociados al cargo y conserva las constancias en el expediente laboral.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img19.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") Con esta información, el área de nómina puede identificar el periodo trabajado, la remuneración acordada, la jornada, las entidades de seguridad social y las novedades que deben procesarse. Si falta alguno de estos datos, la vinculación debe revisarse antes del cierre de la prenómina para prevenir pagos incorrectos o periodos sin cobertura.
      .row.align-items-stretch.mb-5(data-aos="fade-right")
        .col-lg-5.mb-4.mb-lg-0
          figure.mb-0.h-100
            img.mx-auto(src="@/assets/curso/temas/t1/img20.png", data-aos="zoom-in", style="width: 100%; height: 100%; object-fit: cover;")
        .col-lg-4.mb-4.mb-lg-0.d-flex.flex-column.justify-content-between
          p.mb-3.bg-color-8.p-3 De esta forma, los derechos y las obligaciones de las partes se convierten en actividades concretas que deben estar respaldadas documentalmente. Un expediente de vinculación completo facilita el registro del trabajador, la liquidación de sus pagos y la validación posterior de las novedades de nómina.
          p.mb-0 El marco normativo permite reconocer cuándo existe una relación laboral, cuáles modalidades contractuales pueden utilizarse y qué responsabilidades surgen para el empleador y el trabajador. La identificación de los elementos esenciales, la adecuada formalización del contrato y la conservación de los soportes proporcionan la base para determinar los pagos, aportes y novedades que deben incorporarse al proceso de nómina.
        .col-lg-3
          figure.mb-0.d-flex.align-items-center.h-100
            img.mx-auto(src="@/assets/curso/temas/t1/img21.png", data-aos="zoom-in", style="max-width: 280px;")
</template>

<script>
export default {
  name: 'Tema1',
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
