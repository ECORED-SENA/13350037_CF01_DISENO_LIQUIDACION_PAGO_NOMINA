<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Modalidades de contratación y efectos laborales
      .row.justify-content-center.align-items-stretch
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-2.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La <b>modalidad contractual</b> debe seleccionarse de acuerdo con la naturaleza, la duración y las condiciones reales del trabajo. Esta decisión influye en la fecha de ingreso, la permanencia del vínculo, los pagos laborales, las prestaciones sociales, la seguridad social y las novedades que posteriormente deben incorporarse en la nómina.
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t2/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 La legislación laboral establece como forma general de vinculación el <b>contrato a término indefinido</b>, sin impedir la utilización de contratos a término fijo, por obra o labor determinada, o para trabajos ocasionales, accidentales o transitorios, cuando las condiciones lo justifiquen. La elección de una modalidad diferente debe cumplir los requisitos legales y corresponder con la realidad del servicio prestado (Ley 2466 de 2025).
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Contrato de trabajo a término indefinido
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img2.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-3.p-3 El <b>contrato a término indefinido</b> no establece previamente una fecha para su finalización y permanece vigente mientras subsistan las causas que dieron origen a la vinculación y la actividad contratada. La <b>Ley 2466 de 2025</b> lo establece como la modalidad general de vinculación laboral, orientada a fortalecer la estabilidad en el empleo, aunque permite utilizar otras modalidades cuando correspondan con la necesidad empresarial.
          p Esta modalidad puede celebrarse verbalmente o por escrito; sin embargo, documentarla facilita identificar el cargo, el salario, la jornada, el lugar de trabajo, la fecha de ingreso y las demás condiciones que deben registrarse en la nómina. El trabajador puede terminar el contrato mediante un preaviso de treinta días calendario, pero no puede pactarse una sanción por omitirlo. La terminación también puede producirse por mutuo acuerdo, justa causa, decisión unilateral o las demás situaciones reconocidas por la normativa laboral.
      p(data-aos="fade-left") Los principales aspectos que deben considerarse para registrar y administrar esta modalidad contractual son los siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Duración
                p No tiene una fecha de terminación previamente establecida. En la nómina, la fecha de ingreso se registra sin programar automáticamente una fecha de retiro.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Vigencia
                p Se mantiene mientras subsistan las causas de la vinculación y la actividad contratada. Por tanto, el trabajador permanece activo hasta que se reporte una novedad de terminación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Forma
                p Puede celebrarse verbalmente o por escrito. En ambos casos deben conservarse los datos y soportes que permitan acreditar las condiciones acordadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Remuneración
                p Se establece según el cargo, la jornada y la modalidad salarial pactada. El salario debe registrarse como base para liquidar devengados, prestaciones y aportes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Prestaciones sociales
                p Genera los derechos laborales correspondientes desde el inicio de la relación. En la nómina se reconocen y provisionan prima, cesantías, intereses y vacaciones según el tiempo trabajado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Seguridad social
                p El empleador debe gestionar las afiliaciones y los aportes aplicables. Para ello, deben registrarse la fecha de ingreso, el salario base y las entidades administradoras correspondientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Terminación
                p No depende del vencimiento de un plazo. Cuando finaliza la relación, se deben registrar la causa y la fecha de retiro, así como preparar la liquidación correspondiente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Preaviso del trabajador
                p El trabajador puede comunicar su retiro con treinta días calendario de anticipación. Esta información facilita programar el retiro, el reemplazo y el cierre de las novedades pendientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Estabilidad
                p Proporciona continuidad mientras permanezca la necesidad del trabajo. Esta característica permite proyectar pagos, aportes y provisiones sin establecer previamente una fecha cierta de finalización.
      //- Fin Slideshow
      p(data-aos="fade-left") En conjunto, estas características permiten mantener actualizado el registro del trabajador y gestionar las obligaciones derivadas de una vinculación cuya terminación no se encuentra previamente determinada.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa dedicada a la distribución de medicamentos vincula a una auxiliar de inventarios para desarrollar una función permanente dentro de la operación. La trabajadora presta personalmente el servicio, cumple la jornada establecida, recibe instrucciones del coordinador y obtiene una remuneración mensual. Debido a que la necesidad no está limitada a una fecha o proyecto específico, se formaliza un contrato a término indefinido.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img3.png", data-aos="zoom-in", style="width: 100%; height: 100%; object-fit: cover;")
        .col-lg-5.mb-4.mb-lg-0.d-flex.flex-column.justify-content-center
          p.mb-4.bg-color-4.p-4 Para incorporarla en la nómina, la empresa registra la fecha de ingreso, el salario, la jornada, el cargo, la cuenta bancaria y las afiliaciones a seguridad social. El sistema no establece una fecha automática de retiro y mantiene activa la vinculación mientras continúe la relación laboral.
          p.mb-0 De esta forma, el <b>contrato a término indefinido</b> permite atender necesidades permanentes y proporciona continuidad a la relación de trabajo. Su correcta identificación facilita registrar al trabajador, proyectar sus obligaciones laborales y diferenciar esta modalidad de los contratos sujetos a un plazo o a la ejecución de una obra determinada.
        .col-lg-3
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img4.png", data-aos="zoom-in", style="width: 270px;")
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Contrato de trabajo a término fijo y sus prórrogas
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img5.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 El <b>contrato a término fijo</b> establece previamente la fecha de inicio y terminación de la relación laboral. Debe celebrarse por escrito y su duración total, incluidas las prórrogas, no puede superar cuatro años. Cuando no se cumple la formalidad escrita o se excede este límite, el vínculo se entiende celebrado a término indefinido desde el inicio. Durante su vigencia, el trabajador tiene derecho al salario, la seguridad social, las vacaciones y las prestaciones sociales proporcionales al tiempo laborado (Ley 2466 de 2025).
          p La prórroga puede ser <b>pactada o automática</b>. La primera se realiza mediante acuerdo escrito entre las partes; cuando el plazo inicial es inferior a un año, puede renovarse varias veces, pero, después de la cuarta prórroga, los periodos siguientes no pueden ser inferiores a un año. La prórroga automática ocurre cuando ninguna de las partes comunica su intención de terminar el vínculo con una anticipación mínima de treinta días respecto del vencimiento. En todos los casos debe respetarse el límite máximo de cuatro años (Ley 2466 de 2025).
      p(data-aos="fade-left") A continuación, se presenta un video sobre el control de los contratos a término fijo y sus prórrogas, en el que se explican los requisitos, plazos y aspectos fundamentales para su adecuada gestión en la nómina.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una clínica veterinaria vincula por escrito a una recepcionista durante seis meses para atender un incremento temporal de usuarios. El contrato señala las fechas de inicio y finalización, el cargo, el salario, la jornada y las condiciones de pago. El área de talento humano registra la fecha de vencimiento y programa una alerta para revisar la continuidad de la necesidad laboral.
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Si ninguna de las partes comunica oportunamente su intención de finalizar el vínculo, el contrato se prorroga automáticamente por el periodo correspondiente, sin superar el límite legal. La trabajadora continúa activa en la nómina y conserva sus derechos laborales. Cuando la empresa decide no renovar, debe realizar el preaviso dentro del término establecido, reportar la fecha de retiro y liquidar los salarios, las prestaciones y las vacaciones pendientes (Ley 2466 de 2025).
      p(data-aos="fade-left") De esta manera, el control de las fechas, las prórrogas y los preavisos evita renovaciones no previstas y registros incorrectos en la nómina. La modalidad a término fijo debe responder a una necesidad temporal, cumplir la formalidad escrita y garantizar los derechos laborales correspondientes durante el tiempo efectivamente trabajado.
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Contrato por obra o labor y trabajo ocasional
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El <b>contrato por duración de obra o labor</b> se celebra para atender una actividad concreta cuya terminación puede identificarse objetivamente. Debe constar por escrito y describir de forma precisa la obra o labor contratada. Si no cumple estas condiciones o el trabajador continúa prestando servicios después de finalizada la actividad, el vínculo se entiende celebrado a término indefinido desde su inicio, salvo que se formalice por escrito una obra nueva y diferente. El trabajador tiene derecho a vacaciones y prestaciones sociales proporcionales al tiempo laborado (Código Sustantivo del Trabajo, 1951; Ley 2466 de 2025).
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t2/img7.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-3(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 El <b>trabajo ocasional, accidental o transitorio</b> es de corta duración, no superior a un mes, y debe corresponder a labores diferentes de las actividades normales del empleador. No debe confundirse con una necesidad permanente, un incremento habitual de producción o un contrato por obra. Aunque su duración sea breve, cuando existe relación laboral deben gestionarse los pagos, las afiliaciones y los derechos correspondientes al tiempo trabajado (Código Sustantivo del Trabajo, 1951; Sentencia C-823/06, 2006).
      p(data-aos="fade-left") Las principales diferencias entre estas modalidades se organizan de la siguiente manera:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img8.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Finalidad")
                p.mb-4 El contrato por obra o labor atiende una obra, proyecto o actividad claramente identificada. El trabajo ocasional responde a una labor breve y diferente de las actividades normales del empleador.
              .row(titulo="Duración")
                p.mb-4 El contrato por obra o labor permanece vigente hasta que termine la actividad especificada. El trabajo ocasional, accidental o transitorio no puede superar un mes.
              .row(titulo="Forma")
                p.mb-4 El contrato por obra o labor debe celebrarse por escrito. El trabajo ocasional puede celebrarse verbalmente o por escrito, sin perjuicio de la conveniencia de documentarlo.
              .row(titulo="Descripción requerida")
                p.mb-4 En la obra o labor debe indicarse de manera precisa y detallada la actividad contratada. En el trabajo ocasional debe identificarse la necesidad extraordinaria y la actividad que será realizada.
              .row(titulo="Terminación")
                p.mb-4 En el contrato por obra o labor depende de la finalización comprobable de la actividad y no de una fecha escogida arbitrariamente. En el trabajo ocasional ocurre cuando termina la actividad breve, dentro del límite legal.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center         
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Actividad empresarial")
                p.mb-4 La obra o labor puede relacionarse con el objeto normal de la empresa, siempre que corresponda a una actividad delimitada. El trabajo ocasional debe ser diferente de las actividades normales del empleador.
              .row(titulo="Continuidad del servicio")
                p.mb-4 Si el trabajador continúa después de finalizar la obra, debe formalizarse una nueva labor diferente o reconocerse el vínculo indefinido. El trabajo ocasional no debe utilizarse para atender necesidades habituales o permanentes.
              .row(titulo="Registro en nómina")
                p.mb-4 En la obra o labor se registran la actividad contratada, la fecha de ingreso, el salario, las afiliaciones y las novedades. En el trabajo ocasional se incorporan el periodo efectivamente trabajado, los pagos y las afiliaciones aplicables.
              .row(titulo="Derechos laborales")
                p.mb-4 En ambas modalidades deben reconocerse los derechos correspondientes al vínculo laboral. Para la obra o labor se contemplan salario, seguridad social, vacaciones y prestaciones proporcionales; en el trabajo ocasional se reconocen los derechos y la seguridad social correspondientes al tiempo efectivamente trabajado.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img9.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La diferencia fundamental radica en la finalidad, duración y relación de la actividad con la operación habitual del empleador, aspectos que deben quedar correctamente identificados al registrar la vinculación.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa de energía solar contrata por escrito a un técnico para instalar los sistemas eléctricos de una planta fotovoltaica. El documento identifica el proyecto, la ubicación, las actividades técnicas y el resultado que determina la finalización. Mientras se ejecuta la obra, el trabajador debe permanecer activo en la nómina y recibir los pagos, las prestaciones y los aportes correspondientes.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img10.png", data-aos="zoom-in", style="width: 100%; height: 100%; object-fit: cover;")
        .col-lg-5.mb-4.mb-lg-0.d-flex.flex-column.justify-content-center
          p.mb-4.bg-color-4.p-2 Por otra parte, una editorial contrata durante diez días a una persona para retirar mobiliario deteriorado y pintar una bodega antes de trasladar su archivo. Como esta labor es breve, no supera un mes y es distinta de la edición y comercialización de publicaciones, puede corresponder a un trabajo ocasional. No sería adecuado utilizar esta modalidad para vincular de manera repetida a una persona que corrige textos o diseña publicaciones, porque esas actividades forman parte de la operación normal de la empresa (Ley 2466 de 2025).
          p.mb-0 De esta manera, la selección de estas modalidades exige revisar la actividad, su duración y la posibilidad de identificar claramente su finalización. La documentación adecuada permite registrar la vinculación en la nómina, reconocer los derechos del trabajador y evitar que una necesidad permanente sea presentada como temporal.
        .col-lg-3
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img11.png", data-aos="zoom-in", style="width: 270px;")
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Contrato de aprendizaje y modalidades especiales
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img12.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-3.p-2 El <b>contrato de aprendizaje</b> es un contrato laboral especial y a término fijo cuya finalidad principal es facilitar la formación teórica y práctica del aprendiz. Debe formalizarse por escrito, guardar relación con el programa formativo y tener una duración determinada que no supere tres años. En la formación tradicional, el apoyo de sostenimiento corresponde, como mínimo, al 75 % de un salario mínimo durante la fase lectiva y al 100 % durante la fase práctica; para estudiantes universitarios no puede ser inferior a un salario mínimo (Ley 2466 de 2025).
          p El <b>teletrabajo, el trabajo remoto y el trabajo en casa</b> no eliminan la naturaleza laboral del vínculo, sino que establecen formas particulares de prestar el servicio fuera de las instalaciones del empleador. El teletrabajo se apoya en tecnologías de la información; el trabajo remoto se desarrolla de esta manera durante toda la relación; y el trabajo en casa es una habilitación temporal originada por situaciones ocasionales, excepcionales o especiales. En estas modalidades se mantienen el salario, las prestaciones, la seguridad social y los demás derechos laborales (Ley 2088 de 2021; Ley 1221 de 2008).
      p(data-aos="fade-left") Para diferenciar estas vinculaciones y establecer su incidencia en la nómina, se consideran las siguientes características:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aprendizaje en fase lectiva
                p El aprendiz desarrolla principalmente la formación teórica prevista en el programa. La empresa patrocinadora asume la afiliación y los aportes a salud y riesgos laborales; en el registro deben incorporarse el apoyo de sostenimiento, la fase, las fechas y las afiliaciones correspondientes.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aprendizaje en fase práctica
                p El aprendiz aplica sus conocimientos en la empresa patrocinadora. Comprende salud, pensión y riesgos laborales, además de prestaciones, auxilios y demás derechos propios del contrato laboral; por ello, deben liquidarse el apoyo, los aportes, las prestaciones y las novedades presentadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Formación dual
                p Alterna la formación teórica y práctica mediante la participación de la institución educativa y la empresa. Durante toda la formación se aplican las garantías previstas para la fase práctica y se controlan el esquema de alternancia, el apoyo, los aportes y los periodos efectivamente desarrollados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Teletrabajo
                p Las labores se realizan mediante tecnologías de la información fuera de la sede del empleador, de forma autónoma, móvil, híbrida u otra reconocida legalmente. Se mantienen los derechos laborales, sindicales y de seguridad social; además, deben registrarse salario, jornada, novedades, auxilios o compensaciones aplicables y lugar de trabajo reportado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Trabajo remoto
                p Toda la relación laboral, desde su inicio hasta su terminación, se desarrolla de manera remota. Se reconocen las mismas garantías de cualquier contrato laboral y la cobertura de seguridad social; asimismo, deben registrarse las condiciones de ejecución, los equipos, la conectividad, la jornada y las novedades.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Trabajo en casa
                p Es una habilitación temporal para trabajar fuera del lugar habitual ante situaciones ocasionales, excepcionales o especiales. No modifica el contrato ni disminuye los derechos previamente acordados, por lo que el trabajador continúa activo bajo las mismas condiciones salariales y prestacionales.
      //- Fin Slideshow
      p(data-aos="fade-left") Estas diferencias permiten establecer qué condiciones, afiliaciones, apoyos y novedades deben registrarse según la modalidad aplicable.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una empresa productora de empaques biodegradables celebra un contrato escrito de aprendizaje con una estudiante de mantenimiento industrial. Durante la fase lectiva registra el apoyo de sostenimiento y las afiliaciones a salud y riesgos laborales. Al comenzar la fase práctica, actualiza la novedad en el sistema e incorpora los aportes a pensión, las prestaciones sociales y los demás conceptos aplicables a esta etapa (Decreto 223 de 2026).
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img13.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La misma empresa acuerda teletrabajo híbrido con una analista de compras, quien alterna sus labores entre la sede y su domicilio. Este cambio no crea un contrato independiente ni elimina sus derechos: la trabajadora continúa recibiendo salario, prestaciones y seguridad social, mientras el área de nómina controla la jornada, las novedades y las condiciones pactadas para el desarrollo del trabajo (Ley 1221 de 2008).
      p(data-aos="fade-left") En consecuencia, la organización debe diferenciar el contrato laboral especial de aprendizaje de las formas utilizadas para ejecutar el trabajo a distancia. Esta clasificación permite registrar correctamente las fases, los apoyos, los salarios, las afiliaciones y las novedades, evitando tratar como iguales vinculaciones que tienen finalidades y condiciones distintas.
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Prestación de servicios y contrato realidad
      p(data-aos="fade-left") El <b>contrato de prestación de servicios</b> se utiliza cuando una persona desarrolla una actividad con autonomía técnica y administrativa, sin subordinación laboral. En el ámbito privado se rige por disposiciones civiles o comerciales, entre ellas las normas del Código Civil sobre servicios inmateriales. El contratista organiza la ejecución del objeto acordado, recibe honorarios y, en principio, no genera salario, prestaciones sociales ni inclusión como trabajador en la nómina.
      .row.mb-2.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img14.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-2.p-2 Sin embargo, el nombre del contrato no determina la naturaleza real de la vinculación. Cuando concurren la <b>prestación personal del servicio, la remuneración y la subordinación continuada</b>, puede configurarse un <b>contrato realidad</b>. La subordinación puede reflejarse en órdenes permanentes, control sobre el modo y tiempo de trabajo, cumplimiento obligatorio de horarios, sometimiento a reglamentos y autorización para ausentarse. En tal caso, pueden surgir las obligaciones salariales, prestacionales y de seguridad social propias de una relación laboral.
      p(data-aos="fade-left") A continuación, se presenta un pódcast  sobre las principales diferencias entre el contrato laboral y el contrato de prestación de servicios, considerando su régimen aplicable, las partes, la subordinación y las condiciones de ejecución.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-4(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#000") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Diferencias entre contrato laboral y prestación de servicios
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t2/img15.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      p(data-aos="fade-left") Estos elementos permiten identificar principalmente el grado de <b>autonomía o subordinación</b> presente en la vinculación. Además de las condiciones de ejecución, es necesario diferenciar los pagos, las obligaciones de seguridad social y las consecuencias de la terminación contractual:
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
                              img(src='@/assets/curso/temas/t2/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Remuneración
                            p.text-start En la relación laboral se reconoce salario y se procesa en nómina. En la prestación de servicios se pagan honorarios según el contrato y los entregables.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Prestaciones sociales
                            p.text-start En la relación laboral se reconocen prima, cesantías, intereses y vacaciones cuando correspondan. El contrato civil, por sí solo, no genera prestaciones laborales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Seguridad social
                            p.text-start En el contrato laboral, el empleador realiza las afiliaciones y los aportes que le corresponden. En la prestación de servicios, el contratista gestiona sus aportes como independiente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Terminación
                            p.text-start El contrato laboral se somete a las causas y consecuencias establecidas en la legislación laboral. La prestación de servicios se rige por las condiciones civiles o comerciales pactadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Contrato realidad
                            p.text-start Se configura cuando las condiciones efectivas reúnen los elementos propios de una relación laboral, pese a la denominación asignada al acuerdo.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t2/img16.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") La clasificación debe fundamentarse en las <b>condiciones reales de ejecución</b>, ya que estas determinan las obligaciones laborales y el tratamiento correspondiente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Un laboratorio de análisis ambiental contrata a una ingeniera para elaborar un diagnóstico técnico sobre la calidad del agua en una planta industrial. La profesional define su metodología, organiza las visitas, utiliza sus propios equipos, presta servicios a otros clientes y entrega un informe en la fecha acordada. Estas condiciones reflejan autonomía y permiten tratar el pago como honorarios derivados de una prestación de servicios.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-6.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 La situación sería diferente si el laboratorio le exigiera asistir diariamente en un horario fijo, solicitar permisos para ausentarse, cumplir órdenes permanentes de un supervisor y desarrollar indefinidamente las mismas funciones del personal de planta. Estos hechos podrían evidenciar subordinación y dar lugar al reconocimiento de un <b>contrato realidad</b>, aunque el documento firmado tenga otra denominación.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img17.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") De esta manera, antes de definir cómo se registrará un pago, la organización debe analizar la autonomía, la subordinación y las condiciones reales del servicio. Esta revisión evita incorporar indebidamente honorarios en la nómina o excluir de ella a una persona que, por la forma en que desarrolla su actividad, tiene la condición material de trabajador.
      .row.justify-content-center.align-items-stretch
        .col-12.col-md-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-3.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Las modalidades de contratación deben seleccionarse de acuerdo con la duración, la finalidad y las condiciones reales de la actividad. Los contratos indefinidos, a término fijo, por obra o labor y de aprendizaje generan efectos particulares que deben reflejarse en las fechas, los pagos, las afiliaciones y las novedades de nómina.
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t2/img18.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-3(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Por consiguiente, identificar correctamente la modalidad contractual permite reconocer los derechos laborales, evitar simulaciones y preparar información coherente para determinar el salario, la jornada, las prestaciones y los demás elementos que conforman la nómina.
</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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

